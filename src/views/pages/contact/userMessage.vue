<template lang="pug">
  #e-registe
    .registe-container
      .registe-content
        .registe-title Hi, 欢迎加入我们
        .registe-item 用户名:
          input(
            type="text"
            placeholder='请输入用户名'
            v-model="request.username"
          )
        .registe-item 密码:
          input(
            type="password"
            placeholder='请输入密码'
            v-model="request.password"
          )
        .registe-item 确认密码:
          input(
            type="password"
            placeholder='请输入确认密码'
            v-model="request.password2"
          )
        .registe-item 昵称:
          input(
            type="text"
            placeholder='请输入昵称'
            v-model="request.refName"
          )
        .registe-item  手机号:
          input(
            type="num"
            maxlength='11'
            placeholder='请输入手机号'
            v-model="request.mobile"
          )
        .registe-item Email:
          input(
            type="text"
            placeholder='请输入Email'
            v-model="request.email"
          )
        .registe-item 省份:
          input(
            type="text"
            placeholder='请输入省份'
            v-model="request.province"
          )
        .registe-item 城市:
          input(
            type="text"
            placeholder='请输入城市'
            v-model="request.city"
          )
      .registe-btn(
        @click="registeHandler"
      ) 提交
</template>
<script>
import E from '../../../utils'

export default {
  data() {
    return {
      request: {
        username: '',
        refName: '',
        mobile: '',
        introducer: '',
        email: '',
        password: '',
        password2: '',
        province: '',
        city: ''
      }
    }
  },
  methods: {
    agreementHandler() {
      this.agreementShow = !this.agreementShow
    },
    validPhone: function (value){ // 手机号验证
          if (!value) {
              this.$message.warning('请输入电话号码')
          } else {
              var reg = /^1[3|4|5|7|6|8][0-9]\d{8}$/
              var reg2 = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/
              if (reg2.test(value) || reg.test(value)) {
                  return true
              }
              return false
          }
      },
      validEmail: function (value){
          if (!value) {
              this.$message.warning('请正确填写邮箱')
          } else {
              if (value !== '') {
                  var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                  if (reg.test(value)) {
                      return true
                  }
              }
              return false
          }
      },
      introducerDecode: function(value) {
          let Base64 = require('js-base64').Base64
          return Base64.decode(value)  //
      },
    registeHandler() {
      if (this.request.username === '') {
        this.$message.warning('请输入姓名')
        return false
      }
      if (this.request.introducer === '') {
        this.$message.warning('请输入邀请码')
        return false
      }
        if (this.request.password === '') {
            this.$message.warning('请输入密码')
            return false
        }
        if (this.request.password2 === '') {
            this.$message.warning('请确认密码')
            return false
        }
      if (this.request.refName === '') {
        this.$message.warning('请输入昵称')
        return false
      }
      if (this.request.mobile === '') {
        this.$message.warning('请输入手机号')
        return false
      }
      if (this.request.email === '') {
        this.$message.warning('请输入邮箱')
        return false
      }
      if (this.request.password !== this.request.password2) {
        this.$message.warning('两次输入的密码不一致')
        return false
      }
      if(!this.validPhone(this.request.mobile)){
          this.$message.warning('请输入正确格式的手机号')
          return false
      }
      if(!this.validEmail(this.request.email)){
          this.$message.warning('请输入正确格式的邮箱')
          return false
       }
        let params = this.request
        params.introducer = this.introducerDecode(this.request.introducer)
      E.handleRequest(E.api().post('admin/registered', params))
        .then(res => {
          if (res.data.code && res.data.code !== 0) {
            this.$message.warning(res.data.message)
          } else {
            const storage = window.localStorage
            storage.setItem('follow_user_info', JSON.stringify(res.data.content.data))
            this.$router.push({
              name: 'index'
            })
          }
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.registe

  &-container
    width: 100%
    padding: 50px 180px
    position: relative

  &-login
    position: absolute
    top: 20px
    right: 30px
    color: #409EFF
    font-size: 16px

  &-content
    margin-bottom: 30px
    text-align: right

  &-title
    font-size: 24px
    margin-bottom: 30px

  &-item
    height: 48px
    border-radius: 2px
    margin-bottom: 12px

    &::last-child
      margin-bottom: 0

    input
      width: 85%
      height: 100%
      background-color: #f2f2f270
      padding: 0 20px
      border: 1px solid #ebebeb
      outline: none
      caret-color: #409EFF
      box-sizing: border-box
      font-size: 14px

  &-agreement
    margin-top: 12px
    color: #999
    text-align: center

    .click
      cursor: pointer

      &:hover
        color: #409EFF

    &-mark
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: rgba(0, 0, 0, 0.5)

    &-content
      width: 840px
      height: 560px
      position: fixed
      top: 50%
      left: 50%
      margin: -250px 0 0 -400px
      background-color: #fff
      padding: 20px

    &-close
      width: 30px
      height: 30px
      position: absolute
      top: 20px
      right: 30px
      cursor: pointer

      &:before
        content: ""
        position: absolute
        top: 50%
        left: 50%
        background-color: #ccc
        width: 24px
        height: 4px
        border-radius: 2px
        transform: translate(-50%, -50%) rotate(45deg)

      &:after
        content: ""
        position: absolute
        top: 50%
        left: 50%
        background-color: #ccc
        width: 4px
        height: 24px
        border-radius: 2px
        transform: translate(-50%, -50%) rotate(45deg)

    &-title
      font-size: 18px
      font-weight: bold
      margin: 30px 0
      text-align: center

  &-btn
    background-color: #409EFF
    border-radius: 2px
    width: 100%
    height: 50px
    line-height: 50px
    color: #fff
    font-size: 16px
    cursor: pointer
    margin-top: 20px
    text-align: center

    &:hover
      background-color: #F15001
</style>


