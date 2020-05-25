<template>
  <div style="background:url('..\..\assets\loginBackground.webp.jpg')">
    <el-col style="padding:30px; width: 400px; position: absolute; top: 20%; left:30%">
      <el-card style="height:300px;">
          <div slot="header" class="clearfix" style="height: 5px; display: table;content: ‘’;">
            <b>欢迎登录</b>
          </div>
          <el-input placeholder="请输入用户名" v-model="info.userName"></el-input>
          <el-input placeholder="请输入密码" v-model="info.passWord" show-password style="margin: 20px 0;"></el-input>
          <div style="margin: 20px 0;">
            <el-button type="primary" round @click="loginHandler()">登录</el-button>
            <el-button round @click="registerHandler()">注册</el-button>
            <el-button round @click="skinHandler" style="margin=10px">先逛逛</el-button>
          </div>
      </el-card>
      <div>
      </div>
    </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState,mapMutations,mapActions } from 'Vuex'
export default {
  data(){
    return{
      info:{
        userName:"张俊杰4",
        passWord:"ffffffffff",
      },
    }
  },
  methods:{
    ...mapState('login',['userInfo']),  
    ...mapMutations('login',['login','register','logout','updateUserInfo','getAll']),
    ...mapActions(),
    loginHandler(){
      this.login(this.info)
      // this.getAll()
    },
    registerHandler(){
      this.register(this.info)
    },
    skinHandler(){
      this.login("test","password")
    }
  }
};  
</script>
