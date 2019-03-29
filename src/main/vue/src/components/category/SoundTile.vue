<template>
  <div v-bind:class="fullScreen ? 'sound-content--full' : 'sound-content'" v-on:click="onClick">
    <img v-if="sound.icon" :src="require(`@/assets/images/${sound.icon}`)" class="bg-img">
    <h1>{{ sound.name }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Sound } from '@/store/categories/types';
  import { Action } from 'vuex-class';

  @Component
  export default class SoundTile extends Vue {
    @Prop()
    private sound!: Sound;

    @Prop()
    private categoryName!: string;

    @Action('setSound', { namespace: 'playing' })
    private setSound!: ((sound: Sound) => void);

    private fullScreen: boolean = false;

    public onClick(): void {
      this.fullScreen = true;
      setTimeout(() => {
        this.setSound(this.sound);
        this.$router.push(`${this.categoryName}/${this.sound.name}`);
      }, 1000);
    }
  }

</script>

<style lang="scss">
/*
  .sound-content {
    width: 32vw;
    height: 20vw;
    position: relative;
    vertical-align: middle;
    text-align: center;
    color: white;
    cursor: pointer;
    transform: translate(-50%, -50%);
    &--full {
      width: 100vw;
      height: 100vh;
      background-size: cover;
      z-index: 100;
      transition-duration: 1000ms;
      position: absolute;
    }
  }
*/
  div.sound-tiles img:nth-child(1) {
    width: 32vw;
    height: 20vw;
    position: absolute;
    top: 0;
    left: 0;
    vertical-align: middle;
    text-align: center;
    color: white;
    cursor: pointer;
  }
  div.sound-tiles img:nth-child(2) {
    width: 32vw;
    height: 20vw;
    position: absolute;
    top: 32vw;
    left: 20vw;
    vertical-align: middle;
    text-align: center;
    color: white;
    cursor: pointer;

  }

  .bg-img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: .8;
    object-fit: cover;
    overflow: hidden;
    background-size: cover;
  }

</style>