<template>
  <div>
    <h1>Dźwięki z kategorii {{ categoryName }}</h1>
    Tu się dźwięki zaczynają
    <p
        v-for="s in sounds"
        v-bind:key="s.name"
    >{{ s.name }}</p>
    A tu się kończą
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Getter } from "vuex-class";
  import { Sound } from "../../store/categories/types";

  @Component
  export default class SoundsList extends Vue {
    @Prop() private categoryName: string;
    @Getter('sounds', { namespace: 'categories' })
    private getSounds: ((categoryName: string) => Sound[]);
    private sounds!: Sound[];

    public created(): void {
      this.sounds = this.getSounds(this.categoryName)
    }
  }
</script>

<style scoped>

</style>