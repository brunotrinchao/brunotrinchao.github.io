import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
// import './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import TrendChart from "vue-trend-chart";

Vue.use(TrendChart);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import api from '@/api/api';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  created() {
    Vue.use(api, { root: this });
  }
}).$mount('#app');
