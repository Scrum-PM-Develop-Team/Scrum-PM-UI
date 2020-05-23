<template>
  <div id="navi" onload>
    <el-container>
      <el-header>
        <!-- 功能导航 -->
        <NaviHeader></NaviHeader>
      </el-header>
      <el-main>
        <!-- 页面内容 -->
        <LoginPage v-if="!loginFlag"></LoginPage>
        <router-view v-else></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {mapState} from 'Vuex'
import LoginPage from '../components/LoginPage/LoginPage'
import NaviHeader from './NaivHeader.vue'
export default {
  computed:{
    ...mapState(['loginFlag'])
  },
  components:{
    NaviHeader,LoginPage
  },
  methods:{
  }
}
</script>

<style>
#navi {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
el-header{
  position:fixed
}
</style>