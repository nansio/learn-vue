import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index1'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/reusability',
    component: Layout,
    redirect: '/reusability/mixins',
    name: 'Reusability',
    meta: { title: '可复用性', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'mixins',
        name: 'Mixins',
        component: () => import('@/views/reusability/MixinDemo'),
        meta: { title: '混入', icon: 'table' }
      },
      {
        path: 'custom-directives',
        name: 'CustomDirectives',
        component: () => import('@/views/reusability/Directives/directives'),
        meta: { title: '自定义指令', icon: 'tree' }
      },
      {
        path: 'render-function_jsx',
        name: 'RenderFunction_JSX',
        component: () => import('@/views/reusability/renderFunction'),
        meta: { title: '渲染函数 & JSX', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/plugins',
    component: Layout,
    redirect: '/plugins/videojs',
    name: 'Plugins',
    meta: {
      title: '常用插件组件',
      icon: 'nested'
    },
    children: [
      {
        path: 'videojs',
        component: () => import('@/views/plugins/videojs/VideoPlayerDemo.vue'),
        name: 'VideoJS-DEMO',
        meta: { title: 'VideoJS-Demo' }
      }
    ]
  },
  {
    path: '/animations',
    component: Layout,
    redirect: '/animations/typing-text',
    name: 'animations',
    meta: {
      title: '动画',
      icon: 'el-icon-magic-stick'
    },
    children: [
      {
        path: 'typing-text',
        component: () => import('@/views/animations/typing'),
        name: 'typing-text',
        meta: { title: '打字动画' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
