<template>
  <div>
    <div class="relax">
      <CategoriesList/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import CategoriesList from '@/components/categories/CategoriesList.vue';

  @Component({
    components: {
      CategoriesList,
    },
  })
  export default class CategoriesView extends Vue {

  }

</script>
