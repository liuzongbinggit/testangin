import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'layout'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/login.vue')
  },
  {
    path: '/layout',
    // name: 'Layout',
    component: () => import(/* webpackChunkName: "layout" */ '../views/Layout/layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "layout" */ '../views/Home/home.vue')
      },
      {
        path: '/a',
        name: 'A',
        component: () => import(/* webpackChunkName: "layout" */ '../views/A/a.vue')
      },
      {
        path: '/b',
        name: 'B',
        component: () => import(/* webpackChunkName: "layout" */ '../views/B/b.vue')
      },
      {
        path: '/c',
        name: 'C',
        component: () => import(/* webpackChunkName: "layout" */ '../views/C/c.vue')
      },
      {
        path: '/d',
        name: 'D',
        component: () => import(/* webpackChunkName: "layout" */ '../views/D/d.vue')
      },
      {
        path: '/e',
        name: 'E',
        component: () => import(/* webpackChunkName: "layout" */ '../views/E/e.vue')
      },
      {
        path: '/f',
        name: 'F',
        component: () => import(/* webpackChunkName: "layout" */ '../views/F/f.vue')
      }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
