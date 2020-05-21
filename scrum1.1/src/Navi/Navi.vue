<template>
  <div id="navi">
    <el-container>
      <el-header>
        <!-- 功能导航 -->
        <NaviHeader></NaviHeader>
      </el-header>
      <el-main>
        <!-- 页面内容 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NaviHeader from './NaivHeader.vue'
export default {
  components:{
    NaviHeader
  }
}
</script>

<style>
#navi {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>