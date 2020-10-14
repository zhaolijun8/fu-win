<template lang="pug">
  #e-trading-strategy
    .e-container
      .trading-container
        TradingFilter(
          v-if="filterBroker.length > 0"
          :level="filterLevel"
          :rate="filterProfitRate"
          :broker="filterBroker"
          @filter="filterHandler"
        )
        .trading-name(   
          :class="{hide:!show}"      
        ) 
          i.el-icon-close( 
            @click="show = !show"
          )
          .trading-name-txt 明星交易员收益率>20.00%，当前实盘订阅人数>10；近三个月收益>$1000.00;复制视频规模>$5000.00;
            
        .trading-list.e-flex
          TradingItem.trading-list-item(
            v-for="(item, index) in tradingList"
            :key="index"
            :info="item"
            type="trading"
          )
        //- .trading-title
        //-   .trading-title-left 跟随大师
        //-   router-link.trading-title-right(
        //-     to="/trading_strategy/follow"
        //-   ) 查看更多
        //- .trading-list.e-flex
        //-   TradingItem.trading-list-item(
        //-     v-for="(item, index) in followList"
        //-     :key="index"
        //-     :info="item"
        //-     type="follow"
        //-   )
        .trading-section
          .trade-title  交易英雄榜
            .trade-descript 数英雄人物还看今朝
        .trading-name(   
          :class="{hide:!show}"      
        ) 
          i.el-icon-close( 
            @click="show = !show"
          )
          .trading-name-txt 提示：如发现广告或虚假账号，或对账号统计数据有疑问请联系右侧客服QQ进行举报或处理。
</template>

<script>
    import TradingFilter from './trading_strategy_filter.vue'
    import TradingItem from './trading_strategy_item.vue'
    import E from '../../../utils'

    const filterLevel = [
  {
    label: 'S',
    value: 'S'
  },
  {
    label: 'A+',
    value: 'A+'
  },
  {
    label: 'A',
    value: 'A'
  },
  {
    label: 'A-',
    value: 'A-'
  },
  {
    label: 'B',
    value: 'B'
  },
  {
    label: 'C',
    value: 'C'
  },
  {
    label: 'D',
    value: 'D'
  }
]

const filterProfitRate = [
  {
    label: '小于10%',
    value: '0,0.1'
  },
  {
    label: '10%-20%',
    value: '0.1,0.2'
  },
  {
    label: '20%-30%',
    value: '0.2,0.3'
  },
  {
    label: '大于30%',
    value: '0.3,1'
  }
]

export default {
  data() {
    return {
      tradingList: [],
      trandingRequest: {
          pageSize: 8,
          pageNo: 1},
      followList: [],
      followRequest: {
        pageSize: 4,
        pageNo: 1
      },
      brokerList: [],
      filterLevel,
      filterProfitRate,
      filterBroker: [],
      show: true
    }
  },
  components: {
    TradingFilter,
    TradingItem
  },
  created() {
    if(this.$route.query.token !== null && this.$route.query.token !== ''&& this.$route.query.token !== undefined){
        this.getTokenLogin(this.$route.query.token)
    }
    this.getTradingList()
    this.getFollowList()
    this.getBrokerList()
  },
  methods: {
    // 交易员列表
    getTradingList() {
        let params = this.trandingRequest
        const storage = window.localStorage
        const projKey = storage.getItem('projKey')
        if (projKey !== undefined && projKey !== null) {
            params.projKey = projKey
        }else {
            params.projKey = 0
        }
        let pageInfoHelper = {
            pageSize: 8,
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
    // 跟随大师列表
    getFollowList() {
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
      return E.handleRequest(E.api().post('signal/queryProjectFollowUsers', data))
        .then(res => {
          this.followList = res.data.content.data
        })
    },
    // 经销商列表
    getBrokerList() {
      return E.handleRequest(E.api().post('comServer/queryBroker', {}))
        .then(res => {
          this.brokerList = res.data.content.data
          this.brokerList.forEach(item => {
            const obj = {}
            obj.value = item.brokerName
            obj.label = item.brokerName
            this.filterBroker.push(obj)
          })
        })
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
                } else {
                    const storage = window.localStorage
                    storage.setItem('follow_user_info', JSON.stringify(res.data.content.data))
                    this.$router.push({
                        name: 'index'
                    })
                }
            })
    },
    // 筛选列表
    filterHandler(data) {
      this.trandingRequest = data
      this.getTradingList()
    }
  }
}
</script>

<style lang="sass" scoped>
.trading
  &-section 
    width: 1190px
    margin: 30px auto
  &-container
    width: 1200px
    margin: 0 auto
    // text-align: center
  &-section
    text-align: center
  &-name
    margin-bottom: 10px
    padding: 10px 12px 9px 20px
    line-height: 17px
    height: 36px
    font-size: 12px
    color: #333
    background: #FEFCEC
    border: 1px solid #FFFAD4
    transition: height 0.2s,padding 0.4s
    .el-icon-close
      margin-top: 2px
      float: right
      font-weight: bold
      cursor: pointer  
  &-name.hide
    opcity: 0
    height: 0
    margin: 0
    border: 0 none
    padding: 0
    overflow: hidden
  &-list
    flex-wrap: wrap

  &-title
    display: flex
    justify-content: space-between
    align-items: center
    height: 38px
    margin-bottom: 8px

    &-left
      font-size: 24px

    &-right
      font-size: 14px
      cursor: pointer

      &:hover
        color: #ff6022
</style>
