<template lang="pug">
  #e-quantization
    BaseLayout
        .e-container
            .follow-moduler 
                .follow-moduler-top
                    .follow-moduler-top-list(
                        v-for="f in quantList"
                    )
                        .title {{f.name}}
                        .quant-canvas-legend
                            .legend-box
                                span.legend-symbol
                                span.legend-text 策略收益                                       
                            .legend-box
                                span.legend-symbol
                                span.legend-text 基准收益
                        .quant-canvas-img
                            traderYieldSmall(
                                :chart-data="f.chartData")
                            //- img(width="100%" src="https://image.joinquant.com/backtest_1b31d87a7ca4775a171fcffdb59a69af.png?date=3c6d5daf2bb9702fdfd3d91cc7c8dac1")
                        .follow-moduler-top-item
                            .quant-item-list 年化收益
                                .label.clo {{f.yearNum}}
                            .quant-item-list 最大回撤
                                .label {{f.maxWithdraw}}
                            .quant-item-list 初始资金
                                .label {{f.fitNum}}

                        .bottom 
                            .btn 立即跟随     
                        
                Trader
                .trader-policy
                    .trader-policy-l
                        .trander-tt 
                            span.title 策略信息
                        traderPolicy
                    .trader-policy-r
                        .trander-tt 
                            span.title 模拟交易收益率
                        .filter-list 累计收益
                            .label(
                                v-for="(i, index) in filterLabel",
                                @click="filterHandler(i)",
                                :class="{ checked: filterCheckId == index }"
                            ) {{ i.value }}
                        traderYield(
                            :chart-data="chartData")

                .follow-posit
                    .trander-tt 
                        span.title 策略持仓
                       
                    .follow-posit-top  当前持仓
                        .follow-posit-top-r 
                            span 历史持仓
                            el-date-picker(
                            v-model="date"
                            default-value="date"
                            type="date"
                            size="small"
                            placeholder="选择日期")
                    .follow-posit-table
                        el-table(
                            v-if="followData.length > 0"
                            :data="followData"
                            border
                            style="width: 100%")
                            el-table-column(
                                prop="variet"
                                label="品种"
                                width="180")
                            el-table-column(
                                prop="number"
                                label="数量"
                                width="100")
                            el-table-column(
                                prop="market"
                                label="市值"
                                width="100")
                            el-table-column(
                                prop="const"
                                label="成本价"
                                width="100")
                            el-table-column(
                                prop="present"
                                label="现价"
                                width="180")
                            el-table-column(
                                prop="position"
                                label="仓位"
                                width="120")
                            el-table-column(
                                prop="profit"
                                label="当日盈亏"
                                )
                            el-table-column(
                                prop="totalprofit"
                                label="累计盈亏"
                                width="180")
                        .no-data(v-else="followData") 暂无数据

