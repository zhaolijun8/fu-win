<template lang="pug">
    .trading-ous-tab
        .trading-filter-content
            .trading-filter-item
                .trading-filter-item-label 账户类型
                .trading-filter-item-all(
                    :class="checkAllClass('acounttype')",
                    @click="checkClear('acounttype')"
                ) 全部账户
                .trading-filter-item-attr(
                    v-for="a in acounttype"
                    @click="checkFilter('acounttype', a)"
                    :class="checkClass('acounttype', a)"
                ) {{a.label}}
            .trading-filter-item
                .trading-filter-item-label 订阅费
                .trading-filter-item-all(
                    :class="checkAllClass('subfee')",
                    @click="checkClear('subfee')"
                ) 绝对收益率
                .trading-filter-item-attr(
                    v-for="s in subfee"
                    @click="checkFilter('subfee', s)"
                    :class="checkClass('subfee', s)"
                ) {{s.label}}
</template>
<script>
export default {
    data(){
        return{
            tabSelected: 0,
            subfeeSelected: null,
            acounttypeSelected: null,
        }
    },
    props:{
        acounttype: {
            type: Array
        },
        subfee:{
            type: Array
        }
    },
    methods: {
    checkClass(type, val) {
      let res = null;

      switch (type) {
        case "subfee":
          if (
            this.subfeeSelected !== null &&
            this.subfeeSelected.value === val.value
          ) {
            res = "active";
          }
          break;
        case "acounttype":
          if (
            this.acounttypeSelected !== null &&
            this.acounttypeSelected.value === val.value
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
        case "subfee":
          if (this.subfeeSelected === null) {
            res = "active";
          }
          break;
        case "acounttype":
          if (this.acounttypeSelected === null) {
            res = "active";
          }
          break;
      }

      return res;
    },
    // 处理筛选数据
    formatFilter() {
      const obj = {};

      if (this.subfeeSelected !== null) {
        obj.brokerName = this.subfeeSelected.value;
      }

      if (this.acounttypeSelected !== null) {
        obj.brokerName = this.acounttypeSelected.value;
      }

      return obj;
    },
    // 选择选项
    checkFilter(type, val) {
      switch (type) {
        case "subfee":
          this.subfeeSelected = val;
          break;
        case "acounttype":
          this.acounttypeSelected = val;
          break;
      }

      const request = this.formatFilter();

      this.$emit("filter", request);
    },
    // 清空某一类选项
    checkClear(type) {
      switch (type) {
        case "subfee":
          this.subfeeSelected = null;
          break;
        case "propot":
          this.acounttypeSelected = null;
          break;
      }

      const request = this.formatFilter();

      this.$emit("filter", request);
    },
    // 清空全部选项
    checkClearAll() {
      this.subfeeSelected = null;
      this.acounttypeSelected = null;

      const request = this.formatFilter();

      this.$emit("filter", request);
    },
  
  },
}
</script>

<style lang="sass" scoped>
    @import './filter'
</style>