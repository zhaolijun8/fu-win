<template lang="pug">
  #nav-user
    .nav-user-container(
      v-if="userInfo === null"
    )
      router-link.nav-user-btn.register(to="/user/registe") 注册
      //- router-link.nav-user-btn.login(to="/user/login") 登录
      div.nav-user-btn.login(@click="loginLayer") 登录
    .nav-user-container(
      v-else
    )
      .nav-user-content
        .nav-user-avatar
          img(
            :src="avatar"
          )
        .nav-user-name {{userInfo.refName}}
        .nav-user-menu
          .nav-user-menu-item(@click="logout()") 退出
</template>

<script>
import E from '../../utils'
import avatar from '../../assets/images/avatar-default.svg'

export default {
  data() {
    return {
      avatar,
      userInfo: null
    }
  },
  created() {
    const storage = window.localStorage
    const userInfo = storage.getItem('follow_user_info')

    if (userInfo !== null) {
      this.userInfo = JSON.parse(userInfo)
    }
  },
  computed: {

  },
  watch:{
  },
  methods: {
    loginLayer(){
      this.$emit('loginLayer',true);
    },
    logout() {
        let userInfo = window.localStorage.getItem('follow_user_info')
        if(userInfo==null) {
            this.$message.warning('用户未登录！')
            return
        }
        let params = JSON.parse(userInfo)
        E.handleRequest(E.api().post('admin/logout', params))
            .then(res => {
                if (res.data.code && res.data.code !== 0) {
                    this.$message.warning(res.data.message)
                } else {
                    window.localStorage.removeItem('follow_user_info')
                    window.localStorage.removeItem('projKey')
                    this.$router.go(0)
                }
            })
    }
  }
}
</script>

<style lang="sass" scoped>
.nav-user

  &-container
    display: flex
    align-items: center
    height: 100%
  
  &-btn:nth-child(1)
    margin-right: 10px
  &-btn
    display: block
    height: 36px
    line-height: 36px
    padding: 0 30px
    border-radius: 18px
    cursor: pointer
    
    &.register
      color: #1138FF
      border: 1px solid #A5B2F4
      box-sizing: border-box

      &:hover
        background-color: #f05102
        border: 1px solid #f05102
        color: #fff

    &.login
      border: 1px solid #1138FF
      background-color: #1138FF
      color: #fff

      &:hover
        background-color: #f05102
        border: 1px solid #f05102

  &-content
    display: flex
    align-items: center
    cursor: pointer
    position: relative
    height: 60px

    &:hover .nav-user-menu
      display: block

  &-avatar
    width: 40px
    height: 40px
    border-radius: 50%
    overflow: hidden
    margin-right: 12px

    img
      width: 100%
      height: 100%

  &-name
      color: #fff

  &-menu
    position: absolute
    top: 100%
    right: -10px
    background-color: #282828
    display: none
    border-top: 1px solid #e9e9e9

    &-item
      min-width: 100px
      height: 50px
      align-content: center
      color: #e9e9e9
      line-height: 50px
      padding: 0 20px
      border-bottom: 1px solid #e9e9e9
      cursor: pointer

      &:hover
          background-color: #696969

      &:last-child
        border-bottom: none
</style>
