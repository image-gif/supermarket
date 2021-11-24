import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

// 安装toast 插件
Vue.use(toast)
// 安装 VueLazyLoad 插件
Vue.use(VueLazyLoad)

// 移动端延迟300ms解决方案
Fastclick.attach(document.body)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
