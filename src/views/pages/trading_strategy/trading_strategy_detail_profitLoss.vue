<template lang="pug">
   .trading-detail-content
        .trading-detail-content-box
            .trading-detail-content-title
              .trading-detail-content-title-name.summary 收益
              <span>（按日统计）</span>
            //- <div class="trading-profitLoss-box-title"><span></span>（按日统计）</div>
            <div id="profitCharts" ref="profitCharts" style="width: 1100px;margin:0 auto;height:400px;"></div>
            .static-table
                el-table(:data="tableData"
                    width="100%"
                    align="center"
                    show-summary
                    :span-method="arraySpanMethod"
                    :summary-method="getSummaries")
                    el-table-column(prop="January" label="1月" width="75" align="center")
                    el-table-column(prop="February" label="2月" width="75" align="center")
                    el-table-column(prop="March" label="3月" width="75" align="center")
                    el-table-column(prop="April" label="4月" width="75" align="center")
                    el-table-column(prop="May" label="5月" width="75" align="center")
                    el-table-column(prop="June" label="6月" width="75" align="center")
                    el-table-column(prop="July" label="7月" width="75" align="center")
                    el-table-column(prop="August" label="8月" width="75" align="center")
                    el-table-column(prop="September" label="9月" width="75" align="center")
                    el-table-column(prop="October" label="10月" width="75" align="center")
                    el-table-column(prop="November" label="11月" width="75" align="center")
                    el-table-column(prop="December" label="12月" width="75" align="center")
                    el-table-column(prop="YTD" label="YTD" align="center" )
                .total-static 

        .trading-detail-content-box
            .trading-detail-content-title
              .trading-detail-content-title-name.summary 盈亏分析
              <span>（按日统计）</span>
            //- <div class="trading-profitLoss-box-title"><span>盈亏分析</span>（按日统计）</div>
            <div id="profitLossCharts" ref="profitLossCharts" style="width: 1100px;margin:0 auto;height:400px;"></div>
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
            totalNum:'99.99%',
            orderFlowData:[],
            userId: '',
            mtAccId: '',
            dateList: [],
            winList: [],
            profitList: [],
            incomeList: [],
            lossList: [],
            tableData:[{
                January:'1.34%',
                February:'1.34%',
                March:'- -',
                April:'1.34%',
                May:'1.34%',
                June:'1.34%',
                July:'1.34%',
                August:'1.34%',
                September:'1.34%',
                October:'1.34%',
                November:'1.34%',
                December:'1.34%',
                YTD:"91.41%",

            },{
                January:'1.34%',
                February:'1.34%',
                March:'- -',
                April:'1.34%',
                May:'1.34%',
                June:'1.34%',
                July:'1.34%',
                August:'1.34%',
                September:'1.34%',
                October:'1.34%',
                November:'1.34%',
                December:'1.34%',      
                YTD:"91.41%",
            }
            ],
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
        arraySpanMethod({data, row, column, rowIndex, columnIndex }) {
            // console.log(data.length)
        },
        getSummaries(param){

            const { columns, data } = param;
            const sums = [];
            console.log(param);

            columns.forEach((column, index) => {
                if (index === 11) {
                    sums[index] = '历史总计';
                    return;
                }
                if(column.property == 'YTD'){
                    sums[index] = this.totalNum
                }
            });
            return sums;
        },
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
                // title: {
                //     text: '收益',   //图表顶部的标题
                //     subtext: '按日统计'    //副标题
                // },
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
.trading-detail-content
    flex: 1
    &-box
        // margin-top: 20px
        background: #ffffff
        padding: 10px 0px 40px
    &-title
        display: flex
        // justify-content: space-between
        // align-items: center
        height: 28px
        line-height: 28px
        padding: 11px 0
        border-bottom: 1px solid #eee
        box-sizing: content-box
        margin-bottom: 20px
        span
            font-size: 14px
            color: #999
        &-name
            font-size: 14px
            color: #333
            font-weight: 500
            padding-left: 10px
            position: relative

            &.summary:after
                content: ""
                display: block
                position: absolute
                top: 7px
                left: 0
                width: 3px;
                height: 14px;
                background: #1138FF;
                border-radius: 2px
        

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
.static-table
    width: 980px
    margin: 50px auto 
    /deep/ 
        .el-table
            border: 1px solid #ccc
            border-top: 0 none 
            th 
                line-height: 14px
                &:last-child
                    border-left: 1px solid #ccc
                .cell
                    color: #333
            .cell
                padding: 0
                font-size: 12px;
                font-weight: 400;
                color: #409EFF;
                line-height: 17px;
            td,th.is-leaf
                border-bottom: 1px solid #ccc
            th,td 
                &:last-child
                    border-left: 1px solid #ccc
                    
        .el-table__footer
            th,td 
                background: transparent
                .cell
                    color: #333 
                    font-weight: 500
                &:last-child
                    .cell
                        font-weight: 400;
                        color: #409EFF;
        .el-table__footer-wrapper
            .el-table__footer
                td,.is-leaf 
                    border-top: 1px solid #ccc
                    border-bottom: transparent;
</style>
