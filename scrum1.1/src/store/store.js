import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        //是否登录
        loginFlag:false,
        //登录/注册信息
        userInfo:{
            userName:"",
            passWord:"",
        },
    },
    mutations:{
        login(state,form){
            console.log("成功进入login方法体")
            //存储用户状态，向后端发送登录请求，标记已登录
            this.$axios.get('/rest/user?userName='+userName)
            .then(Response=>{
                console.log(Response.data)
                if(Response.data.isok){
                    
                }
                else if(Response.data.data.userPassword!==passWord){
                    //密码不正确，弹窗，清空
                }else{
                    //登录成功，弹窗，加载
                }
            })
            .catch(err=>{
                //显示错误
            })
            // state.loginFlag=true;
        },
        register(state,form){
            axios({
                url: 'http://47.97.196.50:8886/api/userNameForAll',
                method: 'get',
                params: {
                  userName: '张俊杰4'
                }
              }).then(Response => {
                var temdate = []
                Response.data.data.forEach(element => {
                  this.teamProjectId = element.teamProjectId
                  console.log(this.teamProjectId)
                  this.teamProjectName = element.teamProjectName
                  console.log(this.teamProjectName)
                  this.userVOs = element.userVOs
                  console.log(this.userVOs)
                  this.iterationVOs = element.iterationVOs
                  console.log(this.iterationVOs)
                  element.iterationVOs.forEach(iteration => {
                    iteration.taskVOs.forEach(task => {
                      temdate.push(task)
                    })
                  })
                  this.taskVOs = temdate
                  console.log(this.taskVOs)
                })
              })
            },
            // console.log("成功进入login方法体")
            // this.$axios
            // .post('/rest/user',
            // {
            //     userName:userName,
            //     userPassword:passWord
            // }).then(Response=>{
            //     if(Response.data.isok){
            //          //创建成功，发起登录
            //     }
            //     else{
            //        //用户已存在，弹窗提示
            //     }
            // })
            // .catch(err=>{
            //     //显示错误
            // })
            //},
        logout(state,i){
            //修改状态，后端删除用户
        },
        updateUserInfo(state,i){

        },
    },
    actions:{
        login(context,form){
            context.commit('login')
        },
        register(context,form){
            context.commit('register')
        }

    },
    getter:{

    }
})
export default store;
