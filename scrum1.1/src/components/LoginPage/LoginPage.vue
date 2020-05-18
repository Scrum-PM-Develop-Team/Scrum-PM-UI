<template>
    <div id="loginPage">
          <el-row id="bland-row">
          </el-row>
          <el-col :span="12" :offset="6">
            <el-card id="login-card">
              <div slot="header" class="clearfix">
                <b>欢迎登录</b>
                <el-button style="float: right; padding: 3px 0" type="text">注册</el-button>
              </div>
              <div id="card-body">

                <div id="card-context">
                  <div id="username-input" class="demo-input-suffix">
                    <el-input
                    placeholder="请输入用户名"
                    v-model="usr">
                    </el-input>
                  </div>
                  <div id="password-input">
                    <el-input placeholder="请输入密码" 
                    v-model="psw" 
                    show-password>
                    </el-input>
                  </div>
                  <div align="center">
                    <el-button type="primary" round>登录</el-button>
                    <el-button round>先逛逛</el-button>
                  </div>
                  
                </div>
              </div>
              
            </el-card>
          </el-col>
        </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                usr:"",
                psw:"",
            }
        },

        method:{
            handleSelect(key, keyPath){
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
                }
            }
        }
    }
</script>

<style>

.el-col{
    padding:30px;
}
#login-card{
    height:400px;
}
#card-header{
  height: 20px;
}
#card-context{
  height:300px;
}
#usr-logo{
  padding:30px;
}
#username-input,#password-input{
  padding:15px;
}
</style>