# native-scroll

> 一个基于vue2.0.js移动端的原生scroll组件（pc端也能用，会很丑陋）

## 安装

npm 安装
``` 

  npm install native-scroll --save

```
## 注册组件

全局注册

```-- main.js
    
    import Vue from 'vue'
    import NativeScroll from 'native-scroll'
    Vue.use(NativeScroll)

```

```-- Hello.vue
   
   <template>
     <div class="scroll-view" ref="scrollView">
		<native-scroll>
       		<!-- 你的内容 -->
     	</native-scroll>
     </div>
   </template>
   <style lang="scss">
   	.scroll-view {
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
  <native-scroll @scroll="onScroll">
    <!-- 你的内容 -->
   </native-scroll>

   methods: {
   	onScroll(pos) {
   		console.log(pos)
   	}
   }
  ```



For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
