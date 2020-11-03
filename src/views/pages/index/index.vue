<template lang="pug">
  #e-index
    BaseLayout
      .e-container
        .index-header
          swiper(class="swiper swiper-top" :options="swiperTopOption" ref="mySwiper" style="max-height: 800px")
            swiper-slide(v-for="(i,index) in swiperData" :key="index")
                .swiper-img
                  img(:src="i.url == '' ? demoImg : i.url" width="100%" class="swiper-img")
                .inner
                  p.title(data-swiper-parallax="-2000") {{i.title}}
                  p.msg(data-swiper-parallax="-3000") {{i.desc}}
                  p.btn(data-swiper-parallax="-4500") {{i.txt}}
            .swiper-button-prev(slot="button-prev")
            .swiper-button-next(slot="button-next")
        .index-trading.swad1
          .index-trading-box.bole-trade
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
                .module-top-head-link
                  router-link(to='/trading_strategy') 查看总排行榜 >>
              .module-top-list
                swiper(class="swiper" :options="swiperOption" ref="mySwiper")
                  swiper-slide.module-top-list-item(v-for="(item,index) in heroList" :key="index")
                    .swiper-slider-a
                        router-link(:to="{ path: '/trading_strategy/detail/'+item.signalId}")
                          .avatar
                            img(:src="item.avatarUrl == ''? avatar : item.avatarUrl" width="100%")
                            .ranknum(
                              :class="`color_${index+1}`"
                            ) {{'0'+(index+1)}}
                          .name {{item.signalName}}
                          .number 收益率
                            span {{getPersent(item.orderIncomeRate)}}
                          .modulebt
                            .bleft {{getPersent(item.orderWinRate)}}
                              span 交易胜率
                            .bright {{item.orderIncome}}
                              span 盈利（$）
                .swiper-button-prev-module(slot="button-prev")
                .swiper-button-next-module(slot="button-next")

        .index-trading
          //- 广告位
          //-img(src="../../../assets/images/demo.png")
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
                .s1 跟单用户量（人）
                .s2 {{yesterDayTrade.id * 25 }}
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_2.png")
              .module-list-two-item-info
                .s1 累计跟单量（手）
                .s2 {{yesterDayTrade.orderLots * 25 }}
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_3.png")
              .module-list-two-item-info
                .s1 累计跟单量（笔）
                .s2 {{yesterDayTrade.orderCount * 25 }}
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_4.png")
              .module-list-two-item-info
                .s1 累计收益金额（美元）
                .s2 {{yesterDayTrade.orderIncome * 25 }}$
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
                prop="signalId"
                align="center"
                label="信号源ID"
                width="180")
              el-table-column(
                prop="orderSymbol"
                align="center"
                label="交易品种"
                width="180")
              el-table-column(
                prop="orderLots"
                align="center"
                label="交易手数")
              el-table-column(
                prop="orderTradeOperation"
                align="center"
                :formatter="getOperationFormat"
                label="交易类型")
              el-table-column(
                prop="orderType"
                align="center"
                :formatter="getTypeFormat"
                label="交易类别")
              el-table-column(
                prop="orderProfit"
                align="center"
                label="获利（元）")
              el-table-column(
                prop="createDate"
                align="center"
                :formatter="getDateTimeFormat"
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
          .index-part
            .index-part-list
              .index-part-list-item(v-for="(i,index) in 10")
                //- router-link()
                img(src="../../../assets/images/part_demo.png")

</template>

<script>
  import { Index } from './index.js'
  export default Index
  
</script>

<style lang="sass" scoped>
  @import './index.sass'
  .index

    &-header
    &-trade
      padding: 60px 0
      text-align: center
    &-trading
      // display: none;
      width: 1500px
      margin: 0 auto
      &.swad
        width: 100%
        background: #ffffff
        overflow:hidden
    &-child-box
      width: 1500px
      margin: 0 auto
    &-part
      width: 1500px
      margin: 0 auto 30px
      &-list 
        display: flex
        align-items: center
        flex-flow: wrap
        justify-content: center
        margin-left: -50px
        margin-right: -50px
        &-item 
          flex: 0 0 220px
          height: 100px
          display: flex 
          justify-content: center
          align-items: center
          // background: #666
          margin: 0 50px 50px



</style>
