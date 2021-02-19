import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引用mint-ui
import MintUI from 'mint-ui'
//导入mint-ui样式表
import 'mint-ui/lib/style.min.css'
//引用axios插件
import Axios from 'axios'
//设置axios的基础URL
Axios.defaults.baseURL='http://127.0.0.1:3000'
//把axios插件添加到Vue的原型对象上
Vue.prototype.axios=Axios
//通用头部
import Header from './components/header.vue'
Vue.component('my-header',Header)
//合作品牌
import CoBrands from './components/co-brands.vue'
Vue.component('co-brands',CoBrands)
//版本号声明
import Version from './components/version-num.vue'
Vue.component('version',Version)


//Vue挂载mint-ui,把mint-ui注册为插件
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
