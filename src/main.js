import Vue from 'vue'
import App from './App.vue'
import nativeScroll from './lib/index.js'
Vue.use(nativeScroll)

new Vue({
  el: '#app',
  render: h => h(App)
})
