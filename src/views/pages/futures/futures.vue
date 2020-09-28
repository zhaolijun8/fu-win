<template lang="pug">
  #e-futures
    BaseLayout
      .futures-header
      .futures-sort
        .futures-sort-content
          .futures-sort-item.down 按总收益率排序
          .futures-sort-item.up 按总获利排序
          .futures-sort-item 按月获利排序
          .futures-sort-item 按复制人数排序
          .futures-sort-item 按交易笔数排序
          .futures-sort-select
            select
              option(value="") 选择交易所
              option(value="") 上海期货交易所
              option(value="") 大连商品交易所
              option(value="") 郑州商品交易所
              option(value="") 中金所
              option(value="") 上海国际能源交易中心
          .futures-sort-input
            span 关键字：
            input
            span.search 搜索
      .futures-container
        .futures-item(
          v-for="futur in futuresList"
        )
          .futures-item-header
            .futures-item-name
              img(src="../../../assets/images/futures_icon.png")
              span {{futur.name}}
            .futures-item-price.e-text-center {{futur.profit}}
            .futures-item-tip.e-text-center 总收益
          .futures-item-content
            .futures-item-list
              .futures-item-list-name 最少参与资金
              .futures-item-list-value ￥ {{futur.lessMoney}}
            .futures-item-list
              .futures-item-list-name 当前余额
              .futures-item-list-value ￥ {{futur.balance}}
            .futures-item-list
              .futures-item-list-name 当前净值
              .futures-item-list-value ￥ {{futur.equity}}
            .futures-item-list
              .futures-item-list-name 总获利
              .futures-item-list-value ￥ {{futur.profit}}
            .futures-item-list
              .futures-item-list-name 总收益率
              .futures-item-list-value {{futur.incomeRate}}%
            .futures-item-list
              .futures-item-list-name 总胜率
              .futures-item-list-value {{futur.winRate}}%
            .futures-item-list
              .futures-item-list-name 复制人数
              .futures-item-list-value {{futur.follows}}
          .futures-item-footer
            a.e-text-center(href="") 复制
            a.e-text-center(href="") 查看详情
      .futures-pagination
        .futures-pagination-first 首页
        .futures-pagination-item.active 1
        .futures-pagination-item 2
        .futures-pagination-item 3
        .futures-pagination-item 4
        .futures-pagination-item 5
        .futures-pagination-last 尾页
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'

export default {
  data() {
    return {
      futuresList: [
        {
          name: '中金所-上证50-ih-07号信号源-过夜低频',
          lessMoney: '2500000.00',
          balance: '2917600.00',
          equity: '2916580',
          profit: '1970820',
          incomeRate: '78.83',
          profitMonth: '250900.00',
          winRate: '55.71',
          follows: '87'
        },
          {
              name: '中金所-期指-if-00号信号源',
              lessMoney: '2000000',
              balance: '2705522.36',
              equity: '2664302.36',
              profit: '1312190.3',
              incomeRate: '65.61',
              profitMonth: '250900.00',
              winRate: '47.27',
              follows: '45'
          },
          {
              name: '上期能源-原油sc-06号信号源-过夜中频',
              lessMoney: '1500000',
              balance: '1341200.00',
              equity: '1330100',
              profit: '872800',
              incomeRate: '58.19',
              profitMonth: '250900.00',
              winRate: '50.47',
              follows: '39'
          },
          {
              name: '中金所-期指-if-04号信号源-过夜每周五平',
              lessMoney: '2000000',
              balance: '2934020.00',
              equity: '2916980',
              profit: '839160',
              incomeRate: '41.96',
              profitMonth: '250900.00',
              winRate: '49.72',
              follows: '35'
          },
          {
              name: '中金所-中证500-ic-04号信号源-过夜每周五平',
              lessMoney: '2000000',
              balance: '2036640.00',
              equity: '2034080',
              profit: '520960',
              incomeRate: '26.05',
              profitMonth: '250900.00',
              winRate: '49.64',
              follows: '32'
          },
          {
              name: '中金所-上证50-ih-00号信号源',
              lessMoney: '2000000',
              balance: '2045249.64',
              equity: '2014829.64',
              profit: '517644.19',
              incomeRate: '25.88',
              profitMonth: '250900.00',
              winRate: '34.82',
              follows: '32'
          },
          {
              name: '上期所-黄金au-06号信号源-过夜中频',
              lessMoney: '500000',
              balance: '717530.00',
              equity: '711290',
              profit: '460310',
              incomeRate: '92.06',
              profitMonth: '250900.00',
              winRate: '87.32',
              follows: '46'
          },
          {
              name: '上期能源-原油sc-07号信号源-过夜低频',
              lessMoney: '2000000',
              balance: '2300100.00',
              equity: '2287700',
              profit: '451200',
              incomeRate: '22.56',
              profitMonth: '250900.00',
              winRate: '42.76',
              follows: '28'
          },
          {
              name: '中金所-中证500-ic-07号信号源-过夜低频',
              lessMoney: '2500000',
              balance: '2783600.00',
              equity: '2779680',
              profit: '442360',
              incomeRate: '17.69',
              profitMonth: '250900.00',
              winRate: '48.96',
              follows: '24'
          }
      ]
    }
  },
  components: {
    BaseLayout
  }
}
</script>

