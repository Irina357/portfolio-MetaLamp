import VueRouter from 'vue-router'
import Layout from '../pages/Layout'
import ColorsTyle from '../pages/ColorsTyle'
import FormElements from '../pages/FormElements'
import Cards from '../pages/Cards'
import HeaderFooter from '../pages/HeaderFooter'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/Colors',
          name: 'Colors',
          component: ColorsTyle
        },
        {
          path: '/Form',
          name: 'Form',
          component: FormElements
        },
        {
          path: '/Cards',
          name: 'Cards',
          component: Cards
        },
        {
          path: '/HeaderFooter',
          name: 'HeaderFooter',
          component: HeaderFooter
        }
      ]
    }
  ]
})
