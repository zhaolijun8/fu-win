<template lang="pug">
    #e-login
        .sign-box-layer(
            @click="layerNone"
        )
        .sign-box
            .sign-box-left
                img.bg-img(src="../../assets/images/login_bg.jpg")
                div.sign-box-left-desc 
                    h2 Bole Trade 交易社区
                    span 复制跟单，免费跟随技术牛人做教育   
            .sign-box-right
                .login-arrow
                .sign-box-form(v-show="qrcodeStatus")
                    .login-switch-tab
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="密码登录" name="first">
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
                                //- router-link.sign-box-register(
                                //-     to="/user/registe"
                                //- ) 立即注册 >
                            </el-tab-pane>
                            <el-tab-pane label="短信码登录" name="second">
                                .sign-box-item
                                    img(src="../../assets/images/login_name.svg")
                                    input(
                                        type="text"
                                        placeholder='手机号'
                                        v-model="request.iphone"
                                    )
                                .sign-box-item
                                    img(src="../../assets/images/login_pwd.svg")
                                    input(
                                        type="text"
                                        placeholder='请输入验证码'
                                        v-model="request.smscode"
                                    )
                                    span.sign-box-item-smscode(@click="getsmsCode") 获取验证码
                                .sign-box-line
                                    //- span.sign-box-line-forget 忘记密码？
                                    //- <el-checkbox v-model="checked">记住交易账号</el-checkbox>
                                .login-btn(
                                    @click="loginHandler"
                                ) 登录
                            </el-tab-pane>
                        </el-tabs>

                        router-link.sign-box-register(
                            to="/user/registe"
                        ) 立即注册 >
                .qrcode-box(
                    @click="loginMode"
                )                      
                    .qrcode-box-view
                        template(v-if="qrcodeStatus == 1")
                            i.qrcode-box-icon-ewm.icon-qrcode
                                .qrcode-box-poptips
                                    .qrcode-box-poptips-arrow
                                        em
                                        span
                                        .qrcode-poptip-content  扫码登录
                        template(v-if="qrcodeStatus == 0")
                            i.el-icon-s-platform.icon-qrcode
                    //- .qrcode-box-view(v-show="!qrcodeStatus")
                    //-     i.el-icon-s-platform.icon-qrcode
                .qrcode-main(v-show="!qrcodeStatus")
                    .qrcode-main-img
                        img(
                            src="../../assets/images/ewm.png"
                            width="200px"
                            height="200px"
                        )
                    .qrcode-main-pwd(
                        @click="qrcodeStatus = 1"
                    ) 密码登录 >



</template>

<script>
import E from '../../utils'
export default {
  data() {
    return {
        request: {
            username: '',
            password: '',
            iphone: '',
            smscode: '',

        },
        activeName:'first',
        checked:false,
        qrcodeStatus:true
    }
  },
  methods: {
    handleClick(){

    },
    layerNone(){
        this.$emit('loginLayer',false);
        this.qrcodeStatus = true
    },
    loginMode(){
        console.log(123);
        this.qrcodeStatus = !this.qrcodeStatus
    },
    loginHandler() {
      if (this.request.username === '') {
        this.$message.warning('请输入姓名')
        return false
      }

      if (this.request.password === '') {
        this.$message.warning('请输入密码')
        return false
      }

      E.handleRequest(E.api().post('admin/login', this.request))
        .then(res => {
          if (res.data.code && res.data.code !== 0) {
            this.$message.warning(res.data.message)
          } else {
            const storage = window.localStorage
            storage.setItem('follow_user_info', JSON.stringify(res.data.content.data))
            this.$emit('loginLayer',false);
            if(this.$route.path == '/') this.$router.go()
            this.$router.push({
              name: 'index'
            })
          }
        })
    },
    getsmsCode(){
        //
    }
  }
}
</script>

<style lang="sass" scoped>
    .icon-qrcode
        right: 0
        top: 0
        color: #999
        font-size: 45px
        &::after
           content: ''
           position: absolute
           right: 17px
           top: 17px
           width: 80px
           height: 80px
           background: #fff 
           transform: rotate(45deg)
    .qrcode-main
        &-img
            display: flex
            justify-content: center
            align-items: center
            box-shadow: 0 0 8px #c6c4ce
        &-pwd
            cursor: pointer
            text-align: center
            margin: 20px auto 0
            color: #1138FF
            font-size: 14px

    .qrcode-box
        position: absolute
        top: 0
        right: 0
        cursor: pointer
        &-view
            // width: 80px
            // height: 80px   
            position: absolute
            top: 10px
            right: 10px 
        &-icon-ewm    
            width: 57px
            height: 57px
            display: inline-block
            background: url(../../assets/images/ewm.png) 0 0/cover no-repeat
            &::after
                content: ''
                position: absolute
                right: 14px
                top: 16px
        &-poptips
            position: absolute
            top: 2px
            right: 60px
            z-index: 10
            font-style: normal
            // background: #fff
            // width: 73px
            &-arrow
                // position: absolute
                z-index: 10
                top: 8px
                width: 75px
                height: 30px
                line-height: 30px
                right: 0
                *zoom: 1
                background: #fff
                border: 1px solid #f2f2f2
                // padding: 0 12px
                text-align: center
                color: #333
                font-size: 12px
                em,span 
                    position: absolute
                    overflow: hidden
                    background: #fff
                span
                    width: 8px
                    height: 8px
                    transform: rotate(45deg)
                    right: -4px
                    top: 9px
                    border-style: solid 
                    border-color: #f2f2f2 #f2f2f2 #fff #fff 
                    border-width: 1px
        &-icon-ewm

            
    .sign-box
        &-layer
            background: rgba(0,0,0,0.8)
            position: fixed
            width: 100%
            height: 100%
            left: 0
            top: 0
            z-index: 1000
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
            position: relative
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
            &-smscode
                font-size: 12px
                color: #1138FF
                position: absolute
                top: 17px
                right: 18px
        &-line 
            height: 20px
            margin: 17px 30px 26px
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
    /deep/
        .el-checkbox__label
            font-size: 12px
        .el-tabs__item
            font-size: 16px
            color: #999
        .el-tabs__item.is-active
            color: #333
        .el-tabs__active-bar
            background: #1138FF
            
</style>