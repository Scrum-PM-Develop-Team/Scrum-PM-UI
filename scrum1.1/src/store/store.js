import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import login from './modules/login'
Vue.use(Vuex)
axios.defaults.baseURL = 'http://47.97.196.50:8886'
const store = new Vuex.Store({
    state:{
        projectIndex:0,
    },

    getters:{
        currentProject:(state)=>{
            //通过index和allData,来获取到当前项目的所有信息
            return state.login.allData[state.projectIndex]
        }
    },

    mutations:{
        setProjectIndex:(state,index)=>{
            state.projectIndex=index
            console.log("state.projectIndex")
            console.log(state.projectIndex)
        },
    },

    modules:{
        login,
    }
})
export default store;
