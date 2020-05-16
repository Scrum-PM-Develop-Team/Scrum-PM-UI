// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Navi from './components/Navi/Navi.vue'
import router from './router'
//在以下两行代码引入element-ui组件库
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import store from './vuex/index';
//加载ElementUI
Vue.use(ElementUI)
//阻止产生生产提示
Vue.config.productionTip = false
//下面一行代码不是注释，是跳过eslint代码校验
/* eslint-disable no-new */
new Vue({
  //Vue实例挂载在index.html的名为app对象上
  el: '#app',
  render:h=>h(Navi),
  store,
  router
  /*
  components: { App },
  template: '<App/>'
  */
})
