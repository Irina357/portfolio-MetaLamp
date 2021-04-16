import VueRouter from 'vue-router'
import Vue from 'vue'
import ColorsTyle from '../pages/ColorsTyle'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Colors',
    component: ColorsTyle
  },
  {
    path: '/Colors',
    name: 'Colors',
    component: ColorsTyle
  },
  {
    path: '/Form',
    name: 'Form',
    component: () => import('../pages/FormElements')
  },
  {
    path: '/Axios',
    name: 'Axios',
    component: () => import('../pages/Axios')
  },
  {
    path: '/HeaderFooter',
    name: 'HeaderFooter',
    component: () => import('../pages/HeaderFooter')
  },
  {
    path: '/Cards',
    name: 'Cards',
    component: () => import('../pages/Cards')
  }
]

const router = new VueRouter({
  routes
})

export default router
