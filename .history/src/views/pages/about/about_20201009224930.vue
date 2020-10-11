<template lang="pug">
  #e-about
    BaseLayout(
      :navTransparent="true"
    )
      .about-container
        .about-header
            img(
                width="100%"
                src="../../../assets/images/abount-banner.jpg"
            )
        .about-content
          .about-title 关于我们
            .about-descript 更高端/更合规/更专业
          .about-statistics
            .about-statistics-item
              .about-statistics-item-img
                img(
                    src="../../../assets/images/people.svg"
                )
              .about-statistics-item-info
                .about-statistics-item-text 活跃账户数
                .about-statistics-item-num {{info.userActive}}
            .about-statistics-item
              .about-statistics-item-img
                img(
                 src="../../../assets/images/order.svg"
                )
              .about-statistics-item-info
                .about-statistics-item-text 订单量（笔）
                .about-statistics-item-num {{info.orderTotel}}
            .about-statistics-item
              .about-statistics-item-img
                img(
                  src="../../../assets/images/amount.svg"
                )
              .about-statistics-item-info
                .about-statistics-item-text 交易量
                .about-statistics-item-num ${{info.orderAmount}}
          .about-date - 数据截止至{{year}}年{{month}}月 -

        .about-ous
            .about-ous-tab
                span.about-ous-tab-item(
                v-for="t in tabs"
                :class="tabActive(t.value)"
                @click="selectTabHandler(t.value)"
                ) {{t.label}}
            .about-ous-tab-context(v-show="tabSelected == 0") 111
            .about-ous-tab-context(v-show="tabSelected == 1") 222
            .about-ous-tab-context(v-show="tabSelected == 2") 333
            .about-ous-tab-context(v-show="tabSelected == 3") 444
            .about-ous-tab-context(v-show="tabSelected == 4") 555
           
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import E from '../../../utils'
const tabs = [
  {
    value: 0,
    label: '关于我们'
  },
  {
    value: 1,
    label: '系统消息'
  },
  {
    value: 2,
    label: '公告'
  },
  {
    value: 3,
    label: '条款'
  },
  {
    value: 4,
    label: '常见问题'
  }
]
export default {
  data() {
    return {
      year: '',
      month: '',
      info: {},
      tabSelected: 0,
      tabs
    }
  },
  components: {
    BaseLayout
  },
  methods: {
    tabActive(val) {
      if (val === this.tabSelected) {
        return 'active'
      }
    },
    selectTabHandler(val) {
      this.tabSelected = val
    },
  },
  created() {
    const now = new Date()
    this.month = now.getMonth() + 1
    this.year = now.getFullYear()
    E.handleRequest(E.api().get('com/getActive'))
      .then(res => {
        this.info = res.data.content
      })
  }
}
</script>

<style lang="sass" scoped>
.about

  &-header
    padding-top: 60px
    // height: 630px
    // background:url(../../../assets/images/abount-banner.jpg) center top no-repeat
    overflow: hidden

    video
      width: 100%

  &-content
    width: 1190px  
    background-color: white
    margin: 0 auto
    position: relative
    top: -74px
    padding-top: 60px
  &-title
      text-align: center
      font-size: 36px
      color: #333
      line-height: 50px
  &-descript
      font-size: 20px
      color: #666
      line-height: 28px
      letter-spacing: 3px
  &-statistics
    padding: 63px 15% 0 15%
    display: flex

    &-item
      display: flex
      flex: 1
      align-items: center
      flex-direction: column
      text-align: center

      &-img
          display: flex
          align-items: center
          justify-content: center
          width: 100px
          height: 100px

      &-num
        color: #1138FF
        font-weight: 500
        font-size: 36px
        line-height: 42px;

      &-text
        margin: 20px 0 16px
        color: #999
        font-size: 16px
        line-height: 22px

  &-ous
    width: 1190px
    margin: -54px auto 20px
    &-tab
        height: 40px
        font-size: 14px
        color: #333
        background: #eee

        &-item
            display: inline-block
            line-height: 38px
            padding: 0 17px
            cursor: pointer
            border-top: 2px solid #eee
            &.active
                color: #1138FF
                border-top: 2px solid #1138FF
                background: #fff
    &-context
        padding:30px 40px 100px
        
    &-company
        width: 100%
        max-width: 1180px
        margin: 0 auto
        &-title
            font-weight: 600
            font-size: 35px
            text-align: center
        &-detail
          margin: 35px auto
          max-width: 800px
          color: #666
          font-weight: 400
          font-size: 16px
          line-height: 28px

  &-tech
      width: 1200px
      padding-bottom: 100px
      margin: auto
      &-product-box
        display: flex
        -webkit-box-pack: justify
        justify-content: space-between
        padding-bottom: 60px
        &-item
          display: flex
          -webkit-box-orient: vertical
          -webkit-box-direction: normal
          flex-direction: column
          -webkit-box-align: center
          align-items: center
          padding-bottom: 26px
          text-align: center
          &-title
              font-weight: 600
              font-size: 35px
              text-align: center

  &-date
    padding: 26px 0 20px
    color: #ccc
    font-size: 12px
    text-align: center
</style>
