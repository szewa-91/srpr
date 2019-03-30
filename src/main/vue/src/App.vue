<script lang="ts">
  import Root from '@/components/Root.vue';

  export default {
    name: 'app',
    components: {Root},
  };
</script>

<template>
  <div id="app">
    <Root/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
