<template lang="pug">
  #e-index
    BaseLayout
        .e-container
            .plan-contain 
                .plan-union-box-top1
                    //- img.bg(src="../../../assets/images/union_top1.jpg")
                    .left 
                        .title 交易员
                        .desc 带领普通投资者一起赚钱的外汇投资达人，<br>我们称之为交易员
                        .brn 现在加入
                    
                    .right 
                        //- img(src="")
                        .title 什么是交易员
                        .desc 带领普通投资者一起赚钱的外汇投资达人，我们称之为交易员。<br>交易员是个人荣耀和实力的象征。<br>他们拥有独特的标识，他们被展示在交易员排行榜，<br> 他们还能获得官方强推的机会。<br>他们是真正行走在财富和荣耀中的主角儿。
        
                .plan-title
                    .trade-title  全民经纪人计划
                        .trade-descript National broker program
                .plan-union-box.num1
                    img(src="../../../assets/images/union_top3.jpg")
                    .desc 
                        .label-1 实现财富自由
                        .label-2 未来所有的利润都变成共享利润
                            span 抓住共享经济人模式    
                        .label-2 未来所有的金融都变成共享金融 
                            span 坐享丰厚佣金制度
                .plan-union-box.num2
                    img(src="../../../assets/images/union_top4.jpg")
                    .desc 
                        .title 分享经济时代 全民总动员
                        .txt 分享经济时代的到来，在外汇投资行业中意味着：未来没有公司，只有平台。这为所有想介入外汇投资趋势的普通人提供了“大众创业、万众创新”的机会，打破传统代理模式，增加多管道收入。
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
    @import './plan.sass'
</style>