<template>
  <div class="sound-content">
      <h3>{{ name }}</h3>
      <img :src="require(`@/${imgPath}`)">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SoundTile extends Vue {
  @Prop() private name!: string;
  @Prop() private imgPath!: string;

  created() {
      console.log(this.imgPath);
  }
}
</script>

<style lang="scss">
.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  opacity: .5;
  object-fit: cover;
  overflow: hidden;
}
</style>