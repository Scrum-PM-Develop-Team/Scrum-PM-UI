<template>
  <div>
    <div style="width:600px;height:300px;" ref="card" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'LineChart',
  mounted () {
    axios({
      url: 'http://47.97.196.50:8886/api/teamRank',
      method: 'get'
    }).then(res => {
      let data = res.data.data
      let groups = []
      let rank = []
      let items = []
      for (let key in data) {
        // groups.push(key)
        // rank.push(data[key])
        items.push({
          key: key,
          value: data[key]
        })
      }
      items.sort((a, b) => b.value - a.value)
      for (let index in items) {
        groups.push(items[index].key)
        rank.push(items[index].value.toFixed(3))
      }
      console.log(groups)
      let myChart = echarts.init(this.$refs.card)
      let index = 0
      let colorList = ['#f36c6c', '#E2D776', '#57BD9F', '#7597EB']
      // let groups = ['第一组', '第二', '第三', '第四', '第五']
      // let rank = [0.9, 0.8, 0.45, 0.35, 0.1]
      let option = {
        backgroundColor: '#323a5e',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          show: false
        },
        grid: {
          left: 100
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'value',

          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }

        },
        yAxis: {
          type: 'category',
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisPointer: {
            label: {
              show: true,
              margin: 30
            }
          },
          data: groups,
          axisLabel: {
            margin: 100,
            fontSize: 14,
            align: 'left',
            color: '#fff',
            rich: {
              a1: {
                color: '#fff',
                backgroundColor: colorList[0],
                width: 30,
                height: 30,
                align: 'center',
                borderRadius: 2
              },
              a2: {
                color: '#fff',
                backgroundColor: colorList[1],
                width: 30,
                height: 30,
                align: 'center',
                borderRadius: 2
              },
              a3: {
                color: '#fff',
                backgroundColor: colorList[2],
                width: 30,
                height: 30,
                align: 'center',
                borderRadius: 2
              },
              b: {
                color: '#fff',
                backgroundColor: colorList[3],
                width: 30,
                height: 30,
                align: 'center',
                borderRadius: 2
              },
              c: {
                color: '#fff'
              }
            },
            formatter: params=> {
            // eslint-disable-next-line eqeqeq
              if (index == groups.length) {
                index = 0
              }
              index++
              if (index - 1 < 3 && params.length > 4) {
                return [
                  '{a' + index + '|' + index + '}' + '  ' + params.substring(0, 4) + '..'
                ].join('\n')
              } else if (index - 1 < 3) {
                return [
                  '{a' + index + '|' + index + '}' + '  ' + params
                ].join('\n')
              } else if (params.length > 4) {
                return [
                  '{b|' + index + '}' + '  ' + params.substring(0, 4) + '..'
                ].join('\n')
              } else {
                return [
                  '{b|' + index + '}' + '  ' + params
                ].join('\n')
              }
            }
          }
        },
        series: [{
          z: 2,
          name: 'value',
          type: 'bar',
          data: rank.map((item, i) => {
            let itemStyle = {
              color: i > 3 ? colorList[3] : colorList[i]
            }
            return {
              value: item,
              itemStyle: itemStyle
            }
          }),
          label: {
            show: true,
            position: 'right',
            color: '#fff',
            fontSize: 14,
            offset: [10, 0],
            formatter:params=>{
              return params.data.value*100+'%'
            }
          }
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
