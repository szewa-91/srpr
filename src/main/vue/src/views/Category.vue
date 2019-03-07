<template>
  <div>
    <h1>Dźwięki z kategorii {{ $route.params.name }}</h1>
    Tu się dźwięki zaczynają
    <p
      v-for="s in sounds"
      v-bind:key="s.name"
    >{{ s.name }}</p>
    A tu się kończą
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action, Getter, State } from 'vuex-class';
  import { Sound, Category, SoundState } from '@/store/sound/types';
  const namespace: string = 'sound';

  @Component
  export default class CategoryComponent extends Vue {
    @Getter('sounds', { namespace }) private sounds!: Sound[];
  }

</script>
