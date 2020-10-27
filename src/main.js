import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/swiper-bundle.min.css'
import Video from 'video.js'
import 'Video.js/dist/video-js.css'

Vue.prototype.$video=Video
 
Vue.use(VueLazyload)

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueLazyload, {
  preLoad: 1.3,
 
})