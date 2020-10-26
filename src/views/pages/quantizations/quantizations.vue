<template lang="pug">
  #e-quantization
    BaseLayout
        .e-container 
            .quant-page
                .quant-top 
                    span 把策略上架到商城，与更多量化爱好者一起交流学习！
                    .quant-top-file 
                        el-upload( class="quant-uploader"
                            action="uploadUrl"
                            :show-file-list="false")
                            <el-button type="primary">上传策略</el-button>
                        

                .quant-modular
                    .quant-trade
                        .trade-title 策略精选
                            .trade-descript(@click="JumpTo" 
                            style="cursor:pointer") 常见问题 >
                    .quant-filter 累计收益   
                        div.quant-filter-item(
                            v-for="(list,index) in filterList"
                            :class="{active: active == index}"
                            @click="filterActive(index)"
                        ) 
                            .quant-filter-item-label {{list.text}}
                            .quant-filter-item-sort()
                                <i class="el-icon-caret-top" :class="{'sort': quantSort == 1}"></i>
                                <i class="el-icon-caret-bottom" :class="{'sort': quantSort == 0}"></i>
                    
                    .quant-canvas
                        .quant-canvas-list
                            .quant-canvas-title 
                                span 稳健，回测少
                                .author 策略作者：
                                    img.avatar(:src="avatar")
                                    .name rexouyarexouya
                            .quant-canvas-desc
                                .quant-canvas-left
                                    .quant-canvas-legend
                                        .legend-box
                                            span.legend-symbol
                                            span.legend-text 策略收益                                       
                                        .legend-box
                                            span.legend-symbol
                                            span.legend-text 泸深300
                                    .quant-canvas-img
                                        //- router-link()
                                        img(src="https://image.joinquant.com/backtest_1b31d87a7ca4775a171fcffdb59a69af.png?date=3c6d5daf2bb9702fdfd3d91cc7c8dac1")
                                .quant-canvas-right
                                    .quant-canvas-income 
                                        label 累计收益
                                        .balue 111.13%
                                    .quant-canvas-attrs
                                        .quant-canvas-attrs-a 
                                            label 最近一个月
                                            .balue 93.13%
                                        .quant-canvas-attrs-a 
                                            label 最近三个月
                                            .balue 93.13%
                                        .quant-canvas-attrs-a 
                                            label 最近六个月
                                            .balue 93.13%
                                        .quant-canvas-attrs-a 
                                            label 适合资金
                                            .balue 93.13%

                                    .quant-canvas-total 3999元/月
                                        span （剩余数量：349）
                                    .quant-canvas-btns
                                        .btn1 立即订阅
                                        .btn2 免费咨询




                    
</template>
<script>
import BaseLayout from '../../layout/base_layout.vue'
import avatar from '../../../assets/images/avatar-default.svg'
export default {
    data() {
        return {
            avatar,
            uploadUrl:'', //上传的地址
            active:1,
            quantSort:0,
            filterList:[
                {
                    val:0,
                    text:'近1个月',
                },
                {
                    val:1,
                    text:'近3个月',
                },{
                    val:2,
                    text:'近6个月',
                },{
                    val:3,
                    text:'适合资金',
                },{
                    val:4,
                    text:'订阅价格',
                },{
                    val:5,
                    text:'剩余数量',
                }
            ]
        }
    },
    components: {
        BaseLayout
    },
    methods: {
        JumpTo(){
            this.$router.push('/'); //跳转到xx页
        },
        filterActive(eq){
            this.active = eq
            this.quantSort = !this.quantSort;
        }
    }
}
</script>
<style lang="sass" scoped>
    @import './quantizations'
</style>