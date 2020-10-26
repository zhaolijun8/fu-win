<template lang="pug">
  #e-quantization
    BaseLayout
        .e-container
            .follow-moduler 
                .follow-moduler-top
                    .follow-moduler-top-list(
                        v-for="f in 4"
                    )
                        .title 趋势追踪
                        .quant-canvas-legend
                            .legend-box
                                span.legend-symbol
                                span.legend-text 策略收益                                       
                            .legend-box
                                span.legend-symbol
                                span.legend-text 泸深300
                        .quant-canvas-img                                      
                            img(width="100%" src="https://image.joinquant.com/backtest_1b31d87a7ca4775a171fcffdb59a69af.png?date=3c6d5daf2bb9702fdfd3d91cc7c8dac1")
                        .follow-moduler-top-item
                            .quant-item-list 年化收益
                                .label.clo 139%
                            .quant-item-list 最大回撤
                                .label 139%
                            .quant-item-list 初始资金
                                .label 139%

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
                        traderYield
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
    import avatar from '../../../assets/images/avatar-default.svg'
    export default {
        data() {
            return {
                date: '',
                followData:[
                    {
                        variet:'111',
                        number:'111',
                        market:'111',
                        const:'111',
                        present:'11',
                        position:'11',
                       profit:'11', 
                        totalprofit:'11'
                    }
                ],
                followList:[]
            }
        },
        components: {
        BaseLayout,
        Trader,
        traderPolicy,
        traderYield
        },
        methods: {

        },
        created(){
            this.date = new Date();
        }
    }
</script>
<style lang="sass" scoped>
    @import './follow'
</style>