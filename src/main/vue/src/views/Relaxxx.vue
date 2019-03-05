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

    public fetchCategories() {
      fetch('/api/categories')
          .then(res => res.json())
          .then(res => {
            this.categories = this.stripOverhead(res).map((r: any) => {
              const category = r as Category;
              category.id = r._links.category.href.slice(-1);
              return category;
            });
          })
          .catch(err => console.error(err));
    }

    private stripOverhead(data: any) {
      return data['_embedded']['categories'];
    }
  }

</script>
