<template lang="pug">
  #e-index
    BaseLayout
      .e-container
        .index-header
        .index-trading
          .index-trading-box
            .index-trade
              .trade-title   Bole Trade 的核心实力
                  .trade-descript 更高端/更合规/更专业
            .module-list
              .module-list-item
                .module-list-item-img
                  img(
                      src="../../../assets/images/bole_01.svg"
                  )
                .module-list-item-info
                  .module-list-item-text 顶级交易团队
                  .module-list-item-num 为全球会员筛选行业内最顶级交易团队，并且提前发布交易策略，确保会员所跟随的每个信号源都真实性，交易准确率高达70%。
              .module-list-item
                .module-list-item-img
                  img(
                      src="../../../assets/images/bole_02.svg"
                  )
                .module-list-item-info
                  .module-list-item-text 合规安全的经济商
                  .module-list-item-num 为全球会员严格筛选合规安全的经纪商，保证交易订单在最公平最透明的交易环境中顺利成交。
              .module-list-item
                .module-list-item-img
                  img(
                      src="../../../assets/images/bole_03.svg"
                  )
                .module-list-item-info
                  .module-list-item-text 毫秒级跨平台跟单
                  .module-list-item-num 根植于劵商服务器基础，跨平台跟随误差毫秒级。
              .module-list-item
                .module-list-item-img
                  img(
                      src="../../../assets/images/bole_04.svg"
                  )
                .module-list-item-info
                  .module-list-item-text 独立风控团队
                  .module-list-item-num 独立于策略信号源的风控团队进行行“二次风控”为合作投资人的盈利保驾护航。
            .module-top
              .module-top-head
                .module-top-head-title 每周英雄榜TOP10
                  span 数英雄人物还看今朝
                .module-top-head-link 查看总排行榜 >>
              .module-top-list
                .module-top-list-item(
                  v-for="(item,index) in heroList"
                )
                  .avatar 
                    img(:src="item.url == ''? avatar : item.url" width="100%")
                    .ranknum(
                      :class="`color_${index+1}`"
                    ) {{'0'+(index+1)}}
                  .name 辣妹子
                  .number 收益率
                    span {{item.rate}}
                  .modulebt
                    .bleft {{item.pnum}}
                      span 亏盈点数
                    .bright {{item.profit}}
                      span 盈利（元）
                     
        .index-trading
          //- 广告位
        .index-trading
          .index-trading-box
            .index-trade
              .trade-title  Bole Trade 今日成交数据
                  .trade-descript 更高端/更合规/更专业
          .module-list-two
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_1.png")
              .module-list-two-item-info
                .s1 累计跟单量（手）
                .s2 134.931
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_2.png")
              .module-list-two-item-info
                .s1 跟单用户量（人）
                .s2 134.931
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_3.png")
              .module-list-two-item-info
                .s1 跟随获利（美元）
                .s2 134.931
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_4.png")
              .module-list-two-item-info
                .s1 总跟随资金（美元）
                .s2 134.931
        .index-trading.swad
          .index-trading-box
            .index-trade
              .trade-title 平台实时交易动态
                  .trade-descript.small 这是交易员实时交易订单，您可以拥有多个账户，同时进行自主交易和复制跟单交易，也可以使用存有10000美元的模拟账户，零风险参与跟单。
          .index-child-box 
            el-table.trade-table(
              :data="dynamicList"
              stripe
              style="width: 100%"
            )
              el-table-column( 
                prop="info"
                align="center"
                label="基本信息"
                width="180")
              el-table-column(
                prop="variet"
                align="center"
                label="品种"
                width="180")
              el-table-column(
                prop="number"
                align="center"
                label="人数")
              el-table-column(
                prop="opera"
                align="center"
                label="操作")
              el-table-column(
                prop="profit"
                align="center"
                label="获利（元）")
              el-table-column(
                prop="time"
                align="center"
                label="时间")
        .index-trading.swad
          .index-trading-box
            .index-trade
              .trade-title 基本问题答疑
                  .trade-descript  这里有您想知道的基本问题答疑
          .index-child-box
            .index-trading-doubt
              .index-doubt-left
                .doubt-tab(
                  v-for="(item,index) in questionList"
                  :class="{active: doubtEq == index}"
                  @mouseover="doubtFunc(index)"
                ) 
                  .eq {{'0'+(index+1)}}
                  .problem 
                    .tt {{item.question}}
                    .analysis {{item.answer}}
                  img.jt(src="../../../assets/images/arrow_go.svg")
              .index-doubt-right
                img.topL(width="52" height="36" src="../../../assets/images/doubt_t.png")
                img.topR(width="52" height="36" src="../../../assets/images/doubt_l.png")
                .doubt-detail(
                  v-for="(item,index) in questionList"
                  v-if="doubtEq == index"
                ) 
                  .tt {{item.question}}
                  .analysis {{item.answer}}
        
        .index-trading
          .index-trading-box
            .index-trade
              .trade-title 合作伙伴
                  .trade-descript 强大源于汇聚
      
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import TradingItem from '../trading_strategy/trading_strategy_item.vue'
import questionItem from '../index/question.vue'
import E from "../../../utils"
import _config from '../../../base_config'

import avatar from '../../../assets/images/avatar-default.svg'

