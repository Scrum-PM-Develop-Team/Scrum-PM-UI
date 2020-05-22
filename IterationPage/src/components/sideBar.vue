<template>
<el-container >
  <!--左边主菜单栏目-->
    <el-menu>
    <el-menu-item index="1">
      <i class="el-icon-location"></i>
      <span slot="title">所有任务</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">所有迭代</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">已完成任务</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">已完成迭代</span>
    </el-menu-item>
    </el-menu>
</el-container>
</template>

<style>
 .el-main {
    background-color: #F5F5F5;
 }
</style>

<script>
export default {
  name: 'MainMenu'
}
</script>
