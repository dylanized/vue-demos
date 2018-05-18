/* eslint-disable no-new */

// load Vue library
import Vue from 'vue';
import VueRx from 'vue-rx';
import { Observable } from 'rxjs';

// load App component
import App from './App';

// disable dev msg
Vue.config.productionTip = false;

// load VueRx
Vue.use(VueRx, { Observable });

// launch App
new Vue({
  el: 'main',
  components: { App },
  template: '<App />',
});
