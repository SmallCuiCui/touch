import Vue from 'vue'
import 'normalize.css/normalize.css' // resets css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/css/reset.scss' // 全局 css

import App from './App'
import store from './store'
import router from './router'
import vueiInfinite from 'vue-infinite-scroll'

import getPageTitle from '@/utils/get-page-title' // 获取页面标题

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueiInfinite)

var deviceWidth
setHtmlFont()
if (window.addEventListener) {
  window.addEventListener('resize', function() {
    setHtmlFont()
  }, false)
}
function setHtmlFont() {
  deviceWidth = document.documentElement.clientWidth > 1920 ? 1920 : document.documentElement.clientWidth
  document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 19.2 + 'px !important'
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

router.beforeEach(async(to, from, next) => {
  document.title = getPageTitle(to.meta.title)
  next()
})
