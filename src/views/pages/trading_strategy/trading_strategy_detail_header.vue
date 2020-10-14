<template lang="pug">
  #e-trading-strategy-detail-header
    .trading-detail-background
     .trading-detail-header
      .trading-detail-header-container
        .trading-detail-header-left
          .trading-detail-header-avatar
            img(
              :src="summary.avatarUrl ? url + summary.avatarUrl : null"
            )
          .trading-detail-header-nick
            .trading-detail-header-nickname {{summary.signalName}}
            span.trading-detail-header-nickattr {{summary.sex == 1 ? "男" : "女"}}
            span.trading-detail-header-nickattr 北京
        .trading-detail-header-context
          .trading-detail-header-introduction
            
            .trading-detail-header-info
              .trading-detail-header-info-item
                .trading-detail-header-info-item-label 余额
                .trading-detail-header-info-item-value {{summary.balance}}
              .trading-detail-header-info-item
                .trading-detail-header-info-item-label 收益
                .trading-detail-header-info-item-value {{orderSumData.orderIncome}}
              .trading-detail-header-info-item
                .trading-detail-header-info-item-label 杠杆
                .trading-detail-header-info-item-value 1:{{summary.leverage}}
              .trading-detail-header-info-item
                .trading-detail-header-info-item-label 订阅
                .trading-detail-header-info-item-value {{summary.signalFollows}}
      .trading-detail-header-tips 
        .trading-detail-header-tips-title 重要免责声明
        .trading-detail-header-tips-desc 外汇市场的保证金交易（含外汇交易、差价合约等）存在较高风险，不适合所有投资者。 您需为完全民事行为能力人， 能有效签署并遵守条款和所确认的合同。 本网站的网页内容（含数据部分）是通过在不同经纪商获取的交易结果整理公布，所有信息仅供您参考，并无任何责任， 未经许可不得使用或以任何形式出售。
</template>

<script>
import _config from '../../../base_config'

export default {
  data() {
    return {
      url: _config.BASE_URL
    }
  },
  props: {
    summary: {
      type: Object
    },
      orderSumData: {
          type: Object
      }
  }
}
</script>

<style lang="sass" scoped>
.trading-detail

  &-header
    width: 1190px
    margin: 0 auto 
    padding-bottom: 20px
    background: #1138FF

    &-container
      position: relative
      display: flex
      width: 1190px
      margin: 43px auto 0
      // background: #1138FF;
    &-left
      display: inline-flex
      margin-left: 49px
    &-avatar
      margin-top: -23px
      margin-right: 31px
      width: 91px
      height: 91px
      border: 2px solid #fff
      border-radius: 50%
      overflow: hidden
      background-color: #eee

      img
        display: block
        width: 100%
        height: 100%

    &-context
      flex: 1
      margin-left: 30px
      padding-top: 10px
    &-nick
      margin-top: 25px
      color: #fff
    &-nickname
      margin-bottom: 5px
      font-size: 14px
      line-height: 20px
    &-nickattr
      padding-right: 20px
      font-size: 12px
    &-info
      margin-top: 16px
      display: flex
      -webkit-box-orient: horizontal
      -webkit-box-direction: normal
      flex-direction: row
      text-align: center
      -webkit-box-pack: justify
      justify-content: space-between
      width: 800px
      align-self: flex-end
      float: right
      color: white
      &-item
        flex: 0 0 200px
        text-align: center
        cursor: pointer
        white-space: nowrap
        text-overflow: ellipsis
        position: relative
        &:after
          display: block
          content: ''
          position: absolute
          right: 0
          top: 9px
          width: 1px 
          height: 40px
          background: rgba(238, 238, 238, 0.2)
        &-value
          line-height: 40px
          font-size: 28px
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        &-label
          line-height: 17px
          margin-bottom: 3px
          font-size: 12px
          color: hsla(0,0%,100%,.8)
    &-tips 
      margin: 14px 30px 0
      padding: 20px 20px 20px 30px
      line-height: 17px
      color: #fff
      font-size: 12px
      background: rgba(151, 151, 151, 0.21)
      &-title 
        line-height: 20px
        margin-bottom: 6px
        font-size: 14px




</style>
