<template>
  <div class="native_scroll__wrapper" ref="native_scroll__wrapper">
    <div class="native_scroll__inner" ref="native_scroll__inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'native-scroll',
  mounted() {
    this.init()
  },
  methods: {
    init () {
      this.wrapper = this.$refs.native_scroll__wrapper
      let wrapper = this.$refs.native_scroll__wrapper
      let inner = this.$refs.native_scroll__inner
      let me = this
      wrapper.addEventListener('scroll', function() {
        // 监听onScroll滚动事件
        me.$emit('scroll', wrapper.scrollTop)
        // scrollEnd事件
        if (wrapper.scrollTop >= inner.offsetHeight - wrapper.offsetHeight) {
          me.$emit('scrollEnd')
        }
      })
    },
    scrollTo (endY, time = 0) {
      clearInterval(this.wrapper.timer)
      if (endY === this.wrapper.scrollTop) {
        return
      }
      if (time < 200) {
        time = 0
      }
      if (time === 0) {
        this.wrapper.scrollTo(0, endY)
        return
      }
      let beginY = this.wrapper.scrollTop
      // 需要滚动的次数 time / 20
      let times = time / 20
      // 每次需要滚动的步长 step = (endY - beginY) / (time / 20)
      let step = Math.round((endY - beginY) / (time / 20))
      this.wrapper.timer = setInterval(() => {
        times--
        this.wrapper.scrollTo(0, beginY + step)
        beginY = beginY + step
        if (times <= 0) {
          this.wrapper.scrollTo(0, endY)
          clearInterval(this.wrapper.timer)
        }
      }, 10)
    },
    scrollToElement (ele, time) {
      let scrollY = ele.offsetTop
      this.scrollTo(scrollY, time)
    }
  }
}
</script>
<style scoped>
  .native_scroll__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
  }
</style>
