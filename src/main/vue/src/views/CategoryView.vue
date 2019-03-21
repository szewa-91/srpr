<template>
  <div>
    <SoundsList v-if="$route.params.name" v-bind:categoryName="$route.params.name"/>
    <ControlPanel/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import SoundsList from '@/components/category/SoundsList.vue';
  import ControlPanel from "@/components/control-panel/ControlPanel";

  @Component({
    components: {
      SoundsList,
      ControlPanel
    },
  })
  export default class CategoryView extends Vue {
  }

</script>
