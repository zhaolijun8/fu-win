<template lang="pug">
#e-trading-strategy
  .e-container
    .trading-container
      //- TradingFilter(
      //-   v-if="filterBroker.length > 0"
      //-   :level="filterLevel"
      //-   :rate="filterProfitRate"
      //-   :broker="filterBroker"
      //-   @filter="filterHandler"
      //- )
      TradingTab(
        :fee="filterFee",
        :broker="filterProfitRate",
        :propot="filterPropot"
        @filter="traderfilterHandler"
        @followFilter="followFilterHandler"
        @tradingTab="tradingTabHandler"
      )
      div(v-show="tradingTab==0")
        .trading-name(:class="{ hide: !show }") 
          i.el-icon-close(@click="show = !show")
          .trading-name-txt 明星交易员收益率>20.00%，当前实盘订阅人数>10；近三个月收益>$1000.00;复制视频规模>$5000.00;

        .trading-list.e-flex
          TradingItem.trading-list-item(
            v-for="(item, index) in tradingList",
            :key="index",
            :info="item",
            type="trading"
          )

        .trading-section
          .trade-title 交易英雄榜
            .trade-descript 数英雄人物还看今朝
        .trading-name(:class="{ hide: !show }") 
          i.el-icon-close(@click="show = !show")
          .trading-name-txt 提示：如发现广告或虚假账号，或对账号统计数据有疑问请联系右侧客服QQ进行举报或处理。
        //- )
        TradingZero(
            :subfee="subFee"
            :acounttype="acountType"
            @filter="subFeefilterHandler")
        .tranding-zero
          .tranding-zero-list
            .tranding-zero-list-item(v-for="(item, index) in heroList.list")
              .avatar
                router-link(:to="{ path: '/trading_strategy/detail/'+item.signalId}")
                    img(:src="item.avatarUrl == '' ? avatar : item.avatarUrl", width="100%")
                .ranknum(:class="`color_${index + 1}`") {{ '0' + (index + 1) }}
              .name {{item.signalName}}
              .yield-flex 收益率
                span.txt {{getPersent(item.orderIncomeRate)}}
              .accuracy-flex 准确率
                span.txt {{getPersent(item.orderWinRate)}}
              .profit-flex 获利
                span.txt2 {{item.orderIncome}}
              .canvas-flex
                //- img(:src="item.canvasurl != '' ? item.canvasurl : canvasUrl")
                tranding-veline(
                  :chartData="item.chartData"
                )
            el-pagination(
                background
                 @current-change="herofilterHandler"
                layout="prev, pager, next"
                :current-page="heroList.page.pageNo"
                :total="heroList.page.total"
                :page-size="heroList.page.pageSize"
                :page-count="heroList.page.totalPages"
              )
      div(v-show="tradingTab==1")
        trandingFollows(
          :followlist="followListData"
          :avatar="avatar"
        )
        
</template>

<script>
import TradingFilter from "./trading_strategy_filter.vue";
import TradingTab from "./trading_strategy_tab.vue";
import TradingZero from "./trading_strategy_zero.vue";
import TradingItem from "./trading_strategy_item.vue";
import TradingfollowTab from './trading_strategy_follow_tab.vue'
import trandingFollows from './tranding_strategy_follows.vue'
import trandingVeline from '../../layout/trading_veline.vue'
import E from "../../../utils";

import avatar from '../../../assets/images/avatar-default.svg'
import canvasUrl from '../../../assets/images/canvas-default.png'
import commonRequest from "../../common/commonRequest";
import commonAction from "../../common/commonAction";
const filterLevel = [
  {
    label: "S",
    value: "S",
  },
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A",
    value: "A",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B",
    value: "B",
  },
  {
    label: "C",
    value: "C",
  },
  {
    label: "D",
    value: "D",
  },
];

