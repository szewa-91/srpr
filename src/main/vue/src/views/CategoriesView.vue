<template>
  <div>
    <div class="relax">
      <h1>Tutaj piloci będą się relaksować. Arghhh!!!</h1>
      <CategoriesList/>
    </div>
    <div>
      <ControlPanel/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import CategoriesList from '@/components/categories/CategoriesList.vue';
  import ControlPanel from '@/components/control-panel/ControlPanel.vue';

  @Component({
    components: {
      CategoriesList,
      ControlPanel,
    },
  })
  export default class CategoriesView extends Vue {

  }

</script>
