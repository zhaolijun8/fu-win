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
                
                .plan-union-box-top2
                    .left 
                        .box-1 
                            .title 交易员条件
                            .desc 
                                .line 申请时不能存在任何跟随复制关系
                                .line 至少有3个月收益率在3%以上
                                .line 申请时必须保持空仓状态
                                .line 申请时账户最低有6个月以上交易记录
                                .line 申请提交之后，如满足条件将在三个工作日审核通过
                        .box-2 
                            .title 交易员的限制和责任
                            .desc.r 
                                .line 交易员需阶段性空仓,“持仓中”建立的复制关系需要等到交易员空仓后开始生效跟单
                                .line 不能使用平台的跟随功能
                                .line 不能跟随交易员与明星交易员
                                .line 必须优化个人信息与个人策略(获得跟随者责任感)

                .plan-union-box-top4
                    .agent-box 
                        //- img(src="/")
                        .title 经纪人计划简介
                        .descript 作为我们的介绍经纪人，您的客户将会直接在 注册账户，在无需付出任何资本的情况下，您可以在客户每笔交易中赚取佣金，我们会管理所有客户账户及交易，包括审批新账户、跟进客户账户及提供信息科技支援。 合作伙伴计划的核心是我们先进及具弹性的交易技术，可以为不同类型及规模的合作伙伴提供合适的交易方案。为了全面了解您的业务及盈利目标以及为您设计最合适的方案，我们的业务拓展经理将会与您紧密合作。
                    .plan-title
                        .trade-title  如何操作
                            .trade-descript How to operate
                    .about-statistics
                        .about-statistics-item
                            .about-statistics-item-img
                                img(
                                    src="../../../assets/images/people.svg"
                                )
                            .about-statistics-item-info
                                .about-statistics-item-text 创建新账号
                                .about-statistics-item-num 填写您的详细信息并立即启用您的帐户。 加入我们，快速，简单，免费！
                        .about-statistics-item
                            .about-statistics-item-img
                                img(
                                src="../../../assets/images/order.svg"
                                )
                            .about-statistics-item-info
                                .about-statistics-item-text 推广交易社区
                                .about-statistics-item-num 选择有助于您推广社区复制交易的链接，广告标语和登陆页面.
                        .about-statistics-item
                            .about-statistics-item-img
                                img(
                                src="../../../assets/images/amount.svg"
                                )
                            .about-statistics-item-info
                                .about-statistics-item-text Earn Commissions
                                .about-statistics-item-num 选择有助于您推广社区复制交易的链接，广告标语和登陆页面.
                
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