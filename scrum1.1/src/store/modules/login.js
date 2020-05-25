import {Message} from 'element-ui'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://47.97.196.50:8886'

const login={
    namespaced:true,
    state:{
        //是否登录
        loginFlag:false,
        //登录/注册信息
        userInfo:{
            userId:0,
            userName:"",
            passWord:"",
        },
        allData:''
    },
    mutations:{
        //登录
        login(state,info){
            axios({
                url: '/rest/user',
                method: 'get',
                params: {
                  userName: info.userName
                }
            }).then(Response=>{
                if(Response.data.isok==false){
                    Message({message: '用户不存在',type: 'error'},true)
                }else if(Response.data.data.userPassword==info.passWord){
                    state.userInfo.userId=Response.data.data.userId
                    state.userInfo.userName=Response.data.data.userName
                    state.userInfo.passWord=Response.data.data.userPassword
                    console.log("state.userInfo")
                    console.log(state.userInfo)
                    state.loginFlag=true
                    Message({message: '登录成功'+state.loginFlag,type: 'success'},true)
                    axios({
                        url:'http://47.97.196.50:8886/api/userNameForAll',
                        method:'get',
                        params:{
                            userName: state.userInfo.userName
                        }
                    }).then(Response=>{
                        state.allData=Response.data.data
                        console.log("getAll:Response")
                        console.log(Response)
                        console.log("state.allData[0]")
                        console.log(state.allData[0])
                    })
                }else{
                    Message({message: '密码错误',type: 'error'},true)
                }
            })
        },
        //注册
        register(state,info){
            axios({
                url: '/rest/user',
                method: 'post',
                data: {
                  userName: info.userName,
                  userPassword:info.passWord
                }
            }).then(Response=>{
                console.log("Response:\t")
                console.log(Response)
                if(Response.data.isok==false){
                    Message({message: '用户已存在',type: 'error'},true)
                }else{
                    state.userInfo=info
                    state.loginFlag=true
                    Message({message: '注册成功',type: 'seccess'},true)
                    console.log("注册成功")
                }
            })
        },
        //注销
        logout(state){
            axios({
                url: 'http://47.97.196.50:8886/rest/user',
                method: 'delete',
                data: {
                  userId:state.userId
                }
            }).then(Response=>{
                
            }).catch(err=>{
                Message({message:"错误"+err,type:'error'},true)
            })
        },
        //更新
        updateUserInfo(state,i){

        },
        //获取用户所有信息
        getAll(state){
            axios({
                url:'http://47.97.196.50:8886/api/userNameForAll',
                method:'get',
                params:{
                    userName: state.userInfo.userName
                }
            }).then(Response=>{
                state.allData=Response.data
                console.log("Response")
                console.log(Response)
            })
        }
    },
    actions:{
        login:(context,info)=>context.commit('login',info),
        register:(context,info)=>context.commit('register',info),
        logout:(context,info)=>context.commit('logout',info),
        updateUserInfo:(context,info)=>context.commit('updateUserInfo',info),
        getAll:(context)=>context.commit('getAll'),
    },
    getters:{

    }
}
export default login;