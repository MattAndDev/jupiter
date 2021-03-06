// ============================================
// Router
// ============================================


import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dashboard
    }
  ]
})
