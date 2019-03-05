<template>
  <div>
    <h1>Dźwięki z kategorii {{ $route.params.name }}</h1>
    <p
      v-for="s in soundState.category.sounds"
      v-bind:key="s.name"
    >{{ s.name }}</p>
    {{ soundState.category.sounds }}
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action, State } from 'vuex-class';
  import { Sound, Category, SoundState } from '@/store/sound/types';
  const namespace: string = 'sound';

  @Component
  export default class CategoryComponent extends Vue {
    @State('sound') soundState!: SoundState;

    public mounted() {
      console.log('After creation:', this.soundState.category.sounds);
    }
    public beforeDestroy() {
      console.log('Before destruction:', this.soundState.category.sounds);
    }
  }

</script>
