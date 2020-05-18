<template>
  <div>
    <div style="width:600px;height:300px;" ref="card" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'BarChartTwo',
  mounted () {
    let myChart = echarts.init(this.$refs.card)
    let xAxisData = ['张俊杰4', '李季东', 'chen', '夏沁菡']
    let seriesData = [60, 70, 70, 40]
    var option = {
      toolbox: {
        show: true,
        feature: {
          saveAsImage: { }
        }
      },
      backgroundColor: '#323a5e',
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '2%',
        right: '4%',
        bottom: '14%',
        top: '16%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        color: '#59588D',
        data: xAxisData,
        axisPointer: {
          type: 'line'
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          margin: 20,
          color: '#fff',
          textStyle: {
            fontSize: 12
          }
        }
      }],
      yAxis: [{
        min: 0,
        max: 100,
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.3)'
          }
        }
      }],
      series: [{
        type: 'bar',
        data: seriesData,
        barWidth: '20px',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#41E1D4' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#10A7DB' // 100% 处的颜色
            }], false),
            barBorderRadius: [30, 30, 0, 0],
            shadowColor: 'rgba(0,255,225,1)',
            shadowBlur: 4
          }
        },
        label: {
          normal: {
            show: true,
            lineHeight: 30,
            width: 80,
            height: 30,
            backgroundColor: '#252453',
            borderRadius: 200,
            position: ['-8', '-60'],
            distance: 1,
            formatter: [
              '    {d|●}',
              ' {a|{c}%}     \n',
              '    {b|}'
            ].join(''),
            rich: {
              d: {
                color: '#3CDDCF'
              },
              a: {
                color: '#fff',
                align: 'center'
              },
              b: {
                width: 1,
                height: 30,
                borderWidth: 1,
                borderColor: '#234e6c',
                align: 'left'
              }
            }
          }
        }
      }]
    }
    myChart.setOption(option)
  }
}
</script>
<style>
</style>
