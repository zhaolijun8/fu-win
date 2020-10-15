<template lang="pug">
    #e-login
        .sign-box
            .sign-box-left
                img.bg-img(src="../../assets/images/login_bg.jpg")
                div.sign-box-left-desc 
                    h2 Bole Trade 交易社区
                    span 复制跟单，免费跟随技术牛人做教育   
            .sign-box-right
                .login-arrow
                .sign-box-form
                    .login-switch-tab
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="用户管理" name="first">
                                .sign-box-item
                                    img(src="../../assets/images/login_name.svg")
                                    input(
                                        type="text"
                                        placeholder='用户名'
                                        v-model="request.username"
                                    )
                                .sign-box-item
                                    img(src="../../assets/images/login_pwd.svg")
                                    input(
                                        type="password"
                                        placeholder='密码'
                                        v-model="request.password"
                                    )
                                .sign-box-line
                                    span.sign-box-line-forget 忘记密码？
                                    <el-checkbox v-model="checked">记住交易账号</el-checkbox>
                                .login-btn(
                                    @click="loginHandler"
                                ) 登录
                                router-link.sign-box-register(
                                    to="/user/registe"
                                ) 立即注册 >
                            </el-tab-pane>
                            <el-tab-pane label="配置管理" name="second">短信码登录</el-tab-pane>
                        </el-tabs>
                    .login-password
                        
                    .login-sms
                    .qrcode-login


</template>

<script>
// import E from '../../../utils'

export default {
  data() {
    return {
        request: {
            username: '',
            password: '',
        },
        activeName:'first'
    }
  },
  methods: {
      handleClick(){

      }
    // loginHandler() {
    //   if (this.request.username === '') {
    //     this.$message.warning('请输入姓名')
    //     return false
    //   }

    //   if (this.request.password === '') {
    //     this.$message.warning('请输入密码')
    //     return false
    //   }

    //   E.handleRequest(E.api().post('admin/login', this.request))
    //     .then(res => {
    //       if (res.data.code && res.data.code !== 0) {
    //         this.$message.warning(res.data.message)
    //       } else {
    //         const storage = window.localStorage
    //         storage.setItem('follow_user_info', JSON.stringify(res.data.content.data))
    //         this.$router.push({
    //           name: 'index'
    //         })
    //       }
    //     })
    // }
  }
}
</script>

<style lang="sass" scoped>
    .sign-box
        width: 1120px
        height: 600px
        display: flex
        position: fixed
        margin: -300px 0 0 -560px
        top: 50%
        left: 50%
        background: #fff
        z-index: 1000
        &-left
            flex: 0 0 520px
            display: flex 
            align-items: flex-end
            &-desc
                width: 100%
                height: 150px
                padding: 40px 0 0 40px
                color: #fff
                background: rgba(17, 56, 255, 0.7)
                h2
                    margin-bottom: 10px
                    font-size: 30px
                span 
                    font-size: 20px
        .bg-img
            position: absolute
            z-index: -1
            
        &-right
            flex: 1
            display: flex
            justify-content: center
            align-items: center
        &-form
            width: 320px
            height: 320px
        &-item
            height: 50px
            margin-bottom: 20px
            position: relative
            input
                width: 100%
                height: 100%
                padding: 0 20px 0 52px
                border-radius: 25px
                outline: none
                caret-color: #409EFF
                box-sizing: border-box
                font-size: 14px
                background: #F2F2F2
            img 
                position: absolute
                top: 15px
                left: 20px
        &-line 
            padding: 17px 30px 26px
            font-size: 12px
            color: #999
            &-forget
                float: right
        &-register
            font-size: 14px
            color: #1138FF
            line-height: 20px
            text-align: center
            display: block

    .login-btn 
        width: 100%
        height: 50px
        line-height: 50px
        margin-bottom: 20px
        background: #1138FF
        border-radius: 25px
        color: #ffffff
        text-align: center
        cursor: pointer
    /deep/ .el-checkbox__label
        font-size: 12px
</style>