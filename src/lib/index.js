import ScrollView from './vue-scroll-view.vue'

// 如果vue是全局变量,使用自动全局安装。
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-scroll-view', ScrollView)
}

export default {
  install (Vue) {
    Vue.component('vue-scroll-view', ScrollView)
  }
}
export { ScrollView }
