import NativeScroll from './native-scroll.vue'

// 如果vue是全局变量,使用自动全局安装。
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('native-scroll', NativeScroll)
}

export default {
  install (Vue) {
    Vue.component('native-scroll', NativeScroll)
  },
  version
}

export NativeScroll