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
      url: 'http://47.97.196.50:8886/api/taskAssigned',
      method: 'get',
      params: {
        teamProjectId: 2
      }
    }).then(res => {
      let data = res.data.data
      let echartData = []
      for (let key in data) {
        echartData.push({
          name: key,
          value: data[key]
        })
      }

      let myChart = echarts.init(this.$refs.card)
      // let echartData = [{
      //   name: '待认领',
      //   value: '10'
      // },
      // {
      //   name: '张俊杰',
      //   value: '20'
      // },
      // {
      //   name: '张俊杰2',
      //   value: '30'
      // },
      // {
      //   name: '张俊杰3',
      //   value: '40'
      // }
      // ]
      let total = echartData.reduce((a, b) => {
        return a + b.value * 1
      }, 0)
      var colorList = ['#81ecec', '#74b9ff', '#a29bfe', '#55efc4', '#f1bb4c', 'rgba(250,250,250,0.5)']
      let option = {
        tooltip: {
          trigger: 'item'
        },
        backgroundColor: '#323a5e',
        title: {
          text: total,
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: 30,
            fontWeight: 'normal',
            color: ['#ffff']
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          bottom: 150,
          left: 0,
          right: '10%'
        },
        legend: {
          show: false,
          orient: 'vertical',
          top: 'middle',
          right: '5%',
          textStyle: {
            color: '#f2f2f2',
            fontSize: 25

          },
          icon: 'roundRect'
        },
        series: [
        // 主要展示层的
          {
            radius: ['25%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 15,
                length2: 120,
                lineStyle: {
                  color: '#d3d3d3'
                },
                align: 'right'
              },
              color: '#000',
              emphasis: {
                show: true
              }
            },
            label: {
              normal: {
                formatter: params => {
                  return (
                    '{icon|●}{name|' + params.name + '\n' + '\n' +
                  '}{icon|●}{value|' + params.percent + '%' + '}'
                  )
                },
                padding: [0, -100, 25, -100],
                rich: {
                  icon: {
                    fontSize: 16
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4]
                  },
                  value: {
                    fontSize: 18,
                    fontWeight: 'bold'
                  }
                }
              }
            },
            data: echartData
          },
          // 边框的设置
          {
            radius: ['47%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: false,
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: 'rgba(250,250,250,0.5)'
              }
            },
            data: [{
              value: 1
            }]
          }
        ]
      }
      myChart.setOption(option)
    })
  }
}
</script>
<style>
</style>
