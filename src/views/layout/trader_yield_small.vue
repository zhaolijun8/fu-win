<template lang="pug">
.trader-yield-s
    .veLine 
        .title 策略收益
        ve-line(
            width="270px"
            height="250px"
            :data="chartData",
            :colors="veLine.colors",
            :tooltip="veLine.tooltip",
            :settings="veLine.settings",
            :legend="veLine.legend",
            :yAxis="veLine.yAxis",
            :grid="veLine.grid",
            :extend="veLine.chartExtend"
            :legend-visible="false"
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
            series: {
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                areaStyle: {
                    color:['#E0EFFF']
                }
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                offset:30,
                splitLine: {
                    show: true,
                    interval: 0,
                    lineStyle:{
                        color:"#eee"
                    }
                },
            },
            yAxis: {
                type: "value",
                // position: "right",
                // data: yAxisData,
                offset:20,
                splitLine: {
                    show: true,
                    lineStyle:{
                        color:"#eee"
                    }
                },
                // axisLabel: {
                //     formatter: "{value} %",
                // },
            },
            grid: {
                show: true,
            },
            tooltip: {
                // show:false,
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
.trader-yield-s
    width: 260px
    height: 150px
    overflow: hidden
    .veLine
        margin: 20px 30px 20px 20px
        // width: 270px
        position: relative
        .title
            position: absolute
            right: -45px
            top: 22%
            color: #333
            font-size: 12px
            letter-spacing: 2px
            transform: rotate(90deg)
        .ve-line
            // margin-top: 0px
            // margin-left: 0px 
            left: -52px
            bottom: 60px
</style>