
<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <!--左边主菜单栏目-->
  <el-aside width="300px" >
    <MainMenu/>
  </el-aside>
  <el-main>
     <TaskBoardMain class="card"/>
  </el-main>
</el-container>
</template>

<style>
</style>

<script>
import TaskBoardMain from './components/TaskBoardMain'
import MainMenu from './components/MainMenu'
export default {
  name: 'App',
  components: {TaskBoardMain, MainMenu},
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
