<template lang="pug">
    .trader-pilicy
        .trader-policy-quer 原型图表
        .trader-policy-data 
            .trader-policy-data-item 
                span.title 交易标的：
                span.val 主板上市股票
            .trader-policy-data-item 
                span.title 交易时间：
                span.val 2019-07-09
            .trader-policy-data-item 
                span.title 交易频率：
                span.val 1-5次/周
            .trader-policy-data-item 
                span.title 开始时间：
                span.val 2019-07-09


</template>
<style lang="sass" scoped>
    .trader-policy
        &-quer 
            width: 270px
            margin: 0 auto 20px 
            padding: 40px 0
            text-align: center
            border-bottom: 1px solid #eee
        &-data
            &-item
                font-size: 12px
                margin-bottom: 15px
                .title 
                    display: inline-block
                    width: 100px
                    text-align: right
                    color: #999

</style>