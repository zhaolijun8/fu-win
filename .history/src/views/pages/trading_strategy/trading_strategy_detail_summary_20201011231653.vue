<template lang="pug">
  .trading-detail-summary-table

    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 累计交易手数
      .trading-detail-summary-table-value {{orderReportData.orderLots}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 日均交易手数
      .trading-detail-summary-table-value {{getDouble(orderReportData.orderLotsDaily,2)}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 盈利手数
      .trading-detail-summary-table-value {{orderReportData.orderProfitLots}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 亏损手数
      .trading-detail-summary-table-value {{orderReportData.orderLossLots}}

    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 累计交易笔数
      .trading-detail-summary-table-value {{orderReportData.orderCount}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 日均交易笔数
      .trading-detail-summary-table-value {{getDouble(orderReportData.orderCountDaily,2)}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 盈利笔数
      .trading-detail-summary-table-value {{orderReportData.orderProfitCount}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 亏损笔数
      .trading-detail-summary-table-value {{orderReportData.orderLossCount}}

    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 累计收益
      .trading-detail-summary-table-value {{orderReportData.orderIncome}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 交易胜率
      .trading-detail-summary-table-value {{getPersent(orderReportData.orderWinRate)}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 盈利金额
      .trading-detail-summary-table-value {{orderReportData.orderProfit}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 亏损金额
      .trading-detail-summary-table-value {{orderReportData.orderLoss}}

    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 收益率
      .trading-detail-summary-table-value {{getPersent(orderReportData.orderIncome / summary.deposit)}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 净值盈亏比
      .trading-detail-summary-table-value {{getDouble(orderReportData.orderPlRate,2)}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 盈利手数占比
      .trading-detail-summary-table-value {{getPersent(orderReportData.orderProfitRate)}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 亏损手数占比
      .trading-detail-summary-table-value {{getPersent(orderReportData.orderLossRate)}}

    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 初始交易时间
      .trading-detail-summary-table-value {{getDay(orderReportData.beginDate)}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 平均持仓时间
      .trading-detail-summary-table-value {{Math.round(orderReportData.orderHoldTimeAvg / 3600)}} 小时
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 每笔平均盈利
      .trading-detail-summary-table-value {{getDouble(orderReportData.orderProfitAvg,2)}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 每笔平均亏损
      .trading-detail-summary-table-value {{getDouble(orderReportData.orderLossAvg,2)}}

    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 累计交易天数
      .trading-detail-summary-table-value {{orderReportData.tradeDaySum}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 预期回报
      .trading-detail-summary-table-value {{getDouble(orderReportData.orderExpectedReturn,2)}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 单笔最大获利
      .trading-detail-summary-table-value {{orderReportData.orderProfitMax}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 单笔最大亏损
      .trading-detail-summary-table-value {{orderReportData.orderLossMax}}

    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 入金
      .trading-detail-summary-table-value {{summary.deposit}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 累计隔夜息
      .trading-detail-summary-table-value {{orderReportData.orderSwap}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 日最大连续获利天
      .trading-detail-summary-table-value {{orderReportData.orderProfitKeepCount}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 日最大连亏损利天
      .trading-detail-summary-table-value {{orderReportData.orderLossKeepCount}}

    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 出金
      .trading-detail-summary-table-value {{summary.withdraw}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 累计手续费
      .trading-detail-summary-table-value {{orderReportData.orderCommission}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 日最大连续获利
      .trading-detail-summary-table-value {{orderReportData.orderProfitKeep}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 日最大连续亏损
      .trading-detail-summary-table-value {{orderReportData.orderLossKeep}}

</template>

<script>
    import moment from "moment";
    import E from "../../../utils";

    export default {
  props: {
    summary: {
      type: Object
    }
  },
    data() {
        return {
            orderReportData: {},
            userId: '',
            mtAccId: ''
        }
    },
    watch: {
        summary: function(v1) {
            this.getorderReportData()
        }
    },
    mounted() {
        this.getorderReportData()
    },
    methods: {
        getorderReportData() {
            if(this.summary === undefined || this.summary === null || this.summary === ''|| this.summary.userId === undefined){
                return
            }
            let params = {
                userId: this.summary.userId,
                mtAccId: this.summary.mtAccId
            }
            let data = {
                params
            }
            return E.handleRequest(E.api().post('report/order/getOrderSum', data))
                .then(res => {
                    this.orderReportData = res.data.content
                })
        },
        getDay: function(date) {
            return moment(date).format("YYYY-MM-DD")
        },
        getPersent: function(value) {
            if (value === null || value==='' || value === undefined) {
                return ''
            } else {
                let persent = (value * 100).toFixed(2)
                return persent + '%'
            }
        },
        getDouble: function(value,dot) {
            if (value === null || value==='' || value === undefined) {
                return ''
            } else {
                let doubleValue = value.toFixed(dot)
                return doubleValue
            }
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
        font-size: 14px
        color: #333
</style>
