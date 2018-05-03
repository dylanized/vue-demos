/* eslint-disable no-new */

// load Vue library
import Vue from 'vue';

// load components
import App from './App';
import Message from './components/Message';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

// instantiate components
Vue.component('message', Message);
Vue.component('todo-list', TodoList);
Vue.component('todo-item', TodoItem);

// disable dev msg
Vue.config.productionTip = false;

// launch App
new Vue({
  el: 'main',
  components: { App },
  template: '<App />',
});
