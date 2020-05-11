import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../views/Home.vue')
  // },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/flower/home.vue')
  },
  {
    path: '/type',
    name: 'type',
    component: () => import('../views/flower/type.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/flower/my.vue')
  },
  {
    path: '/flower/detail/:id',
    name: 'detail',
    component: () => import('../views/flower/flowerDetail.vue')
  },
  {
    path: '/buy/car',
    name: 'buy/car',
    component: () => import('../views/flower/shoppingCar.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
