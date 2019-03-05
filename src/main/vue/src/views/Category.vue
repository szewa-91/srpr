<template>
  <div>
    <h1>Dźwięki z kategorii {{ $route.params.name }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Getter } from 'vuex-class';
  import { Sound, Category } from '@/store/sound/types';
  const namespace: string = 'sound';

  @Component
  export default class CategoryComponent extends Vue {
    @Getter('soundsInCategory', { namespace }) private soundsInCategory!: any[];
    @Getter('currentCategory', { namespace }) private currentCategory!: Category;

    private created() {
      console.log(this.currentCategory.id);
    }
  }

</script>
