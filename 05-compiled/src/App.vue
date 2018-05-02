<template>
  <div id='app'>
    <img src='./assets/logo.png'>
    <message msg='This message passed via attribute' id='foo'>This message passed via slot</message>
    <todo-list :todos='todos'></todo-list>
  </div>
</template>

<script>
// import components
import Message from './components/Message';
import TodoList from './components/TodoList';
// export App with components
export default {
  name: 'App',
  components: {
    Message,
    TodoList,
  },
  data() {
    return {
        todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
    };
  },
};
</script>
