import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/HomePage/HomePage.vue'
import Iteration from '../components/IterationPage/IterationPage.vue'
import TaskBoard from '../components/TaskBoardPage/TaskBoardPage.vue'
import Info from '../components/InfoPage/InfoPage.vue'
import Login from '../components/LoginPage/LoginPage.vue'

//Vue.use(Router)
export default new Router({
    routes:[
      {
        path: '/Home', 
        component: Home
      },
      {
        path: '/Iteration', 
        component: Iteration
      },
      {
        path:'/TaskBoard', 
        component: TaskBoard
      },
      {
        path:'/Info',
        component:Info
      },
      {
        path:'/Login',
        component:Login
      }
    ]
})

