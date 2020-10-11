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
              img.about-statistics-item-img(
                src="../../../assets/images/people.svg"
              )
              .about-statistics-item-info
                .about-statistics-item-num {{info.userActive}}
                .about-statistics-item-text 活跃账户数
            .about-statistics-item
              img.about-statistics-item-img(
                src="../../../assets/images/order.svg"
              )
              .about-statistics-item-info
                .about-statistics-item-num {{info.orderTotel}}
                .about-statistics-item-text 订单量（笔）
            .about-statistics-item
              img.about-statistics-item-img(
                src="../../../assets/images/amount.svg"
              )
              .about-statistics-item-info
                .about-statistics-item-num ${{info.orderAmount}}
                .about-statistics-item-text 交易量
          .about-date - 数据截止至{{year}}年{{month}}月 -

        .about-ous
           .about-ous-company-title 关于我们
           .about-ous-company-detail 自成立以来，我们致力于营造一个真实的、公开透明的智能化交易社区，通过开放平台和个性化内容推荐等产品，将全球交易用户和交易商链接在一起。 同时，我们将持续投入在大数据、量化交易等领域，为超过百万的社区用户创造更理想的交易生态环境。

</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import E from '../../../utils'

export default {
  data() {
    return {
      year: '',
      month: '',
      info: {}
    }
  },
  components: {
    BaseLayout
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
     letter-spacing: 3px;
  &-statistics
    padding: 70px 15% 0 15%
    display: flex

    &-item
      display: flex
      flex: 1
      align-items: center

      &-img
        margin-right: 8px

      &-num
        color: #409EFF
        font-weight: 500
        font-size: 48px

      &-text
        margin-top: 5px
        color: #999
        font-size: 16px

  &-ous
    width: 1200px
    padding-top: 100px
    padding-bottom: 100px
    margin: auto
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
