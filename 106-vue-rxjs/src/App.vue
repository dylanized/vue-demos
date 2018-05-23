<template>
  <div id='app'>
    <h1>Count: {{ count }}</h1>
  </div>
</template>

<script>
// Rx stuff
import { Observable } from 'rxjs/Observable';
import interval from 'rxjs/add/observable/interval';
import filter from 'rxjs/add/operator/filter';

// export App with components
export default {
  name: 'App',
  // define constructor hook
  created () {
    // instantiate counter stream
    const counter$ = Observable.interval(1000);
    // filter counter for even numbers, then send it to count prop
    counter$.filter(
      (value) => value % 2 == 0
    )
    .subscribe(
      (value) => this.count = value
    )
  },
  data () {
    return {
      count: 0,
    };
  },
};
</script>
