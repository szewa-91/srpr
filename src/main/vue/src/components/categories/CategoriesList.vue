<template>
  <div class="relax-content">
    <h3>Kategorie</h3>
    <div class="sound-tiles">
      <CategoryTile
          v-for="c in categories"
          v-bind:category="c"
          v-bind:imgPath="`assets/images/${c.icon}`"
          v-bind:key="c.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import CategoryTile from './CategoryTile.vue';
  import { Category } from '@/store/categories/types';
  import { Action, Getter } from 'vuex-class';

  @Component({
    components: { CategoryTile },
  })
  export default class CategoriesList extends Vue {
    @Getter('categories', { namespace: 'categories' }) public categories!: Category[];
    @Action('fetchCategories', { namespace: 'categories' }) private fetchCategories: any;

    public created(): void {
      if (!this.categories) {
        this.fetchCategories();
      }
    }
  }
</script>

<style lang="scss">
  .sound-tiles {
    display: flex;
    flex-wrap: wrap;
  }

  #relax-content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
