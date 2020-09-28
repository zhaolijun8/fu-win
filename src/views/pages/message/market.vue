<template lang="pug">
  #e-index
    BaseLayout
        .index
          <el-tabs v-model="activeName" @tab-click="handleClick" class="index-tabs" type="card">
            <el-tab-pane label="财经日历" name="first">
            .index-iframe
            <iframe frameborder="0" width="1200" height="900" scrolling="yes" src="https://rili-d.jin10.com/open.php?fontSize=14px&theme=primary"></iframe>
            </el-tab-pane>
            <el-tab-pane label="闪电数据" name="second">
            .index-iframe
            <iframe frameborder="0" width="1200" height="900" scrolling="yes" src="https://www.jin10.com/example/jin10.com.html?fontSize=14px&theme=white"></iframe>
            </el-tab-pane>
          </el-tabs>
</template>

<script>
    import BaseLayout from '../../layout/base_layout.vue'

    export default {
        components: {
            BaseLayout
        },
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }

        // .index-top.e-flex
        // .index-top-left 闪电数据
</script>

<style lang="sass" scoped>
    .index
        flex-wrap: wrap
        width: 1200px
        margin: 4% auto
        &-tabs
            background-color: #fff
            padding: 10px 0 0 20px
            margin: 20px 0 auto
        &-label
            font-weight: bold
            font-size: 16px
        &-top
            justify-content: space-between
            height: 50px
            padding: 10px 0 0 20px
            border-bottom: 1px solid #e6e6e6
            font-size: 16px
            color: #409EFF
            margin: 80px 0 auto
            background-color: #fff

            &-right
                height: 50px
                line-height: 50px
                cursor: pointer

            &-left
                border-bottom: 2px solid #409EFF
                font-weight: bold

            &-right
                color: #409EFF
        &-iframe
</style>


