<template lang="pug">
  #e-trading-strategy-item
    router-link.trading-list-card(
      :to="detailUrl"
    )
      .trading-list-card-header
        .trading-list-card-info
          .trading-list-card-nickname(
            v-if="type === 'trading'"
          ) {{info.signalName}}
          .trading-list-card-nickname(
            v-if="type === 'follow'"
          ) {{info.username}}
          .trading-list-card-level(
            v-if="type === 'trading'"
          ) {{getLevel(info.level)}}
          .trading-list-card-server {{getBroker(info.serverName)}}
        .trading-list-card-avatar
          img(
            :src="info.avatarUrl ? url + info.avatarUrl : avatar"
          )
      .trading-list-card-content
        .trading-list-card-list
          .trading-list-card-list-item
            .trading-list-card-list-label 账户余额
            .trading-list-card-list-balue ${{info.balance}}
          .trading-list-card-list-item
            .trading-list-card-list-label 收益率
            .trading-list-card-list-balue {{orderProfitRate}}
          .trading-list-card-list-item
            .trading-list-card-list-label 累计收益
            .trading-list-card-list-balue {{orderIncome}}
          .trading-list-card-list-item(
            v-if="type === 'trading'"
          )
            .trading-list-card-list-label 订阅人数
            .trading-list-card-list-balue {{info.signalFollows}}
      .trading-list-card-footer.trading(
        v-if="type === 'trading'"
      )
        .trading-list-card-footer-left
          span 订阅模式
          span.num {{info.followsHistory}}
        .trading-list-card-footer-right
          .trading-list-card-footer-btn 免费订阅
      .trading-list-card-footer.follow(
        v-if="type === 'follow'"
      )
        .trading-list-card-footer-btn +关注
</template>

<script>
import _config from '../../../base_config'
import avatar from '../../../assets/images/avatar-default.svg'
import moment from "moment";
import E from "../../../utils";

export default {
  data() {
    return {
      url: _config.BASE_URL,
      avatar,
        orderSumData: {},
        orderProfitRate: 1,
        orderIncome: 0,
        userId: '',
        mtAccId: '',
      detailUrl: ''
    }
  },
  props: {
    info: {
      type: Object
    },
    type: {
      type: String,
      default: 'trading'
    }
  },
    created() {
        this.getDetailUrl()
    },
    mounted() {
        this.userId = this.info.userId
        this.mtAccId = this.info.mtAccId
        this.getOrderSumData()
    },
    methods: {
        getOrderSumData() {
            if(this.userId =='' || this.userId== undefined||this.mtAccId==''||this.mtAccId==undefined){
                return
            }
            let params = {
                userId: this.userId,
                mtAccId: this.mtAccId
            }
            let data = {
                params
            }
            return E.handleRequest(E.api().post('report/order/getOrderSum', data))
                .then(res => {
                    this.orderSumData = res.data.content
                    if (this.orderSumData !== undefined && this.orderSumData !== null && this.orderSumData.orderIncome !== undefined && this.info.deposit !== 0) {
                        this.orderProfitRate = this.orderSumData.orderIncome / this.info.deposit
                        this.orderIncome = this.orderSumData.orderIncome
                    }
                    let persent = (this.orderProfitRate * 100).toFixed(2)
                    this.orderProfitRate = persent + '%'
                })
        },
        // 交易汇总
        getDetailUrl() {
            if (this.type === 'trading') {
                this.detailUrl = '/trading_strategy/detail/' + this.info.signalId
            }
        },
        // 获取昨日的开始结束时间
        getDay: function(date) {
            return moment(date).format("YYYY-MM-DD")
        },
        // 获取昨日的开始结束时间
        getLevel: function(data) {
            if (data === '1' || data === 1) {
                return 'A'
            } else if (data === '2' || data === 2) {
                return 'B'
            } else if (data === '3' || data === 3) {
                return 'C'
            } else if (data === '4' || data === 4) {
                return 'D'
            } else  {
                return 'A'
            }
        },
        // 获取昨日的开始结束时间
        getBroker: function(serverName) {
            if(serverName==undefined || serverName==null){
                return ''
            }
            if(serverName.indexOf('-')>0){
                return serverName.substr(0,serverName.indexOf('-'))
            }
            return serverName
        }
    }
}
</script>

<style lang="sass" scoped>
#e-trading-strategy-item
  width: calc((100% - 30px) / 4)
  margin: 0 10px 10px 0

  &:nth-child(4n)
    margin-right: 0

.trading-list

  &-card
    display: block
    background: #fff
    transition: all ease .3s

    &:hover
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2)

    &-header
      padding: 20px 20px 0
      display: flex
      justify-content: space-between

    &-nickname
      font-size: 14px
      font-weight: 600
      color: #333
      line-height: 20px

    &-level
      width: 26px
      height: 18px
      line-height: 18px
      margin: 4px 0
      border-radius: 2px
      color: #fff
      background-color: #ccc
      text-align: center
      font-size: 14px

    &-server
      font-size: 12px
      line-height: 17px
      color: #ccc

    &-avatar
      width: 64px
      height: 64px
      border-radius: 50%
      overflow: hidden
      border: 2px solid #fff
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3)
      background-color: #eee

      img
        display: block
        width: 100%
        height: 100%

    &-list
      padding: 15px 20px

      &-item
        display: flex
        justify-content: space-between
        align-items: center
        height: 23px
        margin-bottom: 10px

      &-label
        font-size: 14px
        line-height: 20px
        color: #999
      &-balue
        font-size: 14px
        font-weight: bold
        color: #333
      &-value
        font-size: 14px
        color: #666

        &.present
          font-size: 16px
          font-weight: 500
          color: #1fbb95

    &-footer
      display: flex
      height: 50px
      border-top: 1px solid #f0f0f0
      background: #F8F8F8
      &.trading
        justify-content: space-between
        align-items: center
        padding: 0 20px

      &-left
        font-size: 14px
        line-height: 20px
        color: #999

        .num
          color: #333

      &.follow
        justify-content: center
        align-items: center

      &-btn
        font-size: 14px
        color: #1138FF
        line-height: 20px
        border-radius: 13px
        border: 1px solid #A5B2F4
        padding: 2px 11px
        cursor: pointer
        transition: all ease .3s

        &:hover
          background-color: #409EFF
          color: #fff
</style>
