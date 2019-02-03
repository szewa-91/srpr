<template>
  <div class="relax-content">
    <p>{{ msg }}</p>
    <div class="sound-tiles">
      <SoundTile
          v-for="c in categories"
          v-bind:name="c.name"
          v-bind:imgPath="`assets/images/${c.icon}`"
          v-bind:key="c.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import SoundTile from '@/components/SoundTile.vue';
  
  import { Category } from '@/models/CategoryModel.ts';

  @Component({
    components: { SoundTile },
  })
  export default class RelaxContent extends Vue {

    @Prop() private msg!: string;
    @Prop() private categories!: Category[];
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