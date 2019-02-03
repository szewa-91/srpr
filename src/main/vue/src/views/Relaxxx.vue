<template>
  <div class="relax">
    <h1>Tutaj piloci będą się relaksować. Arghhh!!!</h1>
    <RelaxContent msg="Wybierz dźwięk" v-bind:categories="categories"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import RelaxContent from '@/components/RelaxContent.vue'; // @ is an alias to /src

  import { Category } from '@/models/CategoryModel.ts';

  @Component({
    components: {
      RelaxContent,
    },
  })
  export default class Relaxxx extends Vue {
    private categories: Category[] = [];

    public created(): void {
      this.fetchCategories();
    }

    private stripOverhead(data: any) {
      return data['_embedded']['categories'];
    } 

    public fetchCategories() {
      fetch('/api/categories')
          .then(res => res.json())
          .then(res => {
            this.categories = Category.fromArray(this.stripOverhead(res));
          })
          .catch(err => console.error(err));
    };


  }
</script>
