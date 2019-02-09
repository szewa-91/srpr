<template>
  <h1>Będzie dźwięk</h1>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  import { Category } from '@/models/Category.ts';

  @Component({
    components: {
    },
  })
  export default class Relaxxx extends Vue {
    @Prop() private category!: Category;

  }

</script>
