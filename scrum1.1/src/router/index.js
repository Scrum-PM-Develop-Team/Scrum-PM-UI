import Vue from 'vue'
import Router from 'vue-router'
import Iteration from '../components/IterationPage/IterationPage.vue'
import TaskBoard from '../components/TaskBoardPage/TaskBoardPage.vue'
import Info from '../components/InfoPage/InfoPage.vue'
import Login from '../components/LoginPage/LoginPage.vue'
import gantt from '../components/TaskBoardPage/gantt.vue'

Vue.use(Router)
export default new Router({
    routes:[
      {
        path: '/Iteration', 
        component: Iteration
      },
      {
        path:'/TaskBoard', 
        component: TaskBoard
      },
      {
        path:'/gantt', 
        component: gantt
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

