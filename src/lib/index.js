import NativeScroll from './native-scroll.vue'
import { version } from '../../package.json'

// 如果vue是全局变量,使用自动全局安装。
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('scroll-view', NativeScroll)
}

export default {
  install (Vue) {
    Vue.component('scroll-view', NativeScroll)
  },
  version
}

export {
  NativeScroll,
  version
}
