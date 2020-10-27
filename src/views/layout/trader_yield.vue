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
  data() {
    return {
      filterCheckId: 0,
      chartData: {
        columns: ["策略收益", "收益", "中证500"],
        rows: [
          { 策略收益: "2020-10-01", 收益: "4.99", 中证500: "4.99" },
          { 策略收益: "2020-10-02", 收益: "13.86", 中证500: "4.99" },
          { 策略收益: "2020-10-03", 收益: "8", 中证500: "4.99" },
          { 策略收益: "2020-10-04", 收益: "7", 中证500: "4.99" },
          { 策略收益: "2020-10-05", 收益: "12", 中证500: "10" },
          { 策略收益: "2020-10-06", 收益: "80", 中证500: "4.99" },
          { 策略收益: "2020-10-07", 收益: "40", 中证500: "4.99" },
        ],
      },
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
                splitLine: {
                    show: true,
                    interval: 0,
                },
            },
            yAxis: {
                type: "value",
                position: "right",
                data: yAxisData,
                splitLine: {
                    show: true,
                },
                axisLabel: {
                    formatter: "{value} %",
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
        top: 40%
        color: #333
        font-size: 12px
        letter-spacing: 2px
        transform: rotate(90deg)
// .trader-yield
</style>