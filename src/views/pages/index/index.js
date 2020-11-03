import BaseLayout from "../../layout/base_layout.vue";
import TradingItem from "../trading_strategy/trading_strategy_item.vue";
import questionItem from "../index/question.vue";
import commonRequest from "../../common/commonRequest";
import _config from "../../../base_config";

import avatar from "../../../assets/images/avatar-default.svg";
// import partImg_1 from '../../../assets/images/partImg_1.jpg'
import demoImg from '../../../assets/images/index_1.png';
import moment from "moment";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import da from "element-ui/src/locale/lang/da";
import commonAction from "../../common/commonAction";
let Index = {
  components: {
    BaseLayout,
    TradingItem,
    questionItem,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      demoImg:demoImg,
      avatar,
      partList: [
        {
          hrefUrl: "",
        },
      ],
      tradingList: [],
      yesterDayTrade:{},
      orderType: [
        {
          value: 0,
          label: 'buy'
        },
        {
          value: 1,
          label: 'sell'
        }
      ],
      orderTradeOperation: [
        {
          value: 0,
          label: 'open'
        },
        {
          value: 1,
          label: 'close'
        },
        {
          value: 2,
          label: 'modify'
        }
      ],
      questionList: [
        {
          question: "社区平台是外汇经纪商吗？",
          answer:
            "不是外汇经纪商。社区平台是一个为投资者提供策略复制交易，连接经纪商、跟随者、交易达人的第三方服务平台。",
        },
        {
          question: "我的账号在社区跟单会影响资金安全吗？",
          answer:
            "社区仅为第三方服务平台，您所有的出入金操作仍旧是在经纪商处完成，对您的资金安全没有任何影响。",
        },
        {
          question: "交易达人能确保一直盈利吗？",
          answer:
            "没有任何人或任何机构能保证在全球贵金属、外汇市场的投资只盈不亏。社区的交易达人大多都是操盘经验丰富，投资回报表现良好的投资人，复制交易可以提高盈利机率，但是无法保障100%盈利，客户须自主承担所有风险。",
        },
        {
          question: "交易达人的交易数据都是真实的吗？",
          answer:
            "所有达人的交易都是真实存在，很多都是操盘经验丰富的投资专家操盘。每个策略下单数据都是其MT4真实账户的实盘交易数据。且社区平台绝不隐藏达人持仓信息，用户可以实时追踪查看比对，确保数据真实！",
        },
      ],
      dynamicList: [],
      heroList: [
        {
          url: "",
          rate: "193.13%",
          pnum: "13",
          profit: "1314.09",
        },
        {
          url: "",
          rate: "193.13%",
          pnum: "13",
          profit: "1314.09",
        },
        {
          url: "",
          rate: "193.13%",
          pnum: "13",
          profit: "1314.09",
        },
        {
          url: "",
          rate: "193.13%",
          pnum: "13",
          profit: "1314.09",
        },
        {
          url: "",
          rate: "193.13%",
          pnum: "13",
          profit: "1314.09",
        },
        {
          url: "",
          rate: "193.13%",
          pnum: "13",
          profit: "1314.09",
        },
      ],
      trandingRequest: {
        pageSize: 4,
        pageNo: 1,
      },
      userInfo: null,
      doubtEq: 0,
      swiperData:[{
        url:'', //图片地址
        title:"Bole Trade 交易社区111",
        desc:'复制跟单，免费跟随技术牛人做教育',
        txt:'专注技术的外汇跟单社区',
      },{
        url:'',
        title:"Bole Trade 交易社区222",
        desc:'复制跟单，免费跟随技术牛人做教育2222',
        txt:'专注技术的外汇跟单社区2',
      }],
      swiperTopOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        grabCursor:true,
        parallax:true,
        preventLinksPropagation: false,
        swiperSlides:[],
        autoplay: {
          delay: 3000,         
          // stopOnLastSlide: false, //当切换到最后一个slide时是否自动停止切换，false：不停止；true:停止         
          disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。         
          // reverseDirection: true, //开启反向自动轮播。         
          // waitForTransition: true //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。        
        }, 
      },
      swiperOption: {
        width: 1190,
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,         
        navigation: {
          nextEl: ".swiper-button-next-module",
          prevEl: ".swiper-button-prev-module",
        },
        grabCursor:true,
        parallax:true,
        preventLinksPropagation: false,
        // swiperSlides:[],
      },
      
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  created() {
    if (
      this.$route.query.token !== null &&
      this.$route.query.token !== "" &&
      this.$route.query.token !== undefined
    ) {
      this.getTokenLogin(this.$route.query.token);
    }
    const storage = window.localStorage;
    const userInfo = storage.getItem("follow_user_info");
    if (userInfo !== null) {
      this.userInfo = JSON.parse(userInfo);
      this.getProjectInfo(this.userInfo.userId);
    } else {
      //根据域名 判断所属社区
      let hostname = document.location.hostname;
      this.getProjectInfoByUrl(hostname);
    }
    this.getOrderHistoryData()
    this.getHeroList()
    this.getOrderTradeYesterDay()
  },
  methods: {
    doubtFunc(eq) {
      this.doubtEq = eq;
    },
    // 获取时间
    getDateTimeFormat: function(row, column, cellValue, index) {
      if (cellValue === undefined || cellValue ==='' || cellValue === null)
        return
      let createTime= moment(cellValue).format("YYYY-MM-DD HH:mm:ss")
      return commonAction.getTimeBetweenNow(createTime)+'以前'
    },
    getOperationFormat: function(row, column, cellValue, index) {
      return commonAction.getDicValue(cellValue,this.orderTradeOperation)
    },
    getTypeFormat: function(row, column, cellValue, index) {
      return commonAction.getDicValue(cellValue,this.orderType)
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
          window.localStorage.removeItem("follow_user_info");
        } else {
          const storage = window.localStorage;
          storage.setItem(
            "follow_user_info",
            JSON.stringify(res.data.content.data)
          );
          this.$router.push({
            name: "index",
          });
          this.$router.go(0);
        }
      });
    },
    // 交易员列表
    getTradingList() {
      let params = {}
      const storage = window.localStorage
      const projInfo = storage.getItem('projInfo')
      if (projInfo !== undefined && projInfo !== null) {
        this.projInfo = JSON.parse(projInfo)
        params.projKey = this.projInfo.projKey
      }else {
        params.projKey = 0
      }
      let pageInfoHelper = {
        pageSize: 4,
        pageNo: 1,
      };
      let data = {
        params,
        pageInfoHelper,
      };
      commonRequest.querySignalUsersPermit(data,(res) => {
        this.tradingList = res.data.content.data;
      });
    },
    // 所属项目工程信息
    getProjectInfo(userId) {
      let params = {
        userId: userId, // 操作用户id
      };
      let data = {
        params,
      };
      return commonRequest.queryDetailByCondition(data,(res) => {
        if (
          res.data.content.projCrmRealm !== null &&
          res.data.content.projCrmRealm !== ""
        ) {
          _config.CRM_URL = res.data.content.projCrmRealm;
          _config.PROJ_KEY = res.data.content.projKey;
          const storage = window.localStorage;
          storage.setItem('projInfo', JSON.stringify(res.data.content))
        }
        this.getTradingList();
      });
    },
    // 所属项目工程信息
    getProjectInfoByUrl(hostname) {
      let params = {
        projOfficialRealm: hostname, // 操作用户id
      };
      let data = {
        params,
      };
      commonRequest.queryProjectByUrl(data,(res) => {
        if (
          res.data.content != null &&
          res.data.content.projCrmRealm !== null &&
          res.data.content.projCrmRealm !== ""
        ) {
          _config.CRM_URL = res.data.content.projCrmRealm;
          _config.PROJ_KEY = res.data.content.projKey;
          const storage = window.localStorage;
          storage.setItem('projInfo', JSON.stringify(res.data.content))
        }
        this.getTradingList();
      });
    },
    // 订单列表
    getOrderHistoryData() {
      let params = {}
      params.orderTradeOperation = '0,1'
      let pageInfoHelper = {
        pageSize: 10,
        pageNo: 1
      }
      let data = {
        params,
        pageInfoHelper
      }
      commonRequest.queryUserSignalOrder(data,res => {
            if(res.data.content === null ||res.data.content===undefined ||res.data.content===''){
              this.$message.warning('无历史交易订单！')
            }else {
              this.dynamicList = res.data.content.data
            }
          })
    },
    getOrderTradeYesterDay(){
      let params = {
        dimension:'DAY'
      }
      let data = {
        params
      }
      commonRequest.getOrderSumGroupBetween(data,res => {
        if(res.data.content === null ||res.data.content===undefined ||res.data.content===''){
          this.$message.warning('无历史交易订单！')
        }else {
          this.yesterDayTrade = res.data.content
        }
      })
    },
    // 交易英雄榜
    getHeroList() {
      let params = {}
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
        pageNo: 1
      }
      let data = {
        params,
        pageInfoHelper
      }
      commonRequest.querySignalOrderSumPermit(data,res => {
        if(res.data.content === null ||res.data.content===undefined ||res.data.content===''){
          this.$message.warning('无历史交易订单！')
        }else {
          this.heroList = res.data.content.data
        }
      })
    },
    getPersent: function(value) {
      return commonAction.getPersent(value)
    },
  },
};

export { Index };
