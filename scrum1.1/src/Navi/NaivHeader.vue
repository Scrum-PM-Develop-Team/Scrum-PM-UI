<template>
    <div>
        <el-menu 
        :default-active="activeIndex" 
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
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                activeIndex:"1"
            }
        },
        methods:{
            handleSelect(key, keyPath){
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: key,
                    duration: 1000
                });
                switch(key){
                    case '1':
                        this.$router.push('/Home');
                        break;
                    case '2':
                        this.$router.push('/Iteration')
                        break;
                    case '3':
                        this.$router.push('/TaskBoard')
                        break;
                    case '4':
                        this.$router.push('/Info')
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
#user-center-menu{
  position:absolute;
  left:90%
}
</style>