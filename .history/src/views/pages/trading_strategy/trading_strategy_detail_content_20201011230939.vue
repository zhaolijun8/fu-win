<template lang="pug">
  #e-trading-strategy-detail-content
    .trading-detail-content-container
      .trading-detail-content-header
        .trading-detail-content-header-right
          .trading-detail-content-header-right-btn(
            @click="followBook"
          ) 免费订阅
        .trading-detail-content-header-title 交易员
        .trading-detail-content-header-body
          .trading-detail-content-header-body-left
            .trading-detail-content-header-body-title 近13周账户评级
            .trading-detail-content-header-body-charts
              EchartsRadar(
                v-if="valuation !== null"
                :chartsRadarData="chartsRadarData"
              )
              .trading-detail-content-header-body-level(
                v-if="valuation !== null"
              ) {{getLevel(valuation.level)}}
          .trading-detail-content-header-body-right
            .trading-detail-content-header-body-item
              .trading-detail-content-header-body-item-title 账户信息
              .trading-detail-content-header-body-item-context
                span.label 最大回撤
                span.value {{getPersent(summary.withdrawMaxRate)}}
                span.label 最大回撤金额
                span.value {{summary.withdraw}}
            .trading-detail-content-header-body-item
              .trading-detail-content-header-body-item-title 信号源简介
              .trading-detail-content-header-body-item-context {{summary.signalDesc}}
        .trading-detail-content-header-footer
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value {{getPersent(orderSumData.orderIncome/summary.deposit)}}
            .trading-detail-content-header-footer-label 绝对收益
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value {{getPersent(orderSumData.orderProfitRate)}}
            .trading-detail-content-header-footer-label 准确率
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value {{getPersent(summary.profit/summary.balance)}}
            .trading-detail-content-header-footer-label 实时盈利率
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value {{getDay(orderSumData.beginDate)}}
            .trading-detail-content-header-footer-label 开始交易时间
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value {{orderSumData.tradeDaySum}}
            .trading-detail-content-header-footer-label 实际交易天数
      .trading-detail-content-body
        .trading-detail-content-tab
          .trading-detail-content-tab-item(
            v-for="t in tabs"
            :class="tabActive(t.value)"
            @click="selectTabHandler(t.value)"
          ) {{t.label}}
        .trading-detail-content-tab-context(
          v-if="tabSelected === 0"
        )
          .trading-detail-content-item
            .trading-detail-content-title
              .trading-detail-content-title-name.summary 概览
              .trading-detail-content-title-time 上一次更新时间 {{yesterDay}}
            .trading-detail-content-body
              Summary(
                :summary="summary"
              )
            .trading-detail-content-body-report
              ProfitLoss(
                :summary="summary"
              )
        .trading-detail-content-tab-context(
          v-if="tabSelected === 1"
        )
          Order(
            :summary="summary"
          )
        .trading-detail-content-tab-context(
          v-if="tabSelected === 2"
        )
          Subscription
</template>

<script>
import _config from '../../../base_config'
import EchartsRadar from '../../components/charts_radar.vue'
import Summary from './trading_strategy_detail_summary.vue'
import Order from './trading_strategy_detail_order.vue'
import Subscription from './trading_strategy_detail_subscription.vue'
import ProfitLoss from './trading_strategy_detail_profitLoss.vue'
import E from '../../../utils'
import commonAction from "../../common/commonAction";
import moment from "moment";

const tabs = [
  {
    value: 0,
    label: '交易分析'
  },
  {
    value: 1,
    label: '交易订单'
  },
  {
    value: 2,
    label: '订阅者'
  }
]

const chartsRadarData = {
  radar: {
    indicator: [
        {name: '稳健性'},
        {name: '盈利能力'},
        {name: '非侥幸获利'},
        {name: '资金规模'},
        {name: '风控能力'},
      //   {name: '盈利交易', max: 1},
      //   {name: '亏损交易', max: 1},
      // {name: '交易天数', max: 1000},
      // {name: '最大入金', max: 1},
      // {name: '最大出金', max: 1},
    ]
  },
  series: [
    {
      type: 'radar',
      areaStyle: {
        color: '#409EFF'
      },
      data: [
        {
          value: []
        }
      ]
    }
  ]
}