<style lang="sass" scoped>
.futures

  &-header
    height: 390px
    margin-top: 60px
    background: url('../../../assets/images/futures_header.jpg') no-repeat center center

  &-sort
    border-bottom: 1px solid #e0e2e5
    background: #fff

    &-content
      display: flex
      justify-content: space-around
      align-items: center
      height: 50px
      width: 1300px
      margin: 0 auto

    &-item
      position: relative
      height: 50px
      line-height: 50px
      margin: 0 20px
      cursor: pointer

      &::before
        content: ""
        position: absolute
        width: 0
        height: 0
        right: -15px
        border-left: 4px solid transparent
        border-right: 4px solid transparent
        color: #bcbcbc
        top: 21px
        border-bottom: 4px solid

      &::after
        content: ""
        position: absolute
        width: 0
        height: 0
        right: -15px
        border-left: 4px solid transparent
        border-right: 4px solid transparent
        color: #bcbcbc
        top: 27px
        border-top: 4px solid

      &.down,
      &.up
        color: #ff7326

      &.down

        &::before
          display: none

        &::after
          color: #ff7326
          top: 24px

      &.up

        &::after
          display: none

        &::before
          color: #ff7326
          top: 24px

    &-select
      margin: 0 30px

    &-input
      display: flex
      align-items: center
      margin: 0 30px

      span
        color: #868686

      input
        padding: 4px 10px
        border: 1px solid #ccc
        margin-right: 10px

      .search
        cursor: pointer

  &-container
    display: flex
    flex-wrap: wrap
    width: 1200px
    margin: 0 auto

  &-item
    width: calc( (100% - 60px) / 3)
    margin: 30px 10px 24px
    border: 1px solid #e9e9e9
    background-color: white

    &:hover
      transform: translate(0px, -6px)
      transition: all 200ms linear

      & .futures-item-header
        background: #1360d4
        transition: all 200ms linear

    &-header
      padding: 20px
      background-color: #3E81E6
      color: #fff
      font-weight: 400

    &-name
      display: flex
      font-size: 20px
      justify-content: flex-start
      align-items: center

      img
        width: 40px
        height: 40px
        margin-right: 40px

      span
        flex: 1

    &-price
      margin: 18px 0
      font-size: 29px

    &-tip
      margin: 18px 0
      font-size: 18px

    &-list
      display: flex
      justify-content: space-between
      padding: 14px 16px
      border-bottom: 1px solid #f2f0f0

    &-footer
      display: flex
      justify-content: center

      a
        width: 64px
        margin: 18px 14px
        padding: 4px 20px
        color: #fff
        border-radius: 14px

        &:first-child
          background-color: #3E81E6

        &:last-child
          background-color: #474747

  &-pagination
    display: flex
    justify-content: center
    margin-bottom: 20px

    &-first,
    &-last,
    &-item
      padding: 0 10px
      margin: 5px
      border: 1px solid #ccc
      cursor: pointer
      height: 32px
      line-height: 32px

      &.active
        background-color: #3E81E6
        border: 1px solid #3E81E6
        color: #fff

      &:hover
        background-color: #3E81E6
        border: 1px solid #3E81E6
        color: #fff

</style>
