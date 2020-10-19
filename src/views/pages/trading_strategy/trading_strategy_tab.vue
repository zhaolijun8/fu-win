<template lang="pug">
.trading-ous-tab
    .more(@click="jumpTo()") 查看更多 >
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
            .trading-filter-item-label 收益率
            .trading-filter-item-all(
            :class="checkAllClass('rate')",
            @click="checkClear('rate')"
            ) 不限
            .trading-filter-item-attr(v-for="r in rate"
            @click="checkFilter('rate', r)"
            :class="checkClass('rate', r)") {{ r.label }}

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
      tabs,
      jytype,
      followType,
      tabSelected: 0,
      feeSelected: null,
      rateSelected: null,
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
        case "rate":
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
        case "rate":
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
        obj.brokerName = this.feeSelected.value;
      }

      if (this.propotSelected !== null) {
        obj.brokerName = this.propotSelected.value;
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
        case "rate":
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
        case "rate":
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
    followfilterHandler(){
        this.$emit('followFilter');
    }
  },
};
</script>
<style lang="sass" scoped>
    @import './filter'
</style>