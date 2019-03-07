<template>
  <div>
    <h1>Dźwięki z kategorii {{ $route.params.name }}</h1>
    <p
      v-for="s in currentSounds"
      v-bind:key="s.name"
    >{{ s.name }}</p>
    cos sie spierniczylo
    {{ currentSounds }}
    ale nie wiem co
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action, Getter, State } from 'vuex-class';
  import { Sound, Category, SoundState } from '@/store/sound/types';
  const namespace: string = 'sound';

  @Component
  export default class CategoryComponent extends Vue {
    @Getter('currentSounds', { namespace }) currentSounds!: Sound[];

    public mounted() {
      console.log('After creation:', this.currentSounds);
    }
    public beforeDestroy() {
      console.log('Before destruction:', this.currentSounds);
    }
  }

</script>
