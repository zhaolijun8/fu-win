<template lang="pug">
   <div>
        <div id="profitCharts" ref="profitCharts" style="width: 900px;height:400px;"></div>
        <br/>
        <div id="profitLossCharts" ref="profitLossCharts" style="width: 900px;height:400px;"></div>
   </div>
</template>

<script>
import E from "../../../utils"
import moment from "moment";

export default {
  props: {
    summary: {
      type: Object
    }
  },
    watch: {
        summary: function(v1) {
            this.userId = this.summary.userId
            this.mtAccId = this.summary.mtAccId
            this.getprofitLossData()
            this.setProfitLossCharts()
            this.setProfitCharts()
        }
    },
    data() {
        return {
            orderFlowData:[],
            userId: '',
            mtAccId: '',
            dateList: [],
            winList: [],
            profitList: [],
            incomeList: [],
            lossList: []
        }
    },
    mounted() {
        this.userId = this.summary.userId
        this.mtAccId = this.summary.mtAccId
      this.getprofitLossData()
        this.setProfitLossCharts()
        this.setProfitCharts()
    },
    methods: {
        getprofitLossData() {
            if(this.userId === '' || this.mtAccId === '' ){
                return
            }
            let params = {
                userId: this.userId,
                mtAccId: this.mtAccId
            }
            let data = {
                params
            }
            return E.handleRequest(E.api().post('report/order/queryOrderFlow', data))
                .then(res => {
                    if(res.data !== undefined&&res.data !== null&&res.data.content !== undefined&&res.data.content !== null){
                        this.orderFlowData = res.data.content.data
                        let size = this.orderFlowData.length-1
                        for ( let i=size ; i>=0; i--) {
                            this.dateList[size-i] =moment(this.orderFlowData[i].tradeDate).format("YYYY-MM-DD")
                            this.winList[size-i] = this.orderFlowData[i].orderProfit
                            this.lossList[size-i] = this.orderFlowData[i].orderLoss
                            this.incomeList[size-i] = this.orderFlowData[i].orderIncome
                            if(i === size){
                                this.profitList[size-i] = this.orderFlowData[i].orderIncome
                            }else {
                                this.profitList[size-i] = this.profitList[size-i-1] + this.orderFlowData[i].orderIncome
                            }
                        }
                        this.setProfitLossCharts()
                        this.setProfitCharts()
                    }
                })
        },
        setProfitLossCharts() {
            // let myCharts = this.$echarts.init(this.$refs.profitLossCharts)
            let myCharts = this.$echarts.init(document.getElementById('profitLossCharts'))
            let options = {
                title: {
                    text: '盈亏分析',   //图表顶部的标题
                    subtext: '按日统计'    //副标题
                },
                tooltip: {   //鼠标悬浮框的提示文字
                    trigger: 'axis'
                },
                legend: {
                    data:['盈利情况','亏损情况']
                },
                xAxis : [{  //x轴坐标数据
                    type : 'category',
                    data : this.dateList
                }],
                yAxis : [{   //y轴坐标数据
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} $'
                    }
                }],
                series: [  //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
                    {
                        name:"盈利情况",
                        type: "bar",  //pie->饼状图  line->折线图  bar->柱状图
                        data: this.winList,
                        color: ['#1fbb95'],
                        stack: 'one',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 7
                            }
                        }
                    },
                    {
                        name:"亏损情况",
                        type: "bar",  //pie->饼状图  line->折线图  bar->柱状图
                        data: this.lossList,
                        color: ['#eb4e5c'],
                        stack: 'one',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 7
                            }
                        }
                    }
                ]}
            myCharts.setOption(options)
        },
        setProfitCharts() {
            // let myCharts = this.$echarts.init(this.$refs.profitLossCharts)
            let myCharts = this.$echarts.init(document.getElementById('profitCharts'))
            let options = {
                title: {
                    text: '收益',   //图表顶部的标题
                    subtext: '按日统计'    //副标题
                },
                tooltip: {   //鼠标悬浮框的提示文字
                    trigger: 'axis'
                },
                legend: {
                    data:['累计收益','盈利情况','亏损情况']
                },
                xAxis : [{  //x轴坐标数据
                    type : 'category',
                    data : this.dateList
                }],
                yAxis : [{   //y轴坐标数据
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} $'
                    }
                }],
                series: [  //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
                    {
                        name:"累计收益",
                        type: "line",  //pie->饼状图  line->折线图  bar->柱状图
                        data: this.profitList,
                        smooth: true,
                        color: ['#409eff']
                    },
                    {
                        name:"盈利情况",
                        type: "bar",  //pie->饼状图  line->折线图  bar->柱状图
                        data: this.winList,
                        color: ['#1fbb95'],
                        stack: 'one',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 7
                            }
                        }
                    },
                    {
                        name:"亏损情况",
                        type: "bar",  //pie->饼状图  line->折线图  bar->柱状图
                        data: this.lossList,
                        color: ['#eb4e5c'],
                        stack: 'one',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 7
                            }
                        }
                    }
                ]}
            myCharts.setOption(options)
        }
    }
}
</script>

<style lang="sass" scoped>
.trading-detail

  &-summary

    &-table
      display: flex
      flex-wrap: wrap
      border-top: 1px solid #e6e6e6
      border-left: 1px solid #e6e6e6

      &-item
        display: flex
        justify-content: space-between
        align-items: center
        width: 25%
        height: 40px
        padding: 5px 10px
        border-bottom: 1px solid #e6e6e6
        border-right: 1px solid #e6e6e6
        font-size: 12px

      &-label
        color: #666
</style>
