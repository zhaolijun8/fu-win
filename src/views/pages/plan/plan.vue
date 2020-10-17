<template lang="pug">
  #e-index
    BaseLayout
        .e-container
            .plan-contain 
                .plan-union-img
                    img(
                        src="../../../assets/images/union_top1.jpg"
                    )
                    router-link.plan-union-link-1(to="/")
                    router-link.plan-union-link-2(to="/")
                .plan-union-img
                    img(
                        src="../../../assets/images/union_top2.jpg"
                    )

                .plan-title
                    .trade-title  全民经纪人计划
                        .trade-descript National broker program
                .plan-union-img(
                    style="margin-bottom:40px"
                )
                    img(
                        src="../../../assets/images/union_top3.jpg"
                    )
                .plan-union-img
                    img(
                        src="../../../assets/images/union_top4.jpg"
                    )
                .plan-title
                    .trade-title  和我们合作的6大优势
                        .trade-descript 6 advantages of working with us
                .plan-list
                    .plan-list-box(
                        v-for="list in planList"
                    )
                        .plan-list-box-img
                            img(:src="list.pic")
                            //- img(src="../../../assets/images/union_1.jpg")
                        .plan-list-box-title {{list.title}}
                        .plan-list-box-desc {{list.desc}}


             
</template>
<script>
    import BaseLayout from '../../layout/base_layout.vue'

    import Image1 from '../../../assets/images/union_1.jpg'
    import Image2 from '../../../assets/images/union_2.jpg'
    import Image3 from '../../../assets/images/union_3.jpg'
    import Image4 from '../../../assets/images/union_4.jpg'
    import Image5 from '../../../assets/images/union_5.jpg'
    import Image6 from '../../../assets/images/union_6.jpg'
    
    export default {
        data() {
            return {
                planList:[
                    {
                        pic: Image1,
                        title: '会员链接，无数机会',
                        desc: '只需1个会员链接，您推荐的人可以访问全球50多家经纪商。'
                    },
                    {
                        pic: Image2,
                        title: '无与伦比的转换率',
                        desc: '模拟帐户到真实帐户的转换率高达10％'
                    },
                    {
                        pic: Image3,
                        title: '收入共享分层佣金计划',
                        desc: '基于交易量的透明模型， 从$4/ 手到$10/ 手。'
                    },
                    {
                        pic: Image4,
                        title: '专属会员团队',
                        desc: '我们的会员服务台团队将帮助您发展业务。'
                    },
                    {
                        pic: Image5,
                        title: '无限制每月支付',
                        desc: '在总体佣金支出和单个客人上都没有限制'
                    },
                    {
                        pic: Image6,
                        title: '我们帮助您培训',
                        desc: '我们工作人员会提供免费的培训课程并帮助您推荐的客户增加对社区交易的兴趣。'
                    }
                ]
            }
        },
        components: {
            BaseLayout
        },
    }
</script>
<style lang="sass" scoped>

    .plan 
        &-contain
            width: 1190px
            margin: 0 auto 20px

        &-union-img
            position: relative
        &-union-link-1,&-union-link-2
            position: absolute
            width: 133px
            height: 53px
            display: block
            cursor: pointer
        &-union-link-1
            top: 316px
            left: 110px
        &-union-link-2
            top: 873px
            left: 150px
        &-title
            text-align: center
            margin: 40px auto
        &-list
            display: flex 
            margin: 0 -10px
            flex-flow: wrap
            &-box
                margin: 0 10px 20px
                flex: 0 0 383px
                height: 400px
                background: #fff
                &-img
                    height: 270px
                    transition: all 0.1s
                    overflow: hidden
                    &:hover
                      opacity: 0.9 
                &-title
                    margin: 24px 30px 10px
                    font-size: 16px
                    color: #333
                    line-height: 22px
                    font-weight: bold
                &-desc
                    margin: 0px 30px 0
                    font-size: 14px
                    color: #666
                    line-height: 20px



</style>