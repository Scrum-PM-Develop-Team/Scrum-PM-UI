<template>
  <div>
    <div style="width:600px;height:300px;" ref="card" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'LineChart',
  mounted () {
    let myChart = echarts.init(this.$refs.card)
    let data = ['第一次迭代', '第二次迭代', '第三次迭代', '第四次迭代', '第五次迭代', '第六次迭代']
    let option = {
      backgroundColor: '#323a5e',
      title: {

      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: data,
        textStyle: {
          color: '#fff'
        }
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff', // X轴文字颜色
              fontSize: 16
            }
          }

        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value} ',
            color: '#ffffff',
            textStyle: {
              fontSize: 16
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ccc'
            }
          }
        }
      ],
      series: [
        {
          name: data[0],
          type: 'line',
          data: [9, 8, 7, 6, 4, 2, 2, undefined],
          lineStyle: {
            normal: {
              width: 8,
              color: {
                type: 'linear',

                colorStops: [{
                  offset: 0,
                  color: '#57BD9F' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#19BC8C' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 6,
              shadowOffsetY: 10
            }
          },
          itemStyle: {
            normal: {
              color: '#57BD9F',
              borderWidth: 10,
              borderColor: '#57BD9F'
            }
          },
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: data[1],
          type: 'line',
          data: [7, 8, 9, 3, 3, 2, 4, undefined],
          lineStyle: {
            normal: {
              width: 8,
              color: {
                type: 'linear',

                colorStops: [{
                  offset: 0,
                  color: '#7597EB' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#638BEE' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 6,
              shadowOffsetY: 10
            }
          },
          itemStyle: {
            normal: {
              color: '#7597EB',
              borderWidth: 10,
              borderColor: '#7597EB'
            }
          },
          markPoint: {
            data: [
              {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: data[2],
          type: 'line',
          data: [7, 6, 4, 3, 3, 1, undefined, undefined],
          lineStyle: {
            normal: {
              width: 8,
              color: {
                type: 'linear',

                colorStops: [{
                  offset: 0,
                  color: '#D88A7D' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#DC7666' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 6,
              shadowOffsetY: 10
            }
          },
          itemStyle: {
            normal: {
              color: '#D88A7D',
              borderWidth: 10,
              borderColor: '#D88A7D'
            }
          },
          markPoint: {
            data: [
              {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: data[3],
          type: 'line',
          lineStyle: {
            normal: {
              width: 8,
              color: {
                type: 'linear',

                colorStops: [{
                  offset: 0,
                  color: '#CF77A7' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#D65E9F' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 6,
              shadowOffsetY: 10
            }
          },

          data: [8, 5, 4, 3, 2, 1, undefined, undefined],
          itemStyle: {
            normal: {
              color: '#CF77A7',
              borderWidth: 10,
              borderColor: '#CF77A7'
            }
          },
          // smooth: true,
          markPoint: {
            data: [
              {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: data[4],
          type: 'line',
          lineStyle: {
            normal: {
              width: 8,
              color: {
                type: 'linear',

                colorStops: [{
                  offset: 0,
                  color: '#E2D776' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#E8DA65' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 6,
              shadowOffsetY: 10
            }
          },

          data: [6, 3, 2, 2, 0, 1, undefined, undefined],
          itemStyle: {
            normal: {
              color: '#E2D776',
              borderWidth: 10,
              borderColor: '#E2D776'
            }
          },
          // smooth: true,
          markPoint: {
            data: [
              {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: data[5],
          type: 'line',
          lineStyle: {
            normal: {
              width: 8,
              color: {
                type: 'linear',

                colorStops: [{
                  offset: 0,
                  color: '#EFB564' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#EDA848' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 6,
              shadowOffsetY: 10
            }
          },

          data: [undefined, 2, 2, 1, undefined, undefined, undefined, undefined],
          itemStyle: {
            normal: {
              color: '#EFB564',
              borderWidth: 10,
              borderColor: '#EFB564'
            }
          },
          // smooth: true,
          markPoint: {
            data: [
              {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>
<style>
</style>
