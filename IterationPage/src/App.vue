
<template>
<el-container style="height: 600px; border: 1px solid #eee">
  <el-aside width="150px" >
   <el-container >
  <!--左边主菜单栏目-->
    <el-menu>
    <el-menu-item @click="isTask">
      <i class="el-icon-location"></i>
      <span slot="title">所有任务</span>
    </el-menu-item>
    <el-menu-item @click="isIteration">
      <i class="el-icon-menu"></i>
      <span slot="title">所有迭代</span>
    </el-menu-item>
    </el-menu>
</el-container>
  </el-aside>
  <el-main>
     <Task v-if="taskFlag" class="card"/>
     <Iteration v-else class="card"/>
  </el-main>
  <el-button @click="change">改变
  </el-button>
  </el-container>
</template>

<style>
</style>

<script>
import Task from './components/Task'
import Iteration from './components/Iteration'
export default {
  name: 'App',
  components: {Task, Iteration},
  data () {
    return {
      taskFlag: true
    }
  },
  methods: {
    change () {
      this.taskFlag = !this.taskFlag
    },
    isTask () {
      this.taskFlag = true
    },
    isIteration () {
      this.taskFlag = false
    }
  }
}
</script>
