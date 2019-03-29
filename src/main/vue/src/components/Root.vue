<template>
  <div>
    <router-view/>
    <ControlPanel/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ControlPanel from './control-panel/ControlPanel.vue';

  @Component({
    components: {
      ControlPanel,
    },
  })
  export default class Root extends Vue { }
</script>

<style lang="scss">
</style>

