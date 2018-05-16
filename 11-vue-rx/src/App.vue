<template>
  <div id='app'>
    <h1>Count: {{ count$ }}</h1>
  </div>
</template>

<script>
import { Observable } from 'rxjs/Observable';
import interval from 'rxjs/add/observable/interval';
import filter from 'rxjs/add/operator/filter';

// export App with components
export default {
  name: 'App',
  subscriptions () {
    return {
      count$: Observable.interval(1000),
    }
  },
};
</script>
