import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import login from './modules/login'
Vue.use(Vuex)
axios.defaults.baseURL = 'http://47.97.196.50:8886'
const store = new Vuex.Store({
    state:{
        currentProject: '',
    },
    getters:{

    },
    mutations:{
        setCurrentProject:(state,currentProject)=>{
            state.currentProject=currentProject
        }
    },

    modules:{
        login,
    }
})
export default store;
