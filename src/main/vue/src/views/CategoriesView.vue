<template>
  <div class="relax">
    <h1>Tutaj piloci będą się relaksować. Arghhh!!!</h1>
    <CategoriesList />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import CategoriesList from '@/components/categories/CategoriesList.vue';

  @Component({
    components: {
      CategoriesList
    },
  })
  export default class CategoriesView extends Vue {

  }

</script>
