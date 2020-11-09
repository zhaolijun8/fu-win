<template lang="pug">
  #e-logo
    router-link(
      to="/"
    )
      img.logo(
        :src="getLogoUrl"
        :style='logoStyle'
      )
      div.logo_msg {{projName}} 欢迎您
</template>

<script>
import _config from "../../base_config";
export default {
  props: {
    height: {
      type: Number,
      default: 32
    }
  },
    data() {
        return {
            logoUrl: '/upload/image/logo/fengxian.svg',
            baseUrl: _config.BASE_URL,
            projName: ''
        }
    },
  computed: {
    logoStyle() {
      return {
        height: `${this.height}px`
      }
    },
      getLogoUrl(){
          const storage = window.localStorage
          const projInfo = storage.getItem('projInfo')
          if (projInfo !== undefined && projInfo !== null) {
              this.projInfo = JSON.parse(projInfo)
              this.projName = this.projInfo.projName
              this.logoUrl = this.projInfo.projLogo
          }
          return this.baseUrl+this.logoUrl
      }
  }
}
</script>

<style lang="sass" scoped>
#e-logo
  flex: 0 0 250px
  a
    display: flex
    flex-direction: row
    align-items: center
.logo_msg
  color: #333
  font-size: 20px
  margin-left: 20px
  font-weight: 500
.logo
  display: block
</style>
