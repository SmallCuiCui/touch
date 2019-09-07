import Vue from 'vue'
import Router from 'vue-router'
// const Home = () => import('@/views/Home')
import Header from '@/components/systemHead'
import Footer from '@/components/systemfoot'
Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import('@/views/home'),
      footer: Footer
    },
    meta: { title: '首页' }
  },
  {
    path: '/scenery', // 全景漫游
    name: 'scenery',
    component: () => import('@/views/scenery'),
    meta: {
      title: '全景漫游'
    }
  },
  {
    path: '/overview', // 景区概况
    name: 'overview',
    components: {
      default: () => import('@/views/overview'),
      header: Header
    },
    meta: {
      title: '景区概况'
    }
  },
  {
    path: '/viewdetail/:typeId', // 景区概况详情
    name: 'viewdetail',
    components: {
      default: () => import('@/views/viewdetail'),
      header: Header
    },
    meta: {
      title: null
    }
  },
  {
    path: '/media', // 视频图库
    name: 'media',
    components: {
      default: () => import('@/views/media'),
      header: Header
    },
    meta: {
      title: '视频图库'
    }
  },
  {
    path: '/media/images', // 视频图库
    name: 'media',
    components: {
      default: () => import('@/views/media/season'),
      header: Header
    },
    meta: {
      title: '视频图库'
    }
  },
  {
    path: '/mediadetai/:seasonId', // 图库集
    name: 'mediadetai',
    components: {
      default: () => import('@/views/mediadetail'),
      header: Header
    },
    meta: {
      title: '图库'
    }
  },
  {
    path: '/shopping', // 游购景区
    components: {
      default: () => import('@/views/shopping'),
      header: Header
    },
    meta: {
      title: '游购景区'
    }
  },
  {
    path: '/culture', // 文化演艺
    components: {
      default: () => import('@/views/shopping/culture'),
      header: Header
    },
    meta: {
      title: '文化演艺'
    }
  },
  {
    path: '/leisure', // 休闲购物
    redirect: '/leisure/gou'
  },
  {
    path: '/leisure/:category', // 休闲购物
    components: {
      default: () => import('@/views/shopping/leisure'),
      header: Header
    },
    meta: {
      title: '休闲购物'
    }
  },
  {
    path: '/shoppingdetail/:category', // 休闲购物-详情页
    name: 'shoppingdetail',
    components: {
      default: () => import('@/views/shoppingdetail'),
      header: Header
    },
    meta: {
      title: '休闲购物'
    }
  },
  {
    path: '/map', // 景区地图
    components: {
      default: () => import('@/components/map'),
      header: Header,
      footer: Footer
    },
    meta: {
      title: '景区地图',
      code: true
    }
  },
  {
    path: '/bdmap/:category', // 景区地图
    components: {
      default: () => import('@/views/baiduMap'),
      footer: Footer
    },
    meta: {
      title: '景区地图',
      code: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
