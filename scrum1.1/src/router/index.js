import Vue from 'vue'
import Router from 'vue-router'
import MyProject from '../components/ProjectPage/MyProjectPage'
import Iteration from '../components/IterationPage/IterationPage'
import Task from '../components/IterationPage/TaskPage'
import TaskBoard from '../components/TaskBoardPage/TaskBoardPage'
import Gantt from '../components/TaskBoardPage/gantt.vue'
import Info from '../components/InfoPage/InfoPage'
import Login from '../components/LoginPage/LoginPage'

Vue.use(Router)
export default new Router({
    routes:[
      {
        path:'/MyProject',
        component:MyProject
      },
      {
        path: '/Iteration', 
        component: Iteration
      },
      {
        path:'/Task',
        component:Task
      },
      {
        path:'/TaskBoard', 
        component: TaskBoard
      },
      {
        path:'/Gantt', 
        component: Gantt
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

