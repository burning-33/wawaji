// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MuseUI from 'muse-ui'//引入muse-ui
import 'muse-ui/dist/muse-ui.css'//引入muse-ui样式
import VueAwesomeSwiper from 'vue-awesome-swiper'  //轮播插件
import 'swiper/dist/css/swiper.css'   //轮播插件导入css样式
axios.defaults.baseURL ='http://172.16.10.22:8888';

Vue.use(MuseUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueAwesomeSwiper);//注册VueAwesomeSwiper

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});


