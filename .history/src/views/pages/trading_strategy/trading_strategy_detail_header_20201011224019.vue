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
            .trading-detail-header-nickattr {{summary.sex == 1 ? "男" : "女"}}
            .trading-detail-header-nickattr 北京
        .trading-detail-header-context
          .trading-detail-header-introduction
            
            .trading-detail-header-info
              .trading-detail-header-info-item
                .trading-detail-header-info-item-value {{summary.balance}}
                .trading-detail-header-info-item-label 余额
              .trading-detail-header-info-item
                .trading-detail-header-info-item-value {{orderSumData.orderIncome}}
                .trading-detail-header-info-item-label 收益
              .trading-detail-header-info-item
                .trading-detail-header-info-item-value 1:{{summary.leverage}}
                .trading-detail-header-info-item-label 杠杆
              .trading-detail-header-info-item
                .trading-detail-header-info-item-value {{summary.signalFollows}}
                .trading-detail-header-info-item-label 订阅
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

  // &-background
  //   background: url('../../../assets/images/banner2-2.png') no-repeat center center
  //   background-size: cover
  &-header
    display: flex
    // background-color: rgba(4, 75, 121, 0.5)

    &-container
      position: relative
      display: flex
      width: 1190px
      margin: 43px auto 0
      background: #1138FF;
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
      margin-top: 31px

    &-nickname
      font-size: 14px
      color: #fff
      line-height: 20px

    &-info
      margin-top: 16px
      display: flex
      -webkit-box-orient: horizontal
      -webkit-box-direction: normal
      flex-direction: row
      text-align: center
      -webkit-box-pack: justify
      justify-content: space-between
      width: 400px
      align-self: flex-end
      float: right
      color: white
      &-item
        text-align: center
        cursor: pointer
        white-space: nowrap
        text-overflow: ellipsis
        &-value
          font-size: 28px
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        &-label
          font-size: 14px
          color: hsla(0,0%,100%,.8)

</style>
