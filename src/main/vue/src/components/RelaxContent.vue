<template>
  <div class="relax-content">
      <p>{{ msg }}</p>
      <SoundTile name="Las" imgPath="assets/images/las.jpg"></SoundTile>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SoundTile from '@/components/SoundTile.vue';

@Component({
  components: {SoundTile,},
})
export default class RelaxContent extends Vue {
  @Prop() private msg!: string;

}
</script>

<style lang="scss">
#relax-content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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