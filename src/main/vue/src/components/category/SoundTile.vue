<template>
  <div v-bind:class="fullScreen? 'sound-content--full' : `sound-content--${index}`" v-on:click="onClick">
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

    @Prop()
    private index!: number;

    @Action('setSound', { namespace: 'playing' })
    private setSound!: ((sound: Sound) => void);

    private fullScreen: boolean = false;

    public onClick(): void {
      this.fullScreen = true;
      setTimeout(() => {
        this.setSound(this.sound);
        this.$router.push(`${this.categoryName}/${this.sound.name}`);
      }, 333);
    }
  }

</script>

<style lang="scss">

  $width: 33.13vw;
  $height: 20vw;

  .sound-content {
    width: $width;
    height: $height;
    position: absolute;
    vertical-align: middle;
    text-align: center;
    color: white;
    cursor: pointer;
    &--0 {
      @extend .sound-content;
      left: 0;
      top: 0;
    }
    &--1 {
      @extend .sound-content;
      left: $width;
      top: 0;
    }
    &--2 {
      @extend .sound-content;
      left: 2*$width;
      top: 0;
    }
    &--3 {
      @extend .sound-content;
      left: 0;
      top: $height;
    }
    &--4 {
      @extend .sound-content;
      left: $width;
      top: $height;
    }
    &--5 {
      @extend .sound-content;
      left: 2*$width;
      top: $height;
    }
    &--6 {
      @extend .sound-content;
      left: 0;
      top: 2*$height;
    }
    &--7 {
      @extend .sound-content;
      left: $width;
      top: 2*$height;
    }
    &--8 {
      @extend .sound-content;
      left: 2*$width;
      top: 2*$height;
    }

    &--full {
      @extend .sound-content;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      background-size: cover;
      z-index: 100;
      transition-duration: 333ms;
    }
  }

  .bg-img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: relative;
    z-index: -1;
    object-fit: cover;
    overflow: hidden;
    background-size: cover;
  }

</style>