const filterProfitRate = [
  {
    label: "小于10",
    value: "0,0.1",
  },
  {
    label: "10-20",
    value: "0.1,0.2",
  },
  {
    label: "20-30",
    value: "0.2,0.3",
  },
  {
    label: "大于30",
    value: "0.3,1",
  },
    {
        label: "10-20",
        value: "0.1,0.2",
    },
    {
        label: "20-30",
        value: "0.2,0.3",
    },
    {
        label: "10-20",
        value: "0.1,0.2",
    },
    {
        label: "20-30",
        value: "0.2,0.3",
    },
    {
        label: "10-20",
        value: "0.1,0.2",
    },
    {
        label: "20-30",
        value: "0.2,0.3",
    },
];
const filterFee = [
  {
    label: "免费订阅",
    value: "free",
  },
  {
    label: "收费订阅",
    value: "charge",
  },
];
const filterPropot = [
  {
    label: "小于15",
    value: "0,0.15",
  },
  {
    label: "15-30",
    value: "0.15,0.3",
  },
  {
    label: "30-50",
    value: "0.3,0.5",
  },
  {
    label: "50以上",
    value: "0.5,1",
  },
];
const acountType = [
  {
    label: "30日内活跃账户",
    value: "0",
  },
  {
    label: "7日内活跃账户",
    value: "1",
  },
];
const subFee = [
  {
    label: "准确率",
    value: "orderWinRate",
  },
    {
        label: "获利金额",
        value: "orderIncome",
    },
];
const jytype = [
  {
    label: "小于13周",
    value: "0",
  },
  {
    label: "13-26周",
    value: "1",
  },{
    label: "26-52周",
    value: "2",
  },{
    label: "52周以上",
    value: "3",
  },
];
const followType = [
  {
    label: "跟随收益",
    value: "0",
  },
  {
    label: "交易周期",
    value: "1",
  },{
    label: "跟随笔数",
    value: "2",
  },
];
export default {
  data() {
    return {
      tradingTab:0,
      tradingList: [],
      trandingRequest: {
        pageSize: 8,
        pageNo: 1,
      },
      tradersRequest:{},
      followRequest:{
          pageSize: 10,
          pageNo: 1
      },
      followList: {},
      followRequest: {
        pageSize: 4,
        pageNo: 1,
      },
      brokerList: [],
      filterLevel,
      filterProfitRate,
      filterFee,
      filterPropot,
      acountType,
      subFee,
      avatar,
      canvasUrl,
      jytype,
      followType,
      filterBroker: [],
      show: true,
      heroOrderBy: 'orderIncomeRate',
      heroList:{
        list:[],
        page: {total: 0, totalPages: 0, pageNo: 0, pageSize: 0},
        show:0
      },
      followListData:{
        list:[{
          url:'',
          name:'张三',
          yield:'111.11%',
          accuracy:'11.11%',
          week:'11.11',
          num:'12'
        },{
          url:'',
          name:'张三',
          yield:'111.11%',
          accuracy:'11.11%',
          week:'11.11',
          num:'12'
        }],
        page: {total: 0, totalPages: 0, pageNo: 0, pageSize: 0}
      }
    };
  },
  components: {
    TradingFilter,
    TradingItem,
    TradingTab,
    TradingZero,
    TradingfollowTab,
    trandingFollows,
    trandingVeline,
  },
  created() {
    if (
      this.$route.query.token !== null &&
      this.$route.query.token !== "" &&
      this.$route.query.token !== undefined
    ) {
      this.getTokenLogin(this.$route.query.token);
    }
    this.getTradingList();
    this.getFollowList();
    this.getBrokerList();
    this.getHeroList();
  },
  methods: {
    // 交易员列表
    getTradingList() {
      let params = this.trandingRequest
        const storage = window.localStorage
        const projInfo = storage.getItem('projInfo')
        if (projInfo !== undefined && projInfo !== null) {
            this.projInfo = JSON.parse(projInfo)
            params.projKey = this.projInfo.projKey
        }else {
            params.projKey = 0
        }
      let pageInfoHelper = {
        pageSize: 8,
        pageNo: 1
      }
      let data = {
        params,
        pageInfoHelper,
      }
      commonRequest.querySignalUsersPermit(data,(res) => {
        this.tradingList = res.data.content.data;
      })
    },
    // 跟随大师列表
    getFollowList(pageNo) {
        if(pageNo == undefined || pageNo ==null||pageNo==''){
            pageNo=1
        }
        let params = this.followRequest
        const storage = window.localStorage
        const projInfo = storage.getItem('projInfo')
        if (projInfo !== undefined && projInfo !== null) {
            this.projInfo = JSON.parse(projInfo)
            params.projKey = this.projInfo.projKey
        }else {
            params.projKey = 0
        }
      let pageInfoHelper = {
        pageSize: 10,
        pageNo: pageNo,
      };
      let data = {
        params,
        pageInfoHelper,
      };
      commonRequest.queryFollowOrderSumPermit( data,(res) => {
        this.followListData.list = res.data.content.data
          this.followListData.page = res.data.page
      });
    },
    // 经销商列表
    getBrokerList() {
        commonRequest.queryBroker({},(res) => {
          this.brokerList = res.data.content.data;
          this.brokerList.forEach((item) => {
            const obj = {};
            obj.value = item.brokerName;
            obj.label = item.brokerName;
            this.filterBroker.push(obj);
              this.filterProfitRate.push(obj);
          });
        }
      );
    },
    getTokenLogin(token) {
      let params = {
        token,
      };
      let data = {
        params,
      };
      commonRequest.tokenLogin(data,(res) => {
        if (res.data.status !== 0) {
          this.$message.warning(res.data.msg);
        } else {
          const storage = window.localStorage;
          storage.setItem(
            "follow_user_info",
            JSON.stringify(res.data.content.data)
          );
          this.$router.push({
            name: "index",
          });
        }
      });
    },
      // 交易英雄榜
      getHeroList(pageNo) {
        if(pageNo == undefined || pageNo ==null||pageNo==''){
            pageNo=1
        }
          let params = {}
          const storage = window.localStorage
          const projInfo = storage.getItem('projInfo')
          if (projInfo !== undefined && projInfo !== null) {
              this.projInfo = JSON.parse(projInfo)
              params.projKey = this.projInfo.projKey
          }else {
              params.projKey = 0
          }
          params.orderBy=this.heroOrderBy
          let pageInfoHelper = {
              pageSize: 3,
              pageNo: pageNo
          }
          let data = {
              params,
              pageInfoHelper
          }
          commonRequest.querySignalOrderSumPermit(data,res => {
              if(res.data.content === null ||res.data.content===undefined ||res.data.content===''){
                  this.$message.warning('无历史交易订单！')
                  return
              }
              this.heroList.list = res.data.content.data
              this.heroList.page = res.data.page
              this.getProfitList(res.data.content.data)
          })
      },
      //获取信号源近一个月的收益情况
    getProfitList(contentData){
        for(let i=0;i<contentData.length;i++){
            let endDate = commonAction.getDay(new Date())
            // let beginDate=commonAction.getPreMonth(endDate)
            let beginDate="2019-01-01"
            let params = {
                userId: contentData[i].userId,
                mtAccId: contentData[i].mtAccId,
                tradeDate: [beginDate, endDate]
            }
            let pageInfoHelper = {
                pageSize: 30,
                pageNo: 1
            }
            let data = {
                params,
                pageInfoHelper
            }
            commonRequest.queryOrderFlow(data, res => {
                if(res.data !== undefined&&res.data !== null&&res.data.content !== undefined&&res.data.content !== null){
                    let result = res.data.content.data
                    let income = 0
                    for ( let a=0 ; a<result.length-1; a++) {
                        income = income + result[a].orderIncome
                        result[a+1].orderIncome = result[a+1].orderIncome + income
                    }
                    contentData[i].chartData = {}
                    contentData[i].chartData.columns = ["tradeDate", "orderIncome"]
                    contentData[i].chartData.rows = result
                }
            })
        }
        this.heroList.list = contentData
        this.heroList.show = 1
    },
    getFollowFilterDate:function(value){
        if(value==0){
            return commonAction.getDateStr(-90)+','+commonAction.getDay(new Date())
        }
        if(value==1){
            return commonAction.getDateStr(-180)+','+commonAction.getDay(new Date())
        }
        if(value==2){
            return commonAction.getDateStr(-365)+','+commonAction.getDay(new Date())
        }
        if(value==3){
            return commonAction.getDateStr(-730)+','+commonAction.getDay(new Date())
        }
        if(value==4){
            return '2000-01-01,'+commonAction.getDateStr(-730)
        }
    },
    getPersent: function(value) {
        return commonAction.getPersent(value)
    },
    // 筛选列表
    filterHandler(data) {
      this.trandingRequest = data;
      this.getTradingList();
    },
    traderfilterHandler(data) {
        this.trandingRequest = data;
      this.getTradingList();
    },
    tradingTabHandler(data){
      this.tradingTab = data
    },
    followFilterHandler(data){
        if(data.groupBy==undefined||data.groupBy=={}||data.groupBy==null){
            this.followRequest.orderBy = 'orderIncomeRate'
        }else {
            this.followRequest.orderBy = data.groupBy
        }
        if(data.tradeWeek!=undefined&&data.tradeWeek!={}&&data.tradeWeek!=null){
            this.followRequest.beginDate = this.getFollowFilterDate(data.tradeWeek)
        }else {
            this.followRequest.beginDate = ''
        }
        this.getFollowList()
    },
      subFeefilterHandler(data){
        if(data.subfee==undefined||data.subfee=={}||data.subfee==null){
            this.heroOrderBy ='orderIncomeRate'
        }else if(data.subfee!=undefined&& data.subfee!=null ){
            this.heroOrderBy = data.subfee
        }
        this.getHeroList()
      },
      herofilterHandler(data){
          this.getHeroList(data)
      },
      followOrderListHandler(data){
          this.getFollowList(data)
      }

  },
};
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
    transition: height 0.2s , padding 0.3s , opcity 0.4s
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
.tranding-zero
  background: #fff
  margin-bottom: 20px
  // padding: 0 30px
  /deep/ .el-pagination
    padding: 30px 0
    text-align: center
  &-list
    &-item
      display: flex
      align-items: center
      // text-align: center
      padding: 20px 30px 26px
      font-size: 14px
      line-height: 40px
      color: #999
      border-bottom: 1px solid #eee
      &:hover
        background: #F4F9FF
      &-link
      .txt
        padding-left: 30px
        font-size: 25px
        color: #333
        font-weight: bold
        vertical-align: -4px
      .txt2
        padding-left: 30px
        font-size: 25px
        font-weight: bold
        color: #FB3F41
        vertical-align: -4px

      .avatar
        position: relative
        width: 50px
        height: 50px
        margin: 0px 25px 0px 0
        border-radius: 50%
        border: 2px solid #fff
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3)
        .ranknum
          position: absolute
          left: 14px
          top: 35px
          width: 20px
          height: 20px
          border-radius: 50%
          border: 2px solid #ffffff
          font-size: 12px
          font-weight: 500
          text-align: center
          background: #1138FF
          color: #fff
          line-height: 16px
          &.color_1
            background: #FABC20
          &.color_2
            background: #BCBDBE
          &.color_3
            background: #F18D5C

      .name
        flex: 0 0 150px
        padding: 0 50px 0 0px
        text-align: left
        font-weight: bold
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        color: #333
        border-right: 1px solid #eee
      .yield-flex
        flex: 0 0 260px
        height: 40px
        padding-left: 30px
        border-right: 1px solid #eee
      .accuracy-flex
        flex: 0 0 240px
        height: 40px
        padding-left: 30px
        border-right: 1px solid #eee
      .profit-flex
        flex: 1
        height: 40px
        padding-left: 30px

</style>
