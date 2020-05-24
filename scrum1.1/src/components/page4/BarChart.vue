<template>
  <div>
    <div style="width:600px;height:300px;" ref="card" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'PieChart',
  mounted () {
    axios({
      url: 'http://47.97.196.50:8886/api/taskStay',
      method: 'get',
      params: {
        teamProjectId: 2
      }
    }).then(res => {
    let myChart = echarts.init(this.$refs.card)
    let max=Math.max(...[Math.max(...res.data.data[0]),Math.max(...res.data.data[1]),Math.max(...res.data.data[2])])
    let data03 = res.data.data[0]
    let data39 = res.data.data[1]
    let data9_ = res.data.data[2]
    console.log(res.data.data)
    var option = {
      backgroundColor: '#323a5e',
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '2%',
        right: '4%',
        bottom: '14%',
        top: '16%',
        containLabel: true
      },
      legend: {
        data: ['0-3', '3-9', '9--'],
        right: 10,
        top: 12,
        textStyle: {
          color: '#fff'
        },
        itemWidth: 12,
        itemHeight: 10
        // itemGap: 35
      },
      xAxis: {
        type: 'category',
        data: ['准备中', '开发中', '测试中', '已完成'],
        axisLine: {
          lineStyle: {
            color: 'white'

          }
        },
        axisLabel: {
          // interval: 0,
          // rotate: 40,
          textStyle: {
            fontFamily: 'Microsoft YaHei'
          }
        }
      },

      yAxis: {
        type: 'value',
        max: max.toString(),
        axisLine: {
          show: false,
          lineStyle: {
            color: 'white'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.3)'
          }
        },
        axisLabel: {}
      },
      series: [{
        name: '0-3',
        type: 'bar',
        barWidth: '15%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#fccb05'
            }, {
              offset: 1,
              color: '#f5804d'
            }]),
            barBorderRadius: 12
          }
        },
        data: data03
      },
      {
        name: '3-9',
        type: 'bar',
        barWidth: '15%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#8bd46e'
            }, {
              offset: 1,
              color: '#09bcb7'
            }]),
            barBorderRadius: 11
          }

        },
        data: data39
      },
      {
        name: '9--',
        type: 'bar',
        barWidth: '15%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#248ff7'
            }, {
              offset: 1,
              color: '#6851f1'
            }]),
            barBorderRadius: 11
          }
        },
        data: data9_
      }]
    }
    myChart.setOption(option)
  })}
}
</script>
<style>
</style>
