<template lang="pug">
  #e-trading-strategy-detail
    .e-container.trading-detail
      DetailHeader(
          :summary="summary"
          :orderSumData="orderSumData"
        )
      .trading-detail-container
        DetailSide(
          :summary="summary"
        )
        DetailConternt(
          :summary="summary"
          :orderSumData="orderSumData"
          :signalValuationData="signalValuationData"
        )
</template>

<script>
import DetailHeader from './trading_strategy_detail_header.vue'
import DetailSide from './trading_strategy_detail_side.vue'
import DetailConternt from './trading_strategy_detail_content.vue'
import E from '../../../utils'

export default {
  data () {
    return {
      signalId: '',
      valuation: {},
      summary: {},
      signalValuationData: {},
      orderSumData: {}
    }
  },
  components: {
    DetailHeader,
    DetailSide,
    DetailConternt
  },
  mounted() {
    this.signalId = this.$route.params.id
    this.getSummaryData()
  },
  methods: {
    // 交易汇总
    getSummaryData() {
      return E.handleRequest(E.api().post('signal/querySignalUsers', {
        signalId: this.signalId
      }))
        .then(res => {
          this.summary = res.data.content.data[0]
            this.signalValuationData.depositMaxRate = this.summary.depositMaxRate
            this.signalValuationData.withdrawMaxRate = this.summary.withdrawMaxRate
            this.getOrderSumData()
        })
    },
      getOrderSumData() {
          let params = {
              userId: this.summary.userId,
              mtAccId: this.summary.mtAccId
          }
          let data = {
              params
          }
          return E.handleRequest(E.api().post('report/order/getOrderSum', data))
              .then(res => {
                  if(res.data===null||res.data.content==null){
                      this.$message.warning('信号源数据还未同步，请稍后再试！')
                      return
                  }
                  this.orderSumData = res.data.content
                  this.signalValuationData.tradeDaySum = this.orderSumData.tradeDaySum
                  this.signalValuationData.orderProfitRate = this.orderSumData.orderProfitRate
                  this.signalValuationData.orderLossRate = this.orderSumData.orderLossRate
              })
      }
  }
}
</script>

<style lang="sass" scoped>
.trading-detail
  background-color: #f0f0f0

  &-container
    display: flex
    width: 1200px
    margin: 20px auto
</style>
