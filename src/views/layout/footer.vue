<template lang="pug">
  #e-footer
    .footer
      .footer-box
        .footer-box-left
          .footer-box-left-a 
            img(src="../../assets/images/doubt_icon.svg")
            span 在线咨询
          .footer-box-left-desc 服务时间：周一至周五 9：00-18：00<br>邮箱：service@hshs.con
        .footer-box-center
          dl.footer-box-center-dl(
            v-for="item in footerList"
          )
            dt.footer-box-center-dt {{item.title}} 
            dd.footer-box-center-dd(
              v-for="childItem in item.list"
            )
              a.footer-box-center-dd-router {{childItem}}
        .footer-box-right
          img(src="../../assets/images/ewm.png") 
          div 官方微信二维码
      .footer-content
        span.footer-sub 交易创造奇迹
        span.footer-copyright © 2020. All Rights Reserved. 投资有风险，入市需谨慎
</template>
<script>
export default {
  data() {
    return {
      footerList:[{
        title: '关于我们',
        list: ['公司介绍','平台介绍','合作伙伴','联系我们','加入我们']
      },{
        title: '网站条款',
        list: ['服务条款','隐私政策','免责声明','跟随交易风险','平台风险警示']
      },{
        title: '帮助中心',
        list: ['新手指南','绑定MT4账号','跟随交易员']
      }],
      footerName: ['关于我们','网站条款','帮助中心',],
      aboutUs: ['公司介绍','平台介绍','合作伙伴','联系我们','加入我们'],
      interTerm: ['服务条款','隐私政策','免责声明','跟随交易风险','平台风险警示'],
      helpCenter: ['新手指南','绑定MT4账号','跟随交易员']
    }
  }
}
</script>
<style lang="sass" scoped>
#e-footer
  padding: 70px 0 43px
  background-color: #333
.footer
  &-box
    display: flex
    align-items: center
    max-width: 1350px
    margin: 0 auto 45px
    color: #808080
    font-size: 14px
    &-left
      width: 238px
      margin-right: 100px
      &-a 
        width: 238px
        height: 70px
        margin-bottom: 30px
        border: 1px solid #666666
        display: flex
        align-items: center
        justify-content: center
        line-height: 20px
        color: #fff
        span 
          margin-left: 20px
      &-desc
        line-height: 24px
        color: #ccc
    &-center
      display: flex
      flex: 1
      position: relative
      padding: 0 100px
      &:after,&:before
        position: absolute
        top: 6px
        content: ''
        display: block 
        width: 1px
        height: 190px
        background: #666
      &:after 
        right: 0
      &:before 
        left: 0
      &-dl 
        flex: 1
        margin: 0
      &-dt 
        width: 80px
        line-height: 20px
        color: #fff
        margin: 0 auto 20px
      &-dd
        width: 80px
        font-size: 12px
        margin: 0 auto 20px
        &-router
          color: #ccc
          line-height: 17px
          cursor: pointer

    &-right
      width: 158px
      margin-left: 150px
      text-align: center
      color: #fff
      div
        margin-top: 20px
        line-height: 20px 
        
  &-content
    width: 1200px
    margin: 0 auto
    text-align: center
    font-size: 12px
    color: #999
    line-height: 17px

  &-sub
    margin-right: 20px

</style>
