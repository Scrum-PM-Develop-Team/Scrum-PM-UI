import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../components/Page1/Page1.vue'
import Page2 from '../components/Page2/Page2.vue'
import Page3 from '../components/Page3/Page3.vue'
import Page4 from '../components/Page4/Page4.vue'
import LoginPage from '../components/LoginPage/LoginPage.vue'

Vue.use(Router)
export default new Router({
    routes:[
      {
        path: '/Page1', 
        component: Page1
      },
      {
        path: '/Page2', 
        component: Page2
      },
      {
        path:'/Page3', 
        component: Page3
      },
      {
        path:'/Page4',
        component:Page4
      },
      {
        path:'/Login',
        component:LoginPage
      }
    ]
})

