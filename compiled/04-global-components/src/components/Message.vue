<template>
  <section>
    <h3 :id='id'>{{ msg }}</h3>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Message',
  props: ['msg', 'id'],
}
</script>
