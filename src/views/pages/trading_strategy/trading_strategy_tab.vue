<template lang="pug">
.trading-ous-tab
    .more(@click="jumpTo()")
    span.trading-ous-tab-item(
    v-for="t in tabs",
    :class="tabActive(t.value)",
    @click="selectTabHandler(t.value)"
    ) {{ t.label }}
    .trading-filter-content(v-show="tabSelected == 0")
        .trading-filter-item
            .trading-filter-item-label 订阅费
            .trading-filter-item-all(
            :class="checkAllClass('fee')",
            @click="checkClear('fee')"
            ) 不限
            .trading-filter-item-attr(v-for="f in fee"
            @click="checkFilter('fee', f)"
            :class="checkClass('fee', f)") {{ f.label }}
        .trading-filter-item
            .trading-filter-item-label 经纪商
            .trading-filter-item-all(
            :class="checkAllClass('broker')",
            @click="checkClear('broker')"
            ) 不限
            .trading-filter-item-group.e-flex
                .trading-filter-item-attr(v-for="r in brokerList"
                @click="checkFilter('broker', r)"
                :class="checkClass('broker', r)") {{ r.label }}
                .more(@click="targetBroker()") {{brokerShow ? '<< 收起' : '更多 >>'}}
        .trading-filter-item
            .trading-filter-item-label 最大回撤比例
            .trading-filter-item-all(
            :class="checkAllClass('propot')",
            @click="checkClear('propot')"
            ) 不限
            .trading-filter-item-attr(v-for="p in propot"
            @click="checkFilter('propot', p)"
            :class="checkClass('propot', p)") {{ p.label }}
    TradingfollowTab(
        v-show="tabSelected == 1"
        :jytype="jytype"
        :followtype="followType"
        @filter="followfilterHandler")
</template>
<script>

import TradingfollowTab from './trading_strategy_follow_tab.vue'
const tabs = [
  {
    value: 0,
    label: "交易员",
  },
  {
    value: 1,
    label: "跟随者",
  },
];
const jytype = [
  {
    label: "3个月内",
    value: "0",
  },
  {
    label: "6个月内",
    value: "1",
  },{
    label: "1年内",
    value: "2",
  },{
    label: "2年内",
    value: "3",
  },{
    label: "2年以上",
    value: "4",
    }
];
const followType = [
  {
    label: "跟随收益",
    value: "orderIncome",
  },
  {
    label: "交易周期",
    value: "beginDate",
  },{
    label: "跟随笔数",
    value: "orderCount",
  },
];

export default {
  data() {
    return {
      tabs,
      jytype,
      followType,
      tabSelected: 0,
      feeSelected: null,
      rateSelected: null,
        brokerShow: false,
        brokerList: {},
        brokerHeader: {},
      propotSelected: null
    };
  },
  props: {
    fee: {
      type: Array,
    },
    rate: {
      type: Array,
    },
    propot: {
      type: Array,
    },
    broker: {
        type: Array
    }
},
watch: {
    broker: function(v1) {
        for (let i = 0; i < 8; i++) {
            this.brokerHeader[i] = this.broker[i]
        }
        this.setBroker()
    }
},
mounted() {
    for (let i = 0; i < 8; i++) {
        this.brokerHeader[i] = this.broker[i]
    }
    this.setBroker()
},
  components:{
      TradingfollowTab,
  },
  methods: {
    tabActive(val) {
      if (val === this.tabSelected) {
        return "active";
      }
    },
    selectTabHandler(val) {
      this.tabSelected = val;
      this.$emit('tradingTab',val)
    },
    jumpTo() {
      this.$router.go("/");
    }, // 单选框样式
    checkClass(type, val) {
      let res = null;

      switch (type) {
        case "fee":
          if (
            this.feeSelected !== null &&
            this.feeSelected.value === val.value
          ) {
            res = "active";
          }
          break;
        case "broker":
          if (
            this.rateSelected !== null &&
            this.rateSelected.value === val.value
          ) {
            res = "active";
          }
          break;
        case "propot":
          if (
            this.propotSelected !== null &&
            this.propotSelected.value === val.value
          ) {
            res = "active";
          }
          break;
      }

      return res;
    },
    // 全部按钮样式
    checkAllClass(type) {
      let res = null;

      switch (type) {
        case "fee":
          if (this.feeSelected === null) {
            res = "active";
          }
          break;
        case "propot":
          if (this.propotSelected === null) {
            res = "active";
          }
          break;
        case "broker":
          if (this.rateSelected === null) {
            res = "active";
          }
          break;
      }

      return res;
    },
    // 处理筛选数据
    formatFilter() {
      const obj = {};

      if (this.feeSelected !== null) {
        obj.followFee = this.feeSelected.value;
      }

      if (this.propotSelected !== null) {
        obj.historyWithdraw = this.propotSelected.value;
      }

      if (this.rateSelected !== null) {
        obj.brokerName = this.rateSelected.value;
      }

      return obj;
    },
    // 选择选项
    checkFilter(type, val) {
      switch (type) {
        case "fee":
          this.feeSelected = val;
          break;
        case "propot":
          this.propotSelected = val;
          break;
        case "broker":
          this.rateSelected = val;
          break;
      }

      const request = this.formatFilter();

      this.$emit("filter", request);
    },
    // 清空某一类选项
    checkClear(type) {
      switch (type) {
        case "fee":
          this.feeSelected = null;
          break;
        case "propot":
          this.propotSelected = null;
          break;
        case "broker":
          this.rateSelected = null;
          break;
      }

      const request = this.formatFilter();

      this.$emit("filter", request);
    },
    // 清空全部选项
    checkClearAll() {
      this.brokerSelected = null;
      this.levelSelected = null;
      this.rateSelected = null;

      const request = this.formatFilter();

      this.$emit("filter", request);
    },
    followfilterHandler(data){
        this.$emit('followFilter',data);
    },
      //切换展示状态
      targetBroker() {
          this.brokerShow = !this.brokerShow
          this.setBroker()
      },
      setBroker(){
          if(this.brokerShow){
              //全部显示
              this.brokerList = this.broker
          }else {
              this.brokerList = this.brokerHeader
          }
      },
  },
};
</script>
<style lang="sass" scoped>
    @import './filter'
</style>