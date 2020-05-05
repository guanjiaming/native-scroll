<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="scroll_box">
      <scroll-view
        @scroll="onScroll"
      >
        <h2>Essential Links</h2>
        <ul>
          <li>Core Docs</li>
          <li>Forum</li>
          <li>Community Chat</li>
          <li>Twitter</li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li>vue-router</li>
          <li>vuex</li>
          <li>vue-loader</li>
          <li>awesome-vue</li>
        </ul>
      </scroll-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    method: {
      onScroll() {

      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
