<template lang="pug">
.trader-yield
    .veLine 
        .title 策略收益
        ve-line(
        :data="chartData",
        :colors="veLine.colors",
        :tooltip="veLine.tooltip",
        :settings="veLine.settings",
        :legend="veLine.legend",
        :yAxis="veLine.yAxis",
        :grid="veLine.grid",
        :extend="veLine.chartExtend"
    )
</template>
<script>
let yAxisData = ["-20", "0", "10", "20", "30", "40", "50", "0", "70", "80"];
export default {
    props:['chartData'],
  data() {
    return {
      filterCheckId: 0,
      veLine: {
        colors: ["#B4C8FF", "#FB3F41"],
        chartExtend: {
          //配置项
            legend: {
                data: ["策略收益", "收益", "中证500"],
                right: 0,
                color: "#1138FF",
                barBorderRadius: 1,
                itemWidth: 13,
                itemHeight: 13,
                icon: "rect",
                borderColor: "#1138FF",
                textStyle: {
                    color: "#333",
                },
            },
            series: {
                type: 'line',
                areaStyle: {
                    color:['#E0EFFF']
                }
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                // offset:20,
                splitLine: {
                    show: true,
                    interval: 0,
                    lineStyle:{
                        color:"#eee"
                    }
                },
                axisLabel:{
                    rotate: 0
                }
            },
            yAxis: {
                type: "value",
                position: "right",
                data: yAxisData,
                splitLine: {
                    show: true,
                    lineStyle:{
                        color:"#eee"
                    }
                },
                axisLabel: {
                    formatter: "{value} %",
                    interval: 0,
                },
            },
            grid: {
                show: true,
            },
            settings: {
                label: {
                    show: false,
                },
                hoverAnimation: false,
                radius: ["50", "55"],
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                },
            },
        },
      },
    };
  },
  methods: {
  },
};
</script>
<style lang="sass" scoped>
.veLine
    margin: 20px 30px 20px 20px
    width: 740px
    position: relative
    .title
        position: absolute
        right: -45px
        top: 45%
        color: #333
        font-size: 12px
        letter-spacing: 2px
        transform: rotate(90deg)
// .trader-yield
</style>