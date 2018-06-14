<template>
  <section>
    <h3>Here is a nested component</h3>
    <ol>
      <todo-item
        v-for='todo in todos'
        :todo='todo'
        :key='todo.id'
      ></todo-item>
    </ol>
  </section>
</template>

<script>
// export TodoList
export default {
  name: 'TodoList',
  props: ['todos'],
};
</script>
