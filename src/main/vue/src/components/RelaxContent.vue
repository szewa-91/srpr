<template>
  <div class="relax-content">
      <p>{{ msg }}</p>
      <p v-if="clickCount > 0">Kliknąłeś już {{ clickConut }} razy.</p>
      <img src="../assets/images/zuk.jpg" class="bg-img" @click="clickConut">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RelaxContent extends Vue {
  @Prop() private msg!: string;

  private clickCount(): void {
    console.log('halo halo');
  }
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