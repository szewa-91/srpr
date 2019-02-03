<template>
  <div class="relax">
    <h1>Tutaj piloci będą się relaksować. Arghhh!!!</h1>
    <button v-on:click="fetchCategories">Fecz</button>
    <RelaxContent msg="Wybierz dźwięk" v-bind:categories="categories"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import RelaxContent from '@/components/RelaxContent.vue'; // @ is an alias to /src

  @Component({
    components: {
      RelaxContent,
    },
  })
  export default class Relaxxx extends Vue {
    private categories: any[] = [];

    public created(): void {
      this.fetchCategories();
    }

    public fetchCategories() {
      console.log('fetching...');
      fetch('/api/categories')
          .then(res => res.json())
          .then(res => res['_embedded'])
          .then((res) => {
            this.categories = res['categories'];
          });
    }


  }
</script>
