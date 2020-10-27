<template lang="pug">
  #e-quantization
    BaseLayout
        .e-container 
            .fund-moduler
                .fund-moduler-desc
                    .fund-moduler-desc-top
                        .fund-moduler-desc-name 盈汇一号基金介绍
                            span 盈汇一号私募基金是一只货币基金产品，成立于2018年08月08日
                        .fund-moduler-desc-btn 立即订阅
                    .fund-moduler-desc-list
                        .fund-moduler-desc-list-item
                            .tt 累计收益
                            .true-data.txt(v-if="notcert") XXXX
                            .not-cert.txt(v-else="!notcert") 认证可见
                        .fund-moduler-desc-list-item
                            .tt 复权累计净值
                            .true-data.txt(v-if="notcert") XXXX
                            .not-cert.txt(v-else="!notcert") 认证可见
                        .fund-moduler-desc-list-item
                            .tt Alpha
                            .true-data.txt(v-if="notcert") XXXX
                            .not-cert.txt(v-else="!notcert") 认证可见
                        .fund-moduler-desc-list-item
                            .tt 近一年超额收益最大回撤
                            .true-data.txt(v-if="notcert") XXXX
                            .true-data.txt(v-if="!notcert") 认证可见
                    .fund-moduler-btm
                        .fund-moduler-btm-item 累计净值：
                            .txt(v-if="notcert") XXX
                            .txt(v-if="!notcert") 认证可见
                        .fund-moduler-btm-item 成立以来年化：
                            .txt(v-if="notcert") XXX
                            .txt(v-if="!notcert") 认证可见
                        .fund-moduler-btm-item 最大撤回：
                            .txt(v-if="notcert") XXX
                            .txt(v-if="!notcert") 认证可见
                        .fund-moduler-btm-item 投资顾问：
                            .txt(v-if="notcert") XXX
                            .txt(v-if="!notcert") 认证可见
                .fund-moduler-ous
                    .fund-moduler-ous-tab
                        span.fund-moduler-ous-item(
                            v-for="t in tabs"
                            :class="tabActive(t.value)"
                            @click="selectTabHandler(t.value)"
                        ) {{t.label}}
                        span.date 数据截止至{{year}}年{{month}}月 
                    .fund-moduler-ous-context(v-show="tabSelected == 0")
                    .fund-moduler-ous-context(v-show="tabSelected == 1")
                    .fund-moduler-ous-context(v-show="tabSelected == 2")
                    .fund-moduler-ous-context(v-show="tabSelected == 3")
                    .fund-moduler-ous-notcert(v-if="!notcert")

                        img(src="../../../assets/images/auth_icon.png")
                        span 认证可见
                        .fund-moduler-ous-btm 联系我们，咨询更多基金详情
                            router-link(to="/" class="to") 去认证
                Trader
                .trader-policy
                    .trader-policy-l
                        .trander-tt 
                            span.title 策略信息
                        traderPolicy
                    .trader-policy-r
                        .trander-tt 
                            span.title 模拟交易收益率
                        .filter-list 累计收益
                            .label(
                                v-for="(i, index) in filterLabel",
                                @click="filterHandler(i)",
                                :class="{ checked: filterCheckId == index }"
                            ) {{ i.value }}
                        traderYield


                
</template>
<script>
    import BaseLayout from '../../layout/base_layout.vue'
    import Trader from '../../layout/trader.vue'
    import traderPolicy from '../../layout/trader_policy.vue'
    import traderYield from '../../layout/trader_yield.vue'
    import avatar from '../../../assets/images/avatar-default.svg'
    const tabs = [
        {
            value: 0,
            label: '基金预览'
        },
        {
            value: 1,
            label: '历史业绩'
        },
        {
            value: 2,
            label: '产品信息'
        },
        {
            value: 3,
            label: '购买信息'
        }
    ]
    export default {
        data() {
            return {
                year: '',
                month: '',
                tabSelected: 0,
                notcert:false,//未认证
                tabs,
                filterCheckId:0,
                filterLabel: [
                    {
                    id: 0,
                    value: "1个星期",
                    },
                    {
                    id: 1,
                    value: "1个月",
                    },
                    {
                    id: 2,
                    value: "6个月",
                    },
                    {
                    id: 3,
                    value: "1年",
                    },
                    {
                    id: 4,
                    value: "全部",
                    },
                ],
            }
        },
        components: {
        BaseLayout,
        Trader,
        traderPolicy,
        traderYield
        },
        methods: {
            tabActive(val) {
                if (val === this.tabSelected) {
                    return 'active'
                }
                },
                selectTabHandler(val) {
                this.tabSelected = val
            }, 
            filterHandler(item) {
                this.filterCheckId = item.id;
            },
        },
        created() {
            const now = new Date()
            this.month = now.getMonth() + 1
            this.year = now.getFullYear()
        }
    }
</script>
<style lang="sass" scoped>
    @import './fund'
</style>