export default {
  data() {
    return {
      chartsRadarData,
      tabs,
      crmUrl:_config.CRM_URL,
      yesterDay:0,
      tabSelected: 0,
      valuation: null
    }
  },
  props: {
    summary: {
      type: Object
    },
      orderSumData: {
          type: Object
      },
      signalValuationData: {
          type: Object
      }
  },
  components: {
    EchartsRadar,
    Summary,
    Order,
    ProfitLoss,
    Subscription
  },
  created() {
    this.signalId = this.$route.params.id
    this.getYesterday()
    this.getValuationData()
  },
    // mounted() {
    //     setTimeout(() => {
    //     }, 500)
    // },
    // watch: {
    //     signalValuationData: {
    //         handler: function (val) {
    //             if(val.orderProfitRate != undefined && val.withdrawMaxRate != undefined){
    //                 this.getValuationData()
    //             }
    //         },
    //         immediate:true
    //     }
    // },
  methods: {
    // 评估数据
    // getValuationData() {
    //     this.valuation = this.signalValuationData
    //     this.chartsRadarData.series[0].data[0].value[0] = this.signalValuationData.orderProfitRate
    //     this.chartsRadarData.series[0].data[0].value[1] = Math.abs(this.signalValuationData.orderLossRate)
    //     if(this.signalValuationData.tradeDaySum>1000){
    //         this.chartsRadarData.series[0].data[0].value[2] = 1000
    //     }else {
    //         this.chartsRadarData.series[0].data[0].value[2] = this.signalValuationData.tradeDaySum
    //     }
    //     this.chartsRadarData.series[0].data[0].value[3] = this.signalValuationData.depositMaxRate
    //     this.chartsRadarData.series[0].data[0].value[4] = Math.abs(this.signalValuationData.withdrawMaxRate)
    //     this.chartsRadarData.radar.indicator[0].name = '盈利交易: ' + this.getPersent(this.signalValuationData.orderProfitRate)
    //     this.chartsRadarData.radar.indicator[1].name = '亏损交易: ' + this.getPersent(this.signalValuationData.orderLossRate)
    //     this.chartsRadarData.radar.indicator[2].name = '交易天数: ' + this.signalValuationData.tradeDaySum +'/1000'
    //     this.chartsRadarData.radar.indicator[3].name = '最大回撤: ' + this.getPersent(this.signalValuationData.depositMaxRate)
    //     this.chartsRadarData.radar.indicator[4].name = '最大出金: ' + this.getPersent(Math.abs(this.signalValuationData.withdrawMaxRate))
    // },
      // 评估数据
      getValuationData() {
          return E.handleRequest(E.api().post('signal/getSignalValuation', {
              signalId: this.signalId
          }))
              .then(res => {
                  const result = res.data.content
                  this.valuation = result
                  this.chartsRadarData.series[0].data[0].value[0] = result.steadyScore
                  this.chartsRadarData.series[0].data[0].value[1] = result.profitScore
                  this.chartsRadarData.series[0].data[0].value[2] = result.nonFlukeProfitScore
                  this.chartsRadarData.series[0].data[0].value[3] = result.fundSizeScore
                  this.chartsRadarData.series[0].data[0].value[4] = result.riskControlScore
              })
      },
    // 获取昨日的开始结束时间
    getYesterday() {
      this.yesterDay = moment(moment().add(-1, 'days').startOf("day").valueOf()).format("YYYY-MM-DD");
    },
      // 获取昨日的开始结束时间
      getDay: function(date) {
          return moment(date).format("YYYY-MM-DD")
      },
      followBook() {
          let newUrl = ''
          const userInfo = window.localStorage.getItem('follow_user_info')
          if (userInfo == null) {
              this.$message.warning('请先登录！')
              return;
          }
          // 判断跳转方向
          const projInfo = window.localStorage.getItem('projInfo')
          if (projInfo !== undefined && projInfo !== null) {
              let projData = JSON.parse(projInfo)
              let res = commonAction.getControlContent(projData.projKey,0,10,1,0)
              console.log(res)
          }
          // console.log(userInfo)
          // let userData = JSON.parse(userInfo)
          // this.getProjectInfo(userData.userId)
          // if (userData.token !==null) {
          //     newUrl = this.crmUrl + '/login' + '?token='+userData.token
          // }else {
          //     this.$message.warning('获取用户信息失败！')
          //     return;
          // }
          window.open(newUrl)
      },
      // 所属项目工程信息
      getProjectInfo(userId) {
          let params = {
              userId: userId // 操作用户id
          }
          let data = {
              params
          }
          return E.handleRequest(E.api().post('/permission/project/queryDetailByCondition', data))
              .then(res => {
                  if(res.data.content.projCrmRealm!==undefined || res.data.content.projCrmRealm!==null && res.data.content.projCrmRealm!==''){
                      this.crmUrl = res.data.content.projCrmRealm
                  }
              })
      },
      getLevel: function(data) {
          if (data === '1' || data === 1) {
              return 'A'
          } else if (data === '2' || data === 2) {
              return 'B'
          } else if (data === '3' || data === 3) {
              return 'C'
          } else if (data === '4' || data === 4) {
              return 'D'
          } else {
              return 'A'
          }
      },
    tabActive(val) {
      if (val === this.tabSelected) {
        return 'active'
      }
    },
    selectTabHandler(val) {
      this.tabSelected = val
    },
      getPersent: function(value) {
          if (value === null || value==='' || value === undefined) {
              return ''
          } else {
              let persent = (value * 100).toFixed(2)
              return persent + '%'
          }
      }
  }
}
</script>

