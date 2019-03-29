<template>
  <div class="category-content" v-on:click="onClick">
    <img v-if="imgPath" :src="require(`@/${imgPath}`)" class="bg-img">
    <h1>{{ category.name }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Category } from '@/store/categories/types';

  @Component
  export default class CategoryTile extends Vue {

    @Prop() private category!: Category;
    @Prop() private imgPath!: string;

    public onClick() {
      this.$router.push(`${this.category.name}`);
    }
  }
</script>

<style lang="scss">
  .category-content {
    width: 32vw;
    height: 20vw;
    position: relative;
    vertical-align: middle;
    text-align: center;
    color: white;
    cursor: pointer;
  }
  .bg-img {
    max-width: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: .8;
    object-fit: cover;
    overflow: hidden;
  }
</style>
