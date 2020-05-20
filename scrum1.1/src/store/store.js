import vue from 'vue'
import vuex from 'vuex'


vue.use(vuex)

export default new vuex.Store({
state:{
    count:0
},
getters:{
    showNum:state=>{
        return '数量是'+state.count
    }
},
mutations:{
    add(state,step){
        //变更状态
        state.count=state.count+step;
    }
},
actions:{
    addAsync(context){
        setTimeout(()=>{
            context.commit('add',10)
        },1000)
    }
}
})