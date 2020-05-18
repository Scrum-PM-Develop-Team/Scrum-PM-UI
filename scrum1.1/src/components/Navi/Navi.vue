<template>
  <div id="app">
    <el-container>
      <el-header id="page-header">
        <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect"

        id="navi">
            <el-menu-item index="1">我的工作台</el-menu-item>

            <el-menu-item index="2">项目迭代</el-menu-item>

            <el-menu-item index="3">任务看板</el-menu-item>

            <el-menu-item index="4">统计中心</el-menu-item>

            <el-submenu index="5" id="user-center-menu">
                <template slot="title">个人中心</template>
                    <el-menu-item index="5-1">账户信息</el-menu-item>
                    <el-menu-item index="5-2">设置选项</el-menu-item>
                    <el-menu-item index="5-3" divided>退出登录</el-menu-item>
            </el-submenu>
        </el-menu>
      </el-header>
      <el-main id="page-body">
        <div>
            <router-view></router-view>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
export default {
    data(){
        return{
        usr:"",
        psw:"",
        activeIndex:"1"
        };
    },
    methods: {
        handleSelect(key, keyPath){
            this.$notify({
                title: 'It works!',
                type: 'success',
                message: key,
                duration: 5000
            },);
            switch(key){
                case '1':
                    this.$router.push('/Page1');
                    break;
                case '2':
                    this.$router.push('/Page2')
                    break;
                case '3':
                    this.$router.push('/Page3')
                    break;
                case '4':
                    this.$router.push('/Page4')
                    break;
                case '5-1':
                    this.$router.push('/Login')
                    break;
            }
        }
    }
}
</script>
<style>
#navi {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
#user-center-menu{
  float: right;
}

</style>