<template>
  <div>
    <h1>Będzie dźwięk</h1>
    <h2> O z takiej kategorii: {{ currentSound.category }}</h2>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Getter } from 'vuex-class';
  import { Sound } from '@/store/sound/types';
  const namespace: string = 'sound';

  @Component
  export default class Category extends Vue { 
    @Getter('currentSound', { namespace }) private currentSound!: Sound;
  }

</script>
