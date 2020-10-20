<template lang="pug">
  #e-menu
    .menu-container
      .menu-item(
        v-for="m in menus"
        :key="m.path"
        :to="m.path"
        :class="menuActive(m.name)"
        @click="routeTo(m.name)"
      ) {{m.text}}
        .menu-item-icon(
            v-if="m.child"
        )
            .menu-item-icon-img
            img(
                src="../../assets/images/down.svg"
                )
        .menu-item-arrow(
            v-if="m.child"
        )
            .menu-item-arrow-item(
                v-for="c in m.child"
                :key="c.path"
                :to="c.path"
                :class="menuActive(c.name)"
                @click="routeTo(c.name)"
              ) {{c.text}}
</template>

<script>
import _config from '../../base_config'
import E from "../../utils";
export default {
  data() {
    return {
      crmUrl:_config.CRM_URL,
      menus: [
          {
              text: '首页',
              path: '/index',
              name: 'index'
          },
        {
          text: '交易策略',
          path: '/trading_strategy',
          name: 'tradingStrategy'
        },
        {
          text: '交易资讯',
          path: '',
          name: '',
          child: [
              {
                  text: '财经日历',
                  path: '/message/finance_message',
                  name: 'financeMessage'
              },
              {
                  text: '闪电数据',
                  path: '/message/market_message',
                  name: 'marketMessage'
              }
          ]
        },
        {
            text: '交易学院',
            name: 'school'
        }, 
        // {
        //     text: '量化交易',
        //     name: 'quantization'
        // },
        // {
        //     text: '期货跟投',
        //     name: 'futures'
        // },
        {
            text: '量化交易',
            name: 'quantization'
        },
        {
            text: '汇币基金',
            name: 'fund'
        },
        {
            text: '期货跟投',
            name: 'follow'
        },
        {
            text: '联盟计划',
            name: 'plan'
        },
        {
          text: '关于我们',
          path: '/about',
          name: 'about'
        },
        {
          text: 'CRM',
          name: 'crm'
        }
      ],
      routeName: ''
    }
  },
  created() {
    this.routeName = this.$route.matched[0].name
    this.$router.afterEach((to, from) => {
      this.routeName = to.matched[0].name
    })
  },
  mounted() {

  },
  methods: {
    menuActive(name) {
      if (name === this.routeName) {
        return 'active'
      }
    },
    routeTo(name) {
        if(name === '' || name === '#' || name === null ||name === undefined){
            return
        }
      if(name === 'crm'){
          let newUrl = ''
          const userInfo = window.localStorage.getItem('follow_user_info')
          if (userInfo !== null) {
              let userData = JSON.parse(userInfo)
              if (userData.token !==null) {
                  newUrl = _config.CRM_URL + '/login' + '?token='+userData.token
              }else {
                  this.$message.warning('获取用户信息失败！')
                  return
              }
          }else {
              this.$message.warning('请先登录！')
              return;
          }
        window.open(newUrl)
      } else {
          this.$router.push({
              name
          })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#e-menu
  flex: 1
  justify-content: space-between

.menu

  &-container
    max-width: 1190px
    min-width: 700px
    display: flex
    margin: 0 60px
    justify-content: space-between
  &-item
    height: 70px
    line-height: 70px
    color: #333
    cursor: pointer
    font-size: 14px
    &:hover .menu-item-arrow-item
      display: block
    &:hover
      color: #1138FF
    &.active
      color: #1138FF
    &-icon
      display: inline-flex
      margin: 0 0 0 5px
    &-arrow
      border-radius: 30%
      width: 120px
      position: absolute
      margin-left: -12px
      color: #333
      &-item
        margin: 1px 0 0 0
        height: 40px
        text-align: center
        line-height: 40px
        font-size: 14px
        display: none
        background: #fff
        &:hover
          color: #1138FF

</style>



