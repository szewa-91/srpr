<template>
  <div class="sound-content" v-on:click="onClick">
    <img :src="require(`@/${imgPath}`)" class="bg-img">
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions([
      'setCurrentSound'
    ]),
  },
})
export default class CategoryTile extends Vue {

  @Prop() private name!: string;
  @Prop() private imgPath!: string;

  public onClick() {
    this.setCurrentSound(this.name);
    this.$router.push('category');
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
