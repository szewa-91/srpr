<template>
  <div class="sound-content" v-on:click="onClick">
    <img v-if="sound.icon" :src="require(`@/assets/images/${sound.icon}`)" class="bg-img">
    <h1>{{ sound.name }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Sound } from '@/store/categories/types';
  import { Action } from "vuex-class";

  @Component
  export default class SoundTile extends Vue {
    @Prop()
    private sound!: Sound;

    @Action('setSound', { namespace: 'playing' })
    private setSound!: ((sound: Sound) => void);

    public onClick(): void {
      this.setSound(this.sound);
    }
  }

</script>

<style lang="scss">
  .sound-content {
    width: 32vw;
    height: 20vw;
    position: relative;
    vertical-align: middle;
    text-align: center;
    color: white;
    cursor: pointer;
  }

  .bg-img {
    max-width: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: .8;
    object-fit: cover;
    overflow: hidden;
  }
</style>