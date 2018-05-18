<template>
  <div id='app'>
    <img src='./assets/logo.png'>
    <message msg='This message passed via attribute' id='foo'>This message passed via slot</message>
    <todo-list :todos='todos'></todo-list>
  </div>
</template>

<script>
// export App with components
export default {
  name: 'App',
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
