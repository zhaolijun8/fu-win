<template lang="pug">
  #e-trader 
    .trander-moduler
      .trander-moduler-top
        .avatar
          img(:src="traderInfo.avatar != '' ? traderInfo.avatar: avatar ")
        .desc {{traderInfo.title}}
          span {{traderInfo.desc}}
      .trander-name(   
          :class="{hide:!show}"      
        ) 风险提示：过往业绩不预示未来表现，相关数据仅供交流学习，不构成投资建议。请勿使用
          i.el-icon-close( 
            @click="show = !show"
          )
      .trander-moduler-flex
        .trander-moduler-flex-l
          .track-box
            .title 趋势追踪
              span 合作平台：中信期货
            .track-box-label 
              span.label 稳健
              span.label 激进
          .track-list
            .track-list-item 累计收益
              .txt 14.19%
            .track-list-item 胜率
              .txt 14.19%
            .track-list-item 盈亏比
              .txt 114.19%
            .track-list-item 最大回撤
              .txt 14.19%
          .track-row 
            .track-row-item 近1月收益：
              span.txt 14.19%
            .track-row-item 近3月收益：
              span.txt 14.19%
            .track-row-item 近6月收益：
              span.txt 14.19%
            .track-row-item 近1年收益：
              span.txt 14.19%
        .trander-moduler-flex-r     
          .state 
            label 风险承担说明： 
            span 这里是个说明这里是个说明这里是个说明这里是个说明 这里是个说明这里是个说明这里是个说明这里是个说明
          .state 
            label 资金要求：
            span 这里是资金要求，这里是资金要求，这里是资金要求
          .state 
            label 分成方式：
            span 这里是成分方式，这里是成分方式
          .opera 
            .btn1 立即订阅
            .btn2 免费咨询
</template>
<script>
  import avatar from '../../assets/images/avatar-default.svg'
export default {
  data(){
    return{
      // avatar:
      traderInfo:{
        avatar:'',
        title:'盈汇基金',
        desc:'这个人很神秘，什么都没有留下',
      },
      avatar,
      show:true
    }
  },
  
}
</script>
<style lang="sass" scoped>
.trander
  &-moduler
    background: #fff
    &-top 
      padding: 10px 30px 
      display: flex 
      align-items: center
      .avatar 
        img
          flex: 0 0 60px
          height: 60px
          margin-right: 20px
      .desc 
        color: #333
        font-size: 14px
        line-height: 20px
        font-weight: bold
        span
          margin-top: 3px
          display: block
          color: #999
          font-size: 12px
          line-height: 17px
          font-weight: 400

    &-flex
      display: flex
      align-items: center
      margin: 20px 30px
      padding-bottom: 28px
      &-l
        flex: 1
      &-r
        flex: 0 0 550px
        padding: 0 100px 0 60px
        .state
          margin-bottom: 15px
          label
            font-size: 12px
            color: #333
            font-weight: 500
          span 
            color: #777
        .opera 
          text-align: center
  &-name
    margin-bottom: 10px
    padding: 10px 12px 9px 20px
    line-height: 17px
    height: 36px
    font-size: 12px
    color: #333
    background: #FEFCEC
    border: 1px solid #FFFAD4
    transition: height 0.2s , padding 0.3s , opcity 0.4s
    .el-icon-close
      margin-top: 2px
      float: right
      font-weight: bold
      cursor: pointer  
  &-name.hide
    opcity: 0
    height: 0
    margin: 0
    border: 0 none
    padding: 0
    overflow: hidden
.track-list 
  display: flex
  padding-bottom: 30px
  border-bottom: 1px solid #eee
  &-item
    flex: 1
    font-size: 12px
    color: #999
    .txt 
      margin-top: 8px
      font-size: 28px;
      font-weight: bold;
      color: #1138FF;
      line-height: 32px;
.track-row
  display: flex
  padding-top: 20px
  &-item
    flex: 1
    font-size: 12px
    color: #999
  .txt 
    color: #FB3F41
.track-box 
  padding-bottom: 25px
  .title
    font-size: 18px
    color: #333
    font-weight: 500
    margin-bottom: 7px
    span 
      font-size: 12px
      color: #999
      margin-left: 12px
  &-label 
    .label
      display: inline-block
      font-size: 12px
      height: 20px;
      line-height: 20px;
      padding: 0 8px
      margin-right: 5px
      color: #1138FF;
      border: 1px solid #A5B2F4;

.btn1,.btn2
    display: inline-block
    width: 130px
    height: 50px
    line-height: 50px
    color: #fff
    font-size: 16px
    text-align: center
    margin-top: 15px
.btn1
    margin-right: 20px
    background: #1138FF
.btn2
    background: #FB3F41
</style>