<template lang="pug">
    .tranding-follow
          .tranding-follow-list
            .tranding-follow-list-item(v-for="(item, index) in followlist.list")
              .avatar 
                img(:src="item.url == '' ? avatar : item.url", width="100%")
              .name {{item.name}}
                span.desc qqq
              .yield-flex 收益率
                span.txt {{item.yield}}
              .accuracy-flex 跟随收益
                span.txt {{item.accuracy}}
              .profit-flex 交易周期
                span.txt2 {{item.week}}
              .profit-flex 跟随笔数
                span.txt2 {{item.num}}
              .btn-flex 
                span.txt3(@click="followBtn") 关注
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        followlist:{
            type:Object
        },
        avatar:{
          type:String
        }
    },
    methods:{
      followBtn(){
        this.$router.go('/'); 
      }
    }
}
</script>
<style lang="sass" scoped>
.tranding-follow
  background: #fff
  margin-bottom: 20px
  &-list
    &-item
      display: flex
      align-items: center
      text-align: center
      padding: 20px 30px 26px
      font-size: 14px
      color: #999
      border-bottom: 1px solid #eee
      .txt,.txt2 
        // padding-left: 30px
        margin-top: 10px
        line-height: 20px
        font-size: 30px
        color: #1138FF
        font-weight: bold
        display: block
      .txt2
        color: #333
      .txt3
        display: block
        width: 80px;
        height: 30px;
        line-height: 30px
        background: #FFFFFF;
        border-radius: 15px;
        border: 1px solid #A5B2F4;
        color: #1138FF;
        cursor: pointer
      .avatar
        flex: 0 0 50px
        position: relative
        width: 50px
        height: 50px
        display: block
        margin: 0px 25px 0px 0
        border-radius: 50%
        border: 2px solid #fff
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3)
      .name
        // flex: 0 0 120px
        flex: 1
        padding: 0 50px 0 0px
        text-align: left
        font-weight: bold
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        color: #333
        border-right: 1px solid #eee
        .desc 
          font-size: 12px
          margin-top: 3px
          display: block
          font-weight: normal
          // color: #999
      .yield-flex
        flex: 0 0 200px
        // padding: 0 20px
        border-right: 1px solid #eee
      .accuracy-flex
        flex: 0 0 200px
        // padding: 0 30px
        border-right: 1px solid #eee
      .profit-flex
        flex: 0 0 200px 
        border-right: 1px solid #eee
      .btn-flex
        flex: 0 0 80px
        margin-left: 30px
</style>