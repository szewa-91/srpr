<template>
  <div>
    <h1>Dźwięki z kategorii {{ categoryName }}</h1>
    <div
        v-for="s in sounds"
        v-bind:key="s.name"
    >{{ s.name }}
      <button v-on:click="() => onClick(s)">Play!</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Action, Getter } from 'vuex-class';
  import { Sound } from '@/store/categories/types';

  @Component
  export default class SoundsList extends Vue {
    @Prop() private categoryName!: string;
    private sounds!: Sound[];

    @Getter('getSounds', { namespace: 'categories' })
    private getSounds!: ((categoryName: string) => Sound[]);

    @Action('setSound', { namespace: 'playing' })
    private setSound!: ((sound: Sound) => void);

    public created(): void {
      this.sounds = this.getSounds(this.categoryName);
    }

    public onClick(sound: Sound): void {
      this.setSound(sound);
    }
  }
</script>

<style scoped>

</style>