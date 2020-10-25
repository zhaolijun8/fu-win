<template lang="pug">
  #e-index
    BaseLayout
      .e-container
        .index-header
          //- img(src="../../../assets/images/index_1.png")
          //- swiper(class="swiper" :options="swiperOption" ref="mySwiper" style="height: 800px")
          //-   swiper-slide(v-for="(i,index) in 4" :key="index")
          //-       img(src="../../../assets/images/index_1.png" width="100%")
          //-   .swiper-button-prev(slot="button-prev")
          //-   .swiper-button-next(slot="button-next")
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
                //- .bg
                .module-top-list-item(
                  v-for="(item,index) in heroList"
                )
                  .avatar 
                    img(:src="item.url == ''? avatar : item.url" width="100%")
                    .ranknum(
                      :class="`color_${index+1}`"
                    ) {{'0'+(index+1)}}
                  .name 辣妹子
                  .number 收益率
                    span {{item.rate}}
                  .modulebt
                    .bleft {{item.pnum}}
                      span 亏盈点数
                    .bright {{item.profit}}
                      span 盈利（元）
              .left-btn 
              .right-btn
                //- swiper(class="swiper" :options="swiperOption" ref="mySwiper" style="height: 800px")
                //-   swiper-slide(v-for="(i,index) in 5" :key="index")
                //-        .module-top-list-item(
                //-           v-for="(item,index) in heroList"
                //-         )
                //-           .avatar 
                //-             img(:src="item.url == ''? avatar : item.url" width="100%")
                //-             .ranknum(
                //-               :class="`color_${index+1}`"
                //-             ) {{'0'+(index+1)}}
                //-           .name 辣妹子
                //-           .number 收益率
                //-             span {{item.rate}}
                //-           .modulebt
                //-             .bleft {{item.pnum}}
                //-               span 亏盈点数
                //-             .bright {{item.profit}}
                //-               span 盈利（元）
                //-   .swiper-button-prev(slot="button-prev")
                //-   .swiper-button-next(slot="button-next")
                     
        .index-trading
          //- 广告位
          img(src="../../../assets/images/demo.png")
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
                .s1 累计跟单量（手）
                .s2 134.931
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_2.png")
              .module-list-two-item-info
                .s1 跟单用户量（人）
                .s2 134.931
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_3.png")
              .module-list-two-item-info
                .s1 跟随获利（美元）
                .s2 134.931
            .module-list-two-item
              .module-list-two-item-img
                img(src="../../../assets/images/trad_4.png")
              .module-list-two-item-info
                .s1 总跟随资金（美元）
                .s2 134.931
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
                prop="info"
                align="center"
                label="基本信息"
                width="180")
              el-table-column(
                prop="variet"
                align="center"
                label="品种"
                width="180")
              el-table-column(
                prop="number"
                align="center"
                label="人数")
              el-table-column(
                prop="opera"
                align="center"
                label="操作")
              el-table-column(
                prop="profit"
                align="center"
                label="获利（元）")
              el-table-column(
                prop="time"
                align="center"
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
                  img()
      
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
      margin: 0 auto
      &-list 
        display: flex
        align-items: center
        flex-flow: wrap
        justify-content: center
        &-item 
          flex: 0 0 220px
          height: 100px
          background: #666
          margin: 0 50px 100px 0



</style>
