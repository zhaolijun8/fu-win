<template lang="pug">
  #e-quantization
    BaseLayout
        .e-container 
            .quant-page
                .quant-top 
                    span 把策略上架到商城，与更多量化爱好者一起交流学习！
                    .quant-top-file 
                        el-upload( class="quant-uploader"
                            action="uploadUrl"
                            :show-file-list="false")
                            <el-button type="primary">上传策略</el-button>
                        

                .quant-modular
                    .quant-trade
                        .trade-title 策略精选
                            .trade-descript(@click="JumpTo" 
                            style="cursor:pointer") 常见问题 >
                    .quant-filter 累计收益   
                        div.quant-filter-item(
                            v-for="(list,index) in filterList"
                            :class="{active: active == index}"
                            @click="filterActive(index)"
                        ) 
                            .quant-filter-item-label {{list.text}}
                            .quant-filter-item-sort()
                                <i class="el-icon-caret-top" :class="{'sort': quantSort == 1}"></i>
                                <i class="el-icon-caret-bottom" :class="{'sort': quantSort == 0}"></i>
                    
                    .quant-canvas
                        .quant-canvas-list(v-for="i in quantList")
                            .quant-canvas-title 
                                span 趋势追踪策略
                                .author 策略作者：
                                    img.avatar(:src="avatar")
                                    .name {{i.name}}
                            .quant-canvas-desc
                                .quant-canvas-left
                                    .quant-canvas-legend
                                        .legend-box
                                            span.legend-symbol
                                            span.legend-text 策略收益                                       
                                        .legend-box
                                            span.legend-symbol
                                            span.legend-text 基准收益
                                    .quant-canvas-img
                                        traderYield(
                                            class="quant-qt-trader"
                                            :chart-data="i.chartData")
                                .quant-canvas-right
                                    .quant-canvas-income 
                                        label 累计收益
                                        .balue {{i.income}}
                                    .quant-canvas-attrs
                                        .quant-canvas-attrs-a 
                                            label 最近一个月
                                            .balue {{i.monthNum}}
                                        .quant-canvas-attrs-a 
                                            label 最近三个月
                                            .balue {{i.threeNum}}
                                        .quant-canvas-attrs-a 
                                            label 最近六个月
                                            .balue {{i.halfNum}}
                                        .quant-canvas-attrs-a 
                                            label 适合资金
                                            .balue {{i.fitNum}}

                                    .quant-canvas-total 3999元/月
                                        span （剩余数量：{{i.leftNum}}）
                                    .quant-canvas-btns
                                        .btn1 立即订阅
                                        .btn2 免费咨询




                    
</template> 
<script>
import BaseLayout from '../../layout/base_layout.vue'
import traderYield from '../../layout/trader_yield.vue'
import avatar from '../../../assets/images/avatar-default.svg'

export default {
    data() {
        return {
            avatar,
            uploadUrl:'', //上传的地址
            active:1,
            quantSort:0,
            chartWidth:'700px',
            filterList:[
                {
                    val:0,
                    text:'近1个月',
                },
                {
                    val:1,
                    text:'近3个月',
                },{
                    val:2,
                    text:'近6个月',
                },{
                    val:3,
                    text:'适合资金',
                },{
                    val:4,
                    text:'订阅价格',
                },{
                    val:5,
                    text:'剩余数量',
                }
            ],
            quantList:[
                {
                    name:'传奇大亨',
                    income:'132.13%',
                    monthNum:'12.43%',
                    threeNum:'24.62%',
                    halfNum:'27.09%',
                    fitNum:"50000$",
                    leftNum:"354",
                    chartData: {
                        columns: ["策略收益", "收益", "中证500"],
                        rows: [
                        { 策略收益: "2020-10-01", 收益: "14.99", 中证500: "4.99" },
                        { 策略收益: "2020-10-02", 收益: "23.86", 中证500: "4.99" },
                        { 策略收益: "2020-10-03", 收益: "35", 中证500: "4.99" },
                        { 策略收益: "2020-10-04", 收益: "17", 中证500: "4.99" },
                        { 策略收益: "2020-10-05", 收益: "22", 中证500: "10" },
                        { 策略收益: "2020-10-06", 收益: "18", 中证500: "4.99" },
                        { 策略收益: "2020-10-07", 收益: "26", 中证500: "4.99" },
                        ],
                    },
                },{
                    name:'智慧资管',
                    income:'103.52%',
                    monthNum:'21.74%',
                    threeNum:'18.83%',
                    halfNum:'34.25%',
                    fitNum:"20000$",
                    leftNum:"132",
                    chartData: {
                        columns: ["策略收益", "收益", "中证500"],
                        rows: [
                        { 策略收益: "2020-10-01", 收益: "24.37", 中证500: "4.99" },
                        { 策略收益: "2020-10-02", 收益: "13.35", 中证500: "4.99" },
                        { 策略收益: "2020-10-03", 收益: "21", 中证500: "4.99" },
                        { 策略收益: "2020-10-04", 收益: "27", 中证500: "4.99" },
                        { 策略收益: "2020-10-05", 收益: "36", 中证500: "10" },
                        { 策略收益: "2020-10-06", 收益: "34", 中证500: "4.99" },
                        { 策略收益: "2020-10-07", 收益: "40", 中证500: "4.99" },
                        ],
                    },
                },{
                    name:'胆大心细',
                    income:'92.34%',
                    monthNum:'23.73%',
                    threeNum:'53.35%',
                    halfNum:'34.36%',
                    fitNum:"9.1%",
                    leftNum:"642",
                    chartData: {
                        columns: ["策略收益", "收益", "中证500"],
                        rows: [
                        { 策略收益: "2020-10-01", 收益: "35", 中证500: "4.99" },
                        { 策略收益: "2020-10-02", 收益: "53.86", 中证500: "4.99" },
                        { 策略收益: "2020-10-03", 收益: "38", 中证500: "4.99" },
                        { 策略收益: "2020-10-04", 收益: "37", 中证500: "4.99" },
                        { 策略收益: "2020-10-05", 收益: "12", 中证500: "10" },
                        { 策略收益: "2020-10-06", 收益: "65", 中证500: "4.99" },
                        { 策略收益: "2020-10-07", 收益: "12", 中证500: "4.99" },
                        ],
                    },
                }
            ],
        }
    },
    components: {
        BaseLayout,
        traderYield
    },
    methods: {
        JumpTo(){
            this.$router.push('/'); //跳转到xx页
        },
        filterActive(eq){
            this.active = eq
            this.quantSort = !this.quantSort;
        }
    }
}
</script>
<style lang="sass" scoped>
    @import './quantizations'
</style>