<template>
  <section>
    <h3 :id='id'>{{ msg }}</h3>
    <slot>This is a slot fallback message</slot>
  </section>
</template>

<script>
export default {
  name: 'Message',
  props: ['msg', 'id'],
}
</script>
