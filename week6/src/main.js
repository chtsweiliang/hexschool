import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetAlert from 'vue-sweetalert';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
// vue-loading 元件
Vue.component('Loading', Loading);
// 使用 vue 藍圖
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetAlert);

Vue.filter('thousands', (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `NT$ ${parts.join('.')}`;
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
