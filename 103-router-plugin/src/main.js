// load deps
import Vue from 'vue';
import VueRouter from 'vue-router';

// disable dev msg
Vue.config.productionTip = false;

// load router middleware
Vue.use(VueRouter);

// define pages
const Home = { template: '<p>Home page</p>' };
const About = { template: '<p>About page</p>' };
const NotFound = { template: '<p>Page not found</p>' };

// instantiate the router and define routes
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '*', component: NotFound },
  ],
});

// load App component
import App from './App';

// launch Vue
new Vue({
  router,
  components: { App },
  template: '<App />',
}).$mount('main');
