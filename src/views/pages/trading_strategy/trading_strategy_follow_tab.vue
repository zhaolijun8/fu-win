<template lang="pug">
    .trading-filter-content
        .trading-filter-item
            .trading-filter-item-label 交易周期
            .trading-filter-item-all(
                :class="checkAllClass('jytype')",
                @click="checkClear('jytype')"
            ) 不限
            .trading-filter-item-attr(
                v-for="a in jytype"
                @click="checkFilter('jytype', a)"
                :class="checkClass('jytype', a)"
            ) {{a.label}}
        .trading-filter-item
            .trading-filter-item-label 排序
            .trading-filter-item-all(
                :class="checkAllClass('followtype')",
                @click="checkClear('followtype')"
            ) 跟随收益率
            .trading-filter-item-attr(
                v-for="s in followtype"
                @click="checkFilter('followtype', s)"
                :class="checkClass('followtype', s)"
                    ) {{s.label}}  
</template>
<script>
export default {
    data(){
        return{
            tabSelected: 0,
            followSelected: null,
            jySelected: null,
        }
    },
    props:{
        jytype: {
            type: Array
        },
        followtype:{
            type: Array
        }
    },
    methods: {
    checkClass(type, val) {
      let res = null;

      switch (type) {
        case "jytype":
          if (
            this.jySelected !== null &&
            this.jySelected.value === val.value
          ) {
            res = "active";
          }
          break;
        case "followtype":
          if (
            this.followSelected !== null &&
            this.followSelected.value === val.value
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
        case "jytype":
          if (this.jySelected === null) {
            res = "active";
          }
          break;
        case "followtype":
          if (this.followSelected === null) {
            res = "active";
          }
          break;
      }

      return res;
    },
    // 处理筛选数据
    formatFilter() {
      const obj = {};

      if (this.jySelected !== null) {
        obj.brokerName = this.jySelected.value;
      }

      if (this.followSelected !== null) {
        obj.brokerName = this.followSelected.value;
      }

      return obj;
    },
    // 选择选项
    checkFilter(type, val) {
      switch (type) {
        case "jytype":
          this.jySelected = val;
          break;
        case "followtype":
          this.followSelected = val;
          break;
      }

      const request = this.formatFilter();

      this.$emit("filter", request);
    },
    // 清空某一类选项
    checkClear(type) {
      switch (type) {
        case "jytype":
          this.jySelected = null;
          break;
        case "followtype":
          this.followSelected = null;
          break;
      }

      const request = this.formatFilter();

      this.$emit("filter", request);
    },
    // 清空全部选项
    checkClearAll() {
      this.jySelected = null;
      this.followSelected = null;

      const request = this.formatFilter();

      this.$emit("filter", request);
    },
  
  },
}
</script>
<style lang="sass" scoped>
    @import './filter'
</style>