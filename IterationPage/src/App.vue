
<template>
<el-container style="height: 600px; border: 1px solid #eee">
  <!--左边主菜单栏目-->
  <el-aside width="150px" >
    <sideBar class="card"/>
  </el-aside>
  <el-main>
     <Task class="card"/>
  </el-main>
  </el-container>
</template>

<style>
</style>

<script>
import Task from './components/Task'
import sideBar from './components/sideBar'
export default {
  name: 'IterationPage',
  components: {Task, sideBar},
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
