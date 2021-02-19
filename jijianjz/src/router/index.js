import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import AboutUs from '../views/aboutus.vue'
import Result from '../views/result.vue'
import Ybal from '../views/ybal.vue'
import Ybnr from '../views/ybnr.vue'
import Zxnr from '../views/zxnr.vue'
import Zxzs from '../views/zxzs.vue'
import Header from '../components/header.vue'
import CoBrands from '../components/co-brands.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  //头部
  {
    path:'/about',
    name:'AboutUs',
    component:AboutUs
  },

  {
    path:'/result',
    name:'Result',
    component:Result
  },
  {
    path:'/ybal',
    name:'Ybal',
    component:Ybal
  },
  {
    path:'/ybnr',
    name:'Ybnr',
    component:Ybnr
  },
  {
    path:'/zxnr',
    name:'Zxnr',
    component:Zxnr
  },
  {
    path:'/zxzs',
    name:'Zxzs',
    component:Zxzs
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