</template>
<script>
    import BaseLayout from '../../layout/base_layout.vue'
    import Trader from '../../layout/trader.vue'
    import traderPolicy from '../../layout/trader_policy.vue'
    import traderYield from '../../layout/trader_yield.vue'
    import traderYieldSmall from '../../layout/trader_yield_small.vue'
    import avatar from '../../../assets/images/avatar-default.svg'
    export default {
        data() {
            return {
                date: '',
                followData:[
                    {
                        variet:'XAUUSD',
                        number:'10.1',
                        market:'19748.33',
                        const:'1825.31',
                        present:'1974.83',
                        position:'11',
                        profit:'20.15',
                        totalprofit:'1025.14'
                    }
                ],
                followList:[],
                filterCheckId:0,
                filterLabel: [
                    {
                    id: 0,
                    value: "1个星期",
                    },
                    {
                    id: 1,
                    value: "1个月",
                    },
                    {
                    id: 2,
                    value: "6个月",
                    },
                    {
                    id: 3,
                    value: "1年",
                    },
                    {
                    id: 4,
                    value: "全部",
                    },
                ],
                quantList:[
                    {
                        name:'趋势追踪',
                        yearNum:'57.86%',
                        fitNum:"10000$",
                        maxWithdraw:"15%",
                        chartData: {
                            columns: ["策略收益", "收益", "基准收益"],
                            rows: [
                                { 策略收益: "2020-10-01", 收益: "14.99", 基准收益: "4.99" },
                                { 策略收益: "2020-10-02", 收益: "23.86", 基准收益: "4.99" },
                                { 策略收益: "2020-10-03", 收益: "35", 基准收益: "4.99" },
                                { 策略收益: "2020-10-04", 收益: "24", 基准收益: "4.99" },
                                { 策略收益: "2020-10-05", 收益: "22", 基准收益: "10" },
                                { 策略收益: "2020-10-06", 收益: "35", 基准收益: "4.99" },
                                { 策略收益: "2020-10-07", 收益: "34", 基准收益: "4.99" },
                            ],
                        },
                    },{
                        name:'多因子套利',
                        yearNum:'68.43%',
                        fitNum:"20000$",
                        maxWithdraw:"20%",
                        chartData: {
                            columns: ["策略收益", "收益", "基准收益"],
                            rows: [
                                { 策略收益: "2020-10-01", 收益: "14.37", 基准收益: "4.99" },
                                { 策略收益: "2020-10-02", 收益: "13.35", 基准收益: "4.99" },
                                { 策略收益: "2020-10-03", 收益: "21", 基准收益: "4.99" },
                                { 策略收益: "2020-10-04", 收益: "27", 基准收益: "4.99" },
                                { 策略收益: "2020-10-05", 收益: "36", 基准收益: "10" },
                                { 策略收益: "2020-10-06", 收益: "34", 基准收益: "4.99" },
                                { 策略收益: "2020-10-07", 收益: "34", 基准收益: "4.99" },
                            ],
                        },
                    },{
                        name:'股指期权',
                        yearNum:'76.3%',
                        fitNum:"20000$",
                        maxWithdraw:"30%",
                        chartData: {
                            columns: ["策略收益", "收益", "基准收益"],
                            rows: [
                                { 策略收益: "2020-10-01", 收益: "35", 基准收益: "4.99" },
                                { 策略收益: "2020-10-02", 收益: "35.86", 基准收益: "4.99" },
                                { 策略收益: "2020-10-03", 收益: "38", 基准收益: "4.99" },
                                { 策略收益: "2020-10-04", 收益: "37", 基准收益: "4.99" },
                                { 策略收益: "2020-10-05", 收益: "36", 基准收益: "10" },
                                { 策略收益: "2020-10-06", 收益: "65", 基准收益: "4.99" },
                                { 策略收益: "2020-10-07", 收益: "34", 基准收益: "4.99" },
                            ],
                        },
                    },{
                        name:'海外基金',
                        yearNum:'43.35%',
                        fitNum:"10000$",
                        maxWithdraw:"30%",
                        chartData: {
                            columns: ["策略收益", "收益", "基准收益"],
                            rows: [
                                { 策略收益: "2020-10-01", 收益: "14", 基准收益: "4.99" },
                                { 策略收益: "2020-10-02", 收益: "24.86", 基准收益: "4.99" },
                                { 策略收益: "2020-10-03", 收益: "24", 基准收益: "4.99" },
                                { 策略收益: "2020-10-04", 收益: "25", 基准收益: "4.99" },
                                { 策略收益: "2020-10-05", 收益: "12", 基准收益: "10" },
                                { 策略收益: "2020-10-06", 收益: "27", 基准收益: "4.99" },
                                { 策略收益: "2020-10-07", 收益: "35", 基准收益: "4.99" },
                            ],
                        },
                    }
                ],
                chartData: {
                    columns: ["策略收益", "收益", "基准收益"],
                    rows: [
                    { 策略收益: "2020-10-01", 收益: "4.99", 基准收益: "4.99" },
                    { 策略收益: "2020-10-02", 收益: "11.86", 基准收益: "4.99" },
                    { 策略收益: "2020-10-03", 收益: "13", 基准收益: "4.99" },
                    { 策略收益: "2020-10-04", 收益: "17", 基准收益: "4.99" },
                    { 策略收益: "2020-10-05", 收益: "16", 基准收益: "10" },
                    { 策略收益: "2020-10-06", 收益: "24", 基准收益: "4.99" },
                    { 策略收益: "2020-10-07", 收益: "28", 基准收益: "4.99" },
                    ],
                },
            }
        },
        components: {
        BaseLayout,
        Trader,
        traderPolicy,
        traderYield,
        traderYieldSmall
        },
        methods: {

            filterHandler(item) {
                this.filterCheckId = item.id;
            },
        },
        created(){
            this.date = new Date();
        }
    }
</script>
<style lang="sass" scoped>
    @import './follow'
</style>