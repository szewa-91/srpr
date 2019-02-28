<template>
  <div>
    <h1>Będzie dźwięk z kategorii {{ $route.params.name }}</h1>
    <h2> O z taki: {{ currentSound.name }}</h2>
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

    private created() {
      if (!this.currentSound) {
        this.$router.push('/relax');
      }
    }
  }

</script>
