<template>
  <div id="bottom">
    <div v-if="playingSound" id="display">
      <button v-on:click="onClick" v-bind:class="[playing ? {pause} : {play}]"></button>
      <p>{{playingSound.name}}</p>
    </div>
    <div v-else>
      <p>No sound chosen :-(</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action, Getter, State } from 'vuex-class';
  import { Sound } from '@/store/categories/types';

  @Component
  export default class ControlPanel extends Vue {
    @Getter('sound', { namespace: 'playing' })
    private playingSound!: Sound;
    @Action('pause', { namespace: 'playing' })
    private pause: any;
    @Action('play', { namespace: 'playing' })
    private play: any;
    @State('playing', { namespace: 'playing'}) private playing!: boolean;

    private onClick() {
      if (this.playing) {
        this.pause();
      } else {
        this.play();
      }
    }
  }
</script>

<style lang="scss">
#bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0px 0px 10px 0px #888888;
  background: white;
}
#display {
  display: flex;
  justify-content: center;
}
.play {
  width: 74px;
  height: 74px;
  border-style: solid;
  box-sizing: border-box;
  border-width: 37px 0px 37px 74px;
  border-color: transparent transparent transparent #202020;
}
.pause {
  width: 74px;
  height: 74px;
  border-width: 0px 0px 0px 37px;
  border-color: #202020;
  border-style: double;
}
</style>
