<template>
  <div class="sound-content" v-on:click="onClick">
    <img v-if="sound.icon" :src="require(`@/assets/images/${sound.icon}`)" class="bg-img">
    <h1>{{ sound.name }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Sound } from '@/store/categories/types';

  @Component
  export default class SoundScreen extends Vue {
  }

</script>

<style lang="scss"></style>