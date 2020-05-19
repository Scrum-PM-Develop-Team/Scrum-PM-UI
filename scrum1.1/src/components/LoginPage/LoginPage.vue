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
          <div id="username-input" class="demo-input-suffix">
            <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
          </div>
          <div id="password-input">
            <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
          </div>
          <div align="center">
            <el-button type="primary" round @click="submitForm(form)">登录</el-button>
            <el-button round>先逛逛{{form.username}},{{form.password}}</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        // rules: {
        //   username: [
        //     {required: true, message: "用户名不能为空", trigger: 'blur'},
        //     {min: 3, max: 10, message: "用户名3-5位", trigger: 'blur'}
        //   ],
        //   password: [
        //     {required: true, message: "密码不能为空", trigger: 'blur'},
        //     {min: 3, max: 10, message: "密码3-5位", trigger: 'blur'}
        //   ]
        // }
      };
    },
    methods: {
      submitForm(formName) {
        this.$notify({
          title: 'It works!',
          type: 'success',
          duration: 5000,
          message:this.form.username
          }
        );
      }
    }
  };  
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