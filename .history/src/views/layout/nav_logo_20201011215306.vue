<template lang="pug">
  #e-logo
    router-link(
      to="/"
    )
      img.logo(
        src="../../assets/images/fengxian.svg"
        :style='logoStyle'
      )
      div.logo_msg Bole Trade 交易社区
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 32
    }
  },
  computed: {
    logoStyle() {
      return {
        height: `${this.height}px`
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#e-logo
  display: flex
  flex-direction: row
  align-items: center
.logo_msg
  color: #333
  font-size: 20px
.logo
  display: block
</style>
