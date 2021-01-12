import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Catergory from '../views/Category.vue'
import Meny from '../views/Meny.vue'
import OrderStatus from '../views/OrderStatus.vue'
import Profile from '../views/Profile.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/catergory',
    name: 'catergory',
    component: Catergory
  },
  {
    path: '/meny',
    name: 'meny',
    component: Meny
  },
  {
    path: '/orderStatus',
    name: 'orderStatus',
    component: OrderStatus
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
