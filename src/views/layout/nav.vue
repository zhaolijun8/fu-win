<template lang="pug">
  #e-nav
    .nav-container(
      :class="{'statusClass' : status == true}"
    )
      .nav-content
        navLogo
        .nav-left
          navMenu
        .nav-right
          NavUser(
            type="index"
            @loginLayer="loginLayer"
          )
    SignBox(v-if="loginShow" @loginLayer="loginLayer") 
</template>

<script>
import navMenu from './nav_menu.vue'
import NavUser from './nav_user.vue'
import NavLogo from './nav_logo.vue'
import SignBox from './sign_box.vue'
import logo from '../../assets/images/logo_index.svg'

export default {
  data () {
    return {
      logo,
      loginShow:false,
      status:false,
    }
  },
  props: {
    transparent: {
      type: Boolean,
      default: false
    }
  },
  components: {
    NavLogo,
    navMenu,
    NavUser,
    SignBox
  },
  computed: {
    transparentClass() {
      let res = null

      if (this.transparent) {
        res = 'transparent'
      }

      return res
    }
  },
  methods:{
    loginLayer(res){
      this.loginShow = res
    },
    listenerFunction(e) {
      document.addEventListener('scroll', this.handleScroll, true);
      this.$once('hook:beforeDestroy', function() {
        document.removeEventListener("scroll");
      })
    },
    handleScroll(){
      if(window.pageYOffset > 100){
        if(this.status == false){
          this.status = true
        }
      }else{
        if(this.status == true){
          this.status = false
        }
      }
    },
  },
  mounted() {
    this.listenerFunction();
  },
}
</script>


<style lang="sass" scoped>
.nav

  &-container
    width: 100%
    position: fixed
    top: 0
    left: 0
    padding: 0 80px 0 120px
    z-index: 200
    background-color: #fff
    &.statusClass
      background-color: #1138FF
      /*background-color: transparent*/
      box-shadow: none
    &.transparent
      background-color: #010001
      /*background-color: transparent*/
      box-shadow: none

  &-content
    height: 70px
    margin: 0 auto
    display: flex
    justify-content: space-between
    align-items: center

  &-left,
  &-right
    display: flex
    align-items: center
  &-left
    flex: 1
  &-right
    flex: 0 0 190px
#e-nav

  /deep/
    .nav-container.statusClass
      .menu-item,.logo_msg 
        color: #fff
        &.active
          color: #409EFF
      .register
        color: #fff
    .nav-container.transparent

      .menu-item
        color: #fff

        &.active
          color: #409EFF

      .menu-item:hover
        background-color: rgba(245, 239, 235, .3)

      .nav-user-btn.register
        background-color: #fff
        border-color: #fff
        color: #333

        &:hover
          background-color: #ccc
          border-color: #ccc


</style>
<style lang="sass">
.trade 
  &-title
    text-align: center
    font-size: 36px
    color: #333
    line-height: 50px
    display: inline-block
    position: relative
    &:before,&:after
      position: absolute
      content: ''
      display:inline-block
      top: 20px
      width: 149px
      height: 30px
    &:before
      left: -180px
      background: url(../../assets/images/nav_left.png) no-repeat
      background-size: cover
    &:after
      right: -180px
      background: url(../../assets/images/nav_right.png) no-repeat
      background-size: cover
  &-descript
      position: relative
      font-size: 20px
      color: #666
      line-height: 28px
      letter-spacing: 3px
</style>
