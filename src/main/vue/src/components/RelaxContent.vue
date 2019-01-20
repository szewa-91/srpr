<template>
  <div class="relax-content">
      <p>{{ msg }}</p>
      <div class="sound-tiles">
        <SoundTile name="Las" imgPath="assets/images/las.jpg"></SoundTile>
        <SoundTile name="Owady" imgPath="assets/images/zuk.jpg"></SoundTile>
        <SoundTile name="Miasto" imgPath="assets/images/miasto.jpg"></SoundTile>
        <SoundTile name="Ognicho" imgPath="assets/images/bonfire.jpg"></SoundTile>
        <SoundTile name="Morze" imgPath="assets/images/wave.jpg"></SoundTile>
        <SoundTile name="Marsjanie" imgPath="assets/images/outer.jpg"></SoundTile>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SoundTile from '@/components/SoundTile.vue';

@Component({
  components: {SoundTile},
})
export default class RelaxContent extends Vue {

  @Prop() private msg!: string;

}
</script>

<style lang="scss">
.sound-tiles{
  display: flex;
  flex-wrap: wrap;
}
#relax-content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>