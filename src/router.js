import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Forms from './views/Forms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/notes',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'forms',
      component: Forms
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
