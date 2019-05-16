import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)


Vue.use(Router)

export const constantRouterMap = [
  {path: '/index', component: _import('viewsPublicity/index'), hidden: true},
  {path: '/404', component: _import('404'), hidden: true},
]
export default new Router({
  // mode: 'history',
  routes: constantRouterMap
})
