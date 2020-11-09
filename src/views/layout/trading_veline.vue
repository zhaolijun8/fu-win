<template lang="pug">
.veLine-box-1 
    ve-line(
        :data="chartData",
        :colors="veLine.colors",
        :tooltip="veLine.tooltip",
        :settings="veLine.settings",
        :legend="veLine.legend",
        :yAxis="veLine.yAxis",
        :grid="veLine.grid",
        :extend="veLine.chartExtend"
        :legend-visible="false"
        width="170px"
        height="220px"
    )
</template>
<script>
// let yAxisData = ["-20", "0", "10", "20", "30", "40", "50", "0", "70", "80"];
        
export default {
    props:['chartData'],
  data() {
    return {
      filterCheckId: 0,
      veLine: {
        colors: ["#6481ff"],
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
                show:false,
                // color: '#c00',
                offset:20,
                boundaryGap: false,
                splitLine: {
                    lineStyle:{
                        show:true,
                        color:"#eee"
                    }
                },

            },
            yAxis: {
                show:false,
                type: "value",
                align: 'left',
                offset:20,
                // data: yAxisData,
                splitLine: {
                    lineStyle:{
                        show:true,
                        color:"#eee"
                    }
                },
            },
            tooltip: {
                show:false,
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
.veLine-box-1
    // border: 1px solid red
    // margin: 20px 30px 20px 20px
    width: 128px
    // width: 400px
    height: 83px
    position: relative
    overflow: hidden
    .title
        position: absolute
        right: -45px
        top: 40%
        color: #333
        font-size: 12px
        letter-spacing: 2px
        transform: rotate(90deg)
    .ve-line
        // margin-top: 0px
        // margin-left: 0px 
        left: -32px
        bottom: 60px
        // display: flex
        // justify-content: center
        // align-items: center
// .trader-yield
</style>