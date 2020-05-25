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
    //     this.$axios
    // .get('/api/userNameForAll?userName='+'张俊杰4')
    //      .then(response => {
    //           console.log(response.data.data)            
    //       let project = response.data.data.filter(a=>a.teamProjectId == 2)
    //       let iteration = project[0].iterationVOs.filter(function(b){
    //           return b.iterationState=="执行中"
    //       })
    //      console.log( iteration[0])
    //       this.myArray = iteration[0].taskVOs
    //       for (let i = 0; i < this.myArray.length; i++) { 
    //           if(this.myArray[i].taskState=='准备中'){this.myArray1.push(this.myArray[i])}
    //           if(this.myArray[i].taskState=='执行中'){this.myArray2.push(this.myArray[i])}
    //           if(this.myArray[i].taskState=='测试中'){this.myArray3.push(this.myArray[i])}
    //           if(this.myArray[i].taskState=='已完成'){this.myArray4.push(this.myArray[i])}
    //         }
    //         console.log(this.myArray[0].taskEndTime.slice(0,10))
    //     //console.log( this.myArray)
    //       //console.log( this.myArray1)
    //     })
    //     .catch(function (error) {
    //     console.log(error)
    //   })
    //  },
    },
    mutations:{
        setIndex:(state,i)=>{state.projectIndex=i}
    },
    modules:{
        login,
    }
})
export default store;
