import Vue from 'vue'
import App from './App.vue'
import {ScrollView} from './lib/index.js'

Vue.use(ScrollView);

new Vue({
  el: '#app',
  render: h => h(App)
});
