<template>
  <div class="scroll_view__wrapper" ref="scroll_view__wrapper">
    <div class="scroll_view__inner" ref="scroll_view__inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'vue-scroll-view',
    data() {
      return {
        timer: null,
        flag: true,
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        let wrapper = this.$refs.scroll_view__wrapper;
        let inner = this.$refs.scroll_view__inner;
        let me = this;
        wrapper.addEventListener('scroll', function () {

          if (me.timer) return false; // 如果在定时器上，说明还没执行完，不往下执行

          me.timer = setTimeout(() => {
            clearTimeout(me.timer); // 清空上次的定时器
            me.timer = null;   // 销毁变量

            // 监听onScroll滚动事件
            me.$emit('scrolling', wrapper.scrollTop);

            // scrollEnd事件
            if (wrapper.scrollTop >= inner.offsetHeight - wrapper.offsetHeight) {
              me.$emit('scroll-lower')
            }
          }, 600);
        });
        /*
        wrapper.onscroll = throttle(function () {
          // 监听onScroll滚动事件
          me.$emit('scrolling', wrapper.scrollTop);

          // scrollEnd事件
          if (wrapper.scrollTop >= inner.offsetHeight - wrapper.offsetHeight) {
            me.$emit('scroll-lower')
          }
        }, 500)
        */
      },

      scrollTo(target) {
        this.$refs.scroll_view__wrapper.timer && clearInterval(this.$refs.scroll_view__wrapper.timer);
        this.$refs.scroll_view__wrapper.timer = setInterval(() => {
          let current = parseInt(this.$refs.scroll_view__wrapper.scrollTop);
          let step = (target - current) / 4;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          this.$refs.scroll_view__wrapper.scrollTo(0, current + step);
          if (current == target) {
            this.$refs.scroll_view__wrapper.scrollTo(0, target);
            clearInterval(this.$refs.scroll_view__wrapper.timer)
          }
        }, 30)
      },

      scrollToElement(ele) {
        if (typeof ele !== 'object' || ele === null) return;
        let scrollY = ele.offsetTop;
        this.scrollTo(scrollY)
      }
    }
  }
</script>
<style scoped>
  .scroll_view__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
  }
</style>
