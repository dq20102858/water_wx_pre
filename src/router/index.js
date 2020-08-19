import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/authredirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/ErrorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/ErrorPage/401'),
    hidden: true
  },
  {
    path: '/sitemanage',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/sitemanage',
        name: 'sitemanage',
        component: () => import('@/views/SiteManage/index')
      },
      {
        path: '/sitemanage/station',
        name: 'sitemanage-station',
        component: () => import('@/views/SiteManage/station')
      }, {
        path: '/sitemanage/stationdetail',
        name: 'sitemanage-stationdetail',
        component: () => import('@/views/SiteManage/stationDetail')
      }, {
        path: '/sitemanage/main',
        name: 'sitemanage-main',
        component: () => import('@/views/SiteManage/main')
      },
      {
        path: '/sitemanage/devicedetail',
        name: 'sitemanage-devicedetail',
        component: () => import('@/views/SiteManage/deviceDetail')
      }, {
        path: '/sitemanage/statisticsenergy',
        name: 'sitemanage-statisticsenergy',
        component: () => import('@/views/SiteManage/statisticsEnergy')
      }
      , {
        path: '/sitemanage/statisticswaterquality',
        name: 'sitemanage-statisticswaterquality',
        component: () => import('@/views/SiteManage/statisticsWaterQuality')
      }
    ]
  },
  {
    path: '/dispatch',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/dispatch',
        name: 'dispatch',
        component: () => import('@/views/Dispatch/index')
      },
      {
        path: '/dispatch/list',
        name: 'dispatch-list',
        component: () => import('@/views/Dispatch/list')
      }
    ]
  },
  {
    path: '/record',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/record',
        name: 'record',
        component: () => import('@/views/Record/index')
      }, {
        path: '/record/operation',
        name: 'operation',
        component: () => import('@/views/Record/operation')
      }, {
        path: '/record/sampling',
        name: 'sampling',
        component: () => import('@/views/Record/sampling')
      }
    ]
  },
  {
    path: '/attendance',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import('@/views/Attendance/index')
      }
    ]
  },
  {
    path: '/warning',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/warning',
        name: 'warning',
        component: () => import('@/views/Warning/index')
      }
    ]
  }
]
export { constantRouterMap }

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

//路由组件注册
export const asyncRouterMap = []
