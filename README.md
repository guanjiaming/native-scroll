# vue-scroll-view-mobile

> 一个基于vue2.0.js移动端的原生scroll组件, 由原来的native-scroll更名为vue-scroll-view-mobile，添加事件节流，时间间隔600ms,提升性能；优化了缓动动画效果

## 安装

npm 安装
``` 

  npm install vue-scroll-view-mobile --save

```
## 注册组件

全局注册

* -- main.js
```js
    
    import Vue from 'vue'
    import {ScrollView} from 'vue-scroll-view-mobile'
    Vue.use(ScrollView)

```
* -- Hello.vue
```vue
   <template>
     <div class="section" ref="scrollView">
      <native-scroll>
       <!-- 你的内容 -->
      </native-scroll>
     </div>
   </template>
   <style lang="scss">
    .section {
      // 必须要有一个高度
      position: fixed;
      width: 100%;
      height: 500px;
    }
   </style>

```
## 方法/事件

### scroll

* 类型`function`

* 用法:

  ```vue
  <!-- 商品详情页面  -->
  <section class="section">
   <native-scroll ref="myScroll" @scrolling="onScroll" @scroll-lower="nextPage">
    <!-- 其他内容 -->
    
    <section class="detail" ref="detail">
     <!-- 商品图文介绍  -->
    </section>
   </native-scroll>
  </section>

  methods: {
   onScroll(pos) {
    // 未做节流处理
    console.log(pos)
   },
   nextPage() {
    // this.$axios....
   },
   // 返回顶部
   goBack() {
    this.$refs.myScroll.scrollTo(0)
   }
   // 去到制定dom节点位置
    goElement() {
     this.$refs.myScroll.scrollToElement(this.$refs.detail)
    }
  }
  <style lang="scss">
    .section {
      // 必须要有一个高度
      width: 100%;
      height: 500px;
    }
   </style>
  ```



For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
