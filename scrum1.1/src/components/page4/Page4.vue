<template>
  <div id="app">
    <el-card class="card1">
      <div>任务分配图</div>
      <PieChart class="card2" />
    </el-card>
    <el-card class="card1">
      <div>任务按时间停留图</div>
      <BarChart class="card2" />
    </el-card>
    <el-card class="card1">
      <div>任务完成率图</div>
      <Bar-chart-two class="card2" />
    </el-card>
    <el-card class="card1">
      <div>迭代与剩余任务图</div>
      <LineChart class="card2" />
    </el-card>
    <el-card class="card1">
      <div>卡片名称</div>
      <OverviewReport class="card2" />
    </el-card>
  </div>
</template>

<script>
import PieChart from './PieChart'
import BarChart from './BarChart'
import BarChartTwo from './BarChartTwo'
import LineChart from './LineChart'
import OverviewReport from './OverviewReport'
export default {
  name: 'Page4',
  components: {
    PieChart,
    BarChart,
    BarChartTwo,
    LineChart,
    OverviewReport
  }
}
</script>

<style>
body {
  background: #e2e1e0;
  text-align: center;
}

.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 600px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card1 {
  background: #fff;
  border-radius: 20px;
  display: inline-block;
  height: 350px;
  margin: 1rem;
  position: relative;
  width: 600px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card2 {
  padding: 0px;
  margin: 0px;
  border-radius: 2px;
  height: 300px;
  position: relative;
  width: 600px;
  left: -20px;
  top: 10px;
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
