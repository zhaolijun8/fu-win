<template lang="pug">
    .trader-pilicy
        .trader-policy-quer 
            .trader-policy-quer-desc
                .ption 50%
                .tt 当前仓位
            ve-ring.ve-ring(               
                :data="ringList"
                :colors="veRing.colors"
                :tooltip-visible="false"
                :settings="veRing.settings"
                :legend="veRing.legend"
                :extend="veRing.chartExtend"
                width="120px"
                height="120px")
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
<script>
export default {
    data(){
        return{
            ringList: {
                columns: ["当前仓位", "仓位总量"],
                rows: [
                    { '当前仓位': '1', '仓位总量': 1000 },
                    { '当前仓位': '2', '仓位总量': 2000 },
                ]
            },
            veRing: {
                colors: ["#1138FF", "#EEE"],
                chartExtend: {
                    //配置项
                    legend: {show:false},
                    series: {
                        center: ["50%", "50%"],
                    },
                },
                settings: {
                label: {
                    show: false,
                },
                hoverAnimation: false,
                radius: ["50", "55"],
                },
                grid: {
                left: 0,
                bottom: 0,
                },
            },
        }
    }
}
</script>
<style lang="sass" scoped>
    .trader-policy
        &-quer 
            position: relative
            width: 270px
            margin: 0 auto 20px 
            padding: 0px 0
            text-align: center
            border-bottom: 1px solid #eee
            &-desc
                position: absolute;
                left: 0
                right: 0
                top: 30px
            .ption 
                font-size: 28px;
                font-weight: 500;
                color: #1138FF;
                line-height: 40px;
            .tt 
                font-size: 12px;
                color: #999999;
                line-height: 17px;
        &-data
            &-item
                font-size: 12px
                margin-bottom: 15px
                .title 
                    display: inline-block
                    width: 100px
                    text-align: right
                    color: #999
    .ve-ring 
        margin: 40px auto

</style>