export default {
  components: {
    BaseLayout,
    TradingItem,
    questionItem
  },
    data() {
        return {
            avatar,
            tradingList: [],
            questionList: [
                {
                    question: '社区平台是外汇经纪商吗？',
                    answer: '不是外汇经纪商。社区平台是一个为投资者提供策略复制交易，连接经纪商、跟随者、交易达人的第三方服务平台。'
                },
                {
                    question: '我的账号在社区跟单会影响资金安全吗？',
                    answer: '社区仅为第三方服务平台，您所有的出入金操作仍旧是在经纪商处完成，对您的资金安全没有任何影响。'
                },
                {
                    question: '交易达人能确保一直盈利吗？',
                    answer: '没有任何人或任何机构能保证在全球贵金属、外汇市场的投资只盈不亏。社区的交易达人大多都是操盘经验丰富，投资回报表现良好的投资人，复制交易可以提高盈利机率，但是无法保障100%盈利，客户须自主承担所有风险。'
                },
                {
                    question: '交易达人的交易数据都是真实的吗？',
                    answer: '所有达人的交易都是真实存在，很多都是操盘经验丰富的投资专家操盘。每个策略下单数据都是其MT4真实账户的实盘交易数据。且社区平台绝不隐藏达人持仓信息，用户可以实时追踪查看比对，确保数据真实！'
                }
            ],
            dynamicList: [{
                info:'这里是基本的信息',
                variet:'比特币',
                number:'1212',
                opera:'买入',
                profit:'3419.13',
                time:'2020-03-14',
              },{ 
                info:'这里是基本的信息',
                variet:'比特币',
                number:'1212',
                opera:'买入',
                profit:'3419.13',
                time:'2020-03-14',
              },{ 
                info:'这里是基本的信息',
                variet:'比特币',
                number:'1212',
                opera:'买入',
                profit:'3419.13',
                time:'2020-03-14',
              }, { 
                info:'这里是基本的信息',
                variet:'比特币',
                number:'1212',
                opera:'买入',
                profit:'3419.13',
                time:'2020-03-14',
              },  
            ],
            heroList:[{
                url:'',
                rate:'193.13%',
                pnum:'13',
                profit:'1314.09'
              },{
                url:'',
                rate:'193.13%',
                pnum:'13',
                profit:'1314.09'
            },{
                url:'',
                rate:'193.13%',
                pnum:'13',
                profit:'1314.09'
            },{
                url:'',
                rate:'193.13%',
                pnum:'13',
                profit:'1314.09'
            }],
            trandingRequest: {
                pageSize: 4,
                pageNo: 1},
            userInfo: null,
            doubtEq:0,
        }
    },
    created() {
        if(this.$route.query.token !== null && this.$route.query.token !== ''&& this.$route.query.token !== undefined){
            this.getTokenLogin(this.$route.query.token)
        }
        const storage = window.localStorage
        const userInfo = storage.getItem('follow_user_info')
        if (userInfo !== null) {
            this.userInfo = JSON.parse(userInfo)
            this.getProjectInfo(this.userInfo.userId)
        } else {
            //根据域名 判断所属社区
            let hostname = document.location.hostname
            this.getProjectInfoByUrl(hostname)
        }
    },
    methods: {
        doubtFunc(eq){
          this.doubtEq = eq
        },
        getTokenLogin(token) {
            let params = {
                token
            }
            let data = {
                params
            }
            E.handleRequest(E.api().post('admin/tokenLogin', data))
                .then(res => {
                    if (res.data.status !== 0) {
                        this.$message.warning(res.data.msg)
                        window.localStorage.removeItem('follow_user_info')
                    } else {
                        const storage = window.localStorage
                        storage.setItem('follow_user_info', JSON.stringify(res.data.content.data))
                        this.$router.push({
                            name: 'index'
                        })
                        this.$router.go(0)
                    }
                })
        },
        // 交易员列表
        getTradingList() {
            let params = {}
            const storage = window.localStorage
            const projKey = storage.getItem('projKey')
            if (projKey !== undefined && projKey !== null) {
                params.projKey = projKey
            }else {
                params.projKey = 0
            }
            let pageInfoHelper = {
                pageSize: 4,
                pageNo: 1
            }
            let data = {
                params,
                pageInfoHelper
            }
            return E.handleRequest(E.api().post('signal/querySignalUsersPermit', data))
                .then(res => {
                    this.tradingList = res.data.content.data
                })
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
                    if(res.data.content.projCrmRealm !== null && res.data.content.projCrmRealm !== ''){
                        _config.CRM_URL = res.data.content.projCrmRealm
                        _config.PROJ_KEY = res.data.content.projKey
                        const storage = window.localStorage
                        storage.setItem('projKey', res.data.content.projKey)
                    }
                    this.getTradingList()
                })
        },
        // 所属项目工程信息
        getProjectInfoByUrl(hostname) {
            let params = {
                projOfficialRealm: hostname // 操作用户id
            }
            let data = {
                params
            }
            return E.handleRequest(E.api().post('/permission/project/queryProjectByUrl', data))
                .then(res => {
                    if(res.data.content!=null&&res.data.content.projCrmRealm !== null && res.data.content.projCrmRealm !== ''){
                        _config.CRM_URL = res.data.content.projCrmRealm
                        _config.PROJ_KEY = res.data.content.projKey
                        const storage = window.localStorage
                        storage.setItem('projKey', res.data.content.projKey)
                    }
                    this.getTradingList()
                })
        }
    }
}
</script>

<style lang="sass" scoped>
  @import './index.sass'
  .index

    &-header
    &-trade
      padding: 60px 0
      text-align: center
    &-trading
      width: 1500px
      margin: 0 auto
      &.swad
        width: 100%
        background: #ffffff
        overflow:hidden
    &-child-box
      width: 1500px
      margin: 0 auto
</style>
