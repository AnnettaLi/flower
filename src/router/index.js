import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/flower/home',
    name: 'home',
    component: () => import('../views/flower/home.vue')
  },
  {
    path: '/flower/type',
    name: 'type',
    component: () => import('../views/flower/type.vue')
  },
  {
    path: '/flower/my',
    name: 'my',
    component: () => import('../views/flower/my.vue')
  },
  {
    path: '/flower/detail/:id',
    name: 'detail',
    component: () => import('../views/flower/flowerDetail.vue')
  },
  {
    path: '/flower/buy/car',
    name: 'buy/car',
    component: () => import('../views/flower/shoppingCar.vue')
  },
  //  父子组件
  {
    path: '/father',
    name: 'father',
    component: () => import('../views/partent/father.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
