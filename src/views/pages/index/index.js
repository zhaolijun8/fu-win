import BaseLayout from "../../layout/base_layout.vue";
import TradingItem from "../trading_strategy/trading_strategy_item.vue";
import questionItem from "../index/question.vue";
import E from "../../../utils";
import _config from "../../../base_config";

import avatar from "../../../assets/images/avatar-default.svg";
// import partImg_1 from '../../../assets/images/partImg_1.jpg'

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

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
      avatar,
      partList: [
        {
          hrefUrl: "",
        },
      ],
      tradingList: [],
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
      dynamicList: [
        {
          info: "这里是基本的信息",
          variet: "比特币",
          number: "1212",
          opera: "买入",
          profit: "3419.13",
          time: "2020-03-14",
        },
        {
          info: "这里是基本的信息",
          variet: "比特币",
          number: "1212",
          opera: "买入",
          profit: "3419.13",
          time: "2020-03-14",
        },
        {
          info: "这里是基本的信息",
          variet: "比特币",
          number: "1212",
          opera: "买入",
          profit: "3419.13",
          time: "2020-03-14",
        },
        {
          info: "这里是基本的信息",
          variet: "比特币",
          number: "1212",
          opera: "买入",
          profit: "3419.13",
          time: "2020-03-14",
        },
      ],
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
      swiperOption: {
        // slidesPerView: 1,
        // spaceBetween: 0,
        // slidesPerGroup: 1,
        // loopFillGroupWithBlank: true,
        // loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        grabCursor:true,
        parallax:true,
        preventLinksPropagation: false,
        swiperSlides:[],
      },
      swiperTopOption: {
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
  },
  methods: {
    doubtFunc(eq) {
      this.doubtEq = eq;
    },
    getTokenLogin(token) {
      let params = {
        token,
      };
      let data = {
        params,
      };
      E.handleRequest(E.api().post("admin/tokenLogin", data)).then((res) => {
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
      let params = {};
      const storage = window.localStorage;
      const projKey = storage.getItem("projKey");
      if (projKey !== undefined && projKey !== null) {
        params.projKey = projKey;
      } else {
        params.projKey = 0;
      }
      let pageInfoHelper = {
        pageSize: 4,
        pageNo: 1,
      };
      let data = {
        params,
        pageInfoHelper,
      };
      return E.handleRequest(
        E.api().post("signal/querySignalUsersPermit", data)
      ).then((res) => {
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
      return E.handleRequest(
        E.api().post("/permission/project/queryDetailByCondition", data)
      ).then((res) => {
        if (
          res.data.content.projCrmRealm !== null &&
          res.data.content.projCrmRealm !== ""
        ) {
          _config.CRM_URL = res.data.content.projCrmRealm;
          _config.PROJ_KEY = res.data.content.projKey;
          const storage = window.localStorage;
          storage.setItem("projKey", res.data.content.projKey);
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
      return E.handleRequest(
        E.api().post("/permission/project/queryProjectByUrl", data)
      ).then((res) => {
        if (
          res.data.content != null &&
          res.data.content.projCrmRealm !== null &&
          res.data.content.projCrmRealm !== ""
        ) {
          _config.CRM_URL = res.data.content.projCrmRealm;
          _config.PROJ_KEY = res.data.content.projKey;
          const storage = window.localStorage;
          storage.setItem("projKey", res.data.content.projKey);
        }
        this.getTradingList();
      });
    },
  },
};

export { Index };
