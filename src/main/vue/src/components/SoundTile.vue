<template>
  <div class="sound-content">
      <img :src="require(`@/${imgPath}`)" class="bg-img">
      <h2>{{ name }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SoundTile extends Vue {

  @Prop() private name!: string;
  @Prop() private imgPath!: string;

}
</script>

<style lang="scss">
.sound-content {
  width: 32vw;
  height: 33vh;
  position: relative;
  vertical-align: middle;
  text-align: center;
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