<style lang="sass" scoped>
#e-trading-strategy-detail-content
  flex: 1
  margin-left: 20px

.trading-detail-content

  &-header
    margin-bottom: 20px
    background-color: #fff

    &-title
      position: relative
      height: 50px
      line-height: 50px
      padding: 0 30px 0 43px
      font-size: 14px
      color: #333
      font-weight: 600
      border-bottom: 1px solid #e9e9e9
      &:before
        position: absolute
        content: ""
        top: 18px
        left: 30px
        display: inline-block
        width: 3px
        height: 14px
        background: #1138FF
        border-radius: 2px
    &-right
      &-btn
        font-size: 14px
        color: #1138FF
        border-radius: 16px
        border: 1px solid #A5B2F4
        box-sizing: border-box
        margin: 10px 15px auto
        padding: 5px 12px
        cursor: pointer
        transition: all ease .3s
        float: right
        &:hover
            background-color: #409EFF
            color: #fff

    &-body
      display: flex
      padding: 25px 30px

      &-left
        width: 40%

      &-right
        width: 60%
        padding-left: 20px

      &-title
        font-weight: 600
        margin-bottom: 10px

      &-charts
        position: relative

      &-level
        position: absolute
        top: 50%
        left: 50%
        font-size: 30px
        font-weight: 700
        color: #fff
        transform: translate(-50%, -50%)
        text-shadow: 1px 0 0 rgba(255,98,0,.7), -1px 0 0 rgba(255,98,0,.7), 0 1px 0 rgba(255,98,0,.7), 0 -1px 0 rgba(255,98,0,.7)

      &-item
        margin-bottom: 30px

        &-title
          font-weight: 600
          margin-bottom: 10px

        &-context
          font-size: 12px
          color: #666

          .label
            margin-right: 8px

          .value
            font-weight: 500
            font-size: 20px
            margin-right: 20px

    &-footer
      display: flex
      padding: 16px 0
      border-top: 1px solid #f0f0f0

      &-item
        flex: 1
        padding-left: 20px

      &-value
        font-size: 20px
        font-weight: 500
        color: #555

      &-label
        font-size: 12px
        color: #999

  &-body
    background-color: #fff
    &-report
      display: flex
      line-height: 50px
      padding: 50px 0 0 30px
      font-size: 16px
      font-weight: 600
      border-bottom: 1px solid #e9e9e9

  &-tab
    display: flex
    height: 40px
    line-height: 40px
    font-size: 14px
    color: #333
    background: #eee

    &-item
      margin-right: 30px
      padding:0 17px
      cursor: pointer

      &.active
        background: #fff
        border-top: 2px solid #409EFF
        color: #1138FF

  &-tab-context
    padding: 25px 30px

  &-title
    display: flex
    justify-content: space-between
    align-items: center
    height: 28px
    line-height: 28px
    margin-bottom: 16px

    &-name
      font-size: 16px
      font-weight: 600
      padding-left: 30px
      position: relative

      &.summary:after
        content: ""
        display: block
        width: 26px
        height: 26px
        background-color: #eee
        position: absolute
        top: 50%
        left: 0
        margin-top: -13px

    &-time
      color: #999
      font-size: 12px

</style>
