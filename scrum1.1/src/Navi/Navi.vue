<template>
  <div id="navi">
    <el-container>
      <el-header>
        <!-- 功能导航 -->
        <NaviHeader></NaviHeader>
      </el-header>
      <el-main>
        <el-button @click="handleAdd">jiayi</el-button>
        <!-- 页面内容 -->
        {{$store.state.count}}
        <p></p>
        {{count}}
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import NaviHeader from './NaivHeader.vue'
export default {
    data(){
        return{
        
        };
    },
    computed:{
      ...mapState(['count'])
    },
    components:{
      NaviHeader
    },
    methods:{
      ...mapMutations(['add']),
      ...mapActions(['addAsync']),
      handleAdd(){
        this.addAsync()
      }
    }
}
</script>

<style>
#navi {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>