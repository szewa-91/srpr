<template>
  <div>
    <div v-if="playingFile">
      <p>Currently playing: {{playingFile}}</p>
      <button v-on:click="onPauseClick">Stop!</button>
    </div>
    <div v-else>
      <p>Nothing is playing :-(</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action, Getter } from 'vuex-class';

  @Component
  export default class ControlPanel extends Vue {
    @Getter('file', { namespace: 'playing' })
    private playingFile!: string;
    @Action('pause', { namespace: 'playing' })
    private pause: any;

    private onPauseClick() {
      this.pause();
    }
  }
</script>

<style lang="scss">
</style>
