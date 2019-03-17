<template>
  <SoundsList v-if="$route.params.name" v-bind:categoryName="$route.params.name"/>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import SoundsList from '@/components/category/SoundsList.vue';

  @Component({
    components: {
      SoundsList
    },
  })
  export default class CategoryView extends Vue {
  }

</script>
