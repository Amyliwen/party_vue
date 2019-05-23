import Vue from 'vue'
import Router from 'vue-router'
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
/* layout */
import Layout from '../views/layout/Layout'

const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

// // 路由跳转
// Vue.prototype.$goRoute = function (index) {
//   this.$router.push(index)
// }

export const constantRouterMap = [
  {path: '/login', component: _import('admin/login/index'), hidden: true},
  {path: '/register', name: "registerLink", component: _import('admin/register/Register'), hidden: true},
  {path: '/404', component: _import('404'), hidden: true},
  {
    path: '/',
    component: Layout,
    redirect: '/userDetial',
    name: '首页',
    hidden: true,
    children: [
      // {path: 'dashboard', component: _import('admin/dashboard/index')},
      {path: 'userDetial', component: _import('admin/user/UserDetial')}
    ]
  }
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/article',
    name: '功能模块',
    meta: {title: '功能模块', icon: 'tree'},
    children: [
      {
        path: 'article',
        name: '文章',
        component: _import('admin/article/article'),
        meta: {title: '文章', icon: 'example'},
        menu: 'article'
      },
    ]
  },
  {
    path: '/partyMember',
    component:Layout,
    redirect: '/partyMember',
    name: '党员发展',
    meta: {title: '', icon: 'tree'},
    children: [
      {
        path: '',
        name: 'member',
        component: _import('admin/partyMember/JoinParty'),
        meta: {title: '党员发展', icon: 'example'},
        menu: 'joinParty'
      },
    ]
  },
  {
    path: '/pageManage',
    component: Layout,
    redirect: '/pageManage/',
    name: '页面管理',
    meta: {title: '页面管理', icon: 'tree'},
    children: [
      {
        path: '',
        name: '首页(intex.html)',
        component: _import('admin/pageManage/PageManage'),
        meta: {title: '首页(intex.html)', icon: 'example'},
        menu: 'pageManage'
      },
      {
        path: 'pageIndex',
        name: '页面片段',
        component: _import('admin/pageManage/PageNavbar'),
        meta: {title: '页面片段', icon: 'example'},
        menu: 'pageManage'
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/',
    name: '',
    meta: {title: '用户权限', icon: 'table'},
    children: [
      {
        path: '', name: '用户列表', component: _import('admin/user/user'), meta: {title: '用户列表', icon: 'user'}, menu: 'user'
      },
      {
        path: 'role',
        name: '权限管理',
        component: _import('admin/user/role'),
        meta: {title: '权限管理', icon: 'password'},
        menu: 'role'
      },
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]
