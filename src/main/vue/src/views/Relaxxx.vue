<template>
  <div class="relax">
    <h1>Tutaj piloci będą się relaksować. Arghhh!!!</h1>
    <RelaxContent msg="Wybierz dźwięk" v-bind:categories="categories"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import RelaxContent from '@/components/RelaxContent.vue'; // @ is an alias to /src
  import { Category } from '@/store/sound/types';
  import { Action, Getter } from 'vuex-class';
  const namespace = 'sound';


  @Component({
    components: {
      RelaxContent,
    },
  })
  export default class Relaxxx extends Vue {
    @Getter('categories', { namespace }) public categories!: Category[];
    @Action('fetchCategories', { namespace }) private fetchCategories: any;

    public created(): void {
      this.fetchCategories();
    }

  }

</script>
