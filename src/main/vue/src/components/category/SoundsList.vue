<template>
  <div>
    <h1>Dźwięki z kategorii {{ categoryName }}</h1>
    <div class="sound-tiles">
      <SoundTile
          v-for="s in sounds"
          v-bind:key="s.name"
          v-bind:sound="s"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Action, Getter } from 'vuex-class';
  import { Sound } from '@/store/categories/types';
  import SoundTile from '@/components/category/SoundTile.vue';

  @Component({
    components: { SoundTile },
  })
  export default class SoundsList extends Vue {
    @Prop() private categoryName!: string;
    private sounds!: Sound[];

    @Getter('getSounds', { namespace: 'categories' })
    private getSounds!: ((categoryName: string) => Sound[]);

    @Action('setSound', { namespace: 'playing' })
    private setSound!: ((sound: Sound) => void);

    public created(): void {
      this.sounds = this.getSounds(this.categoryName);
    }
  }
</script>

<style scoped>
  .sound-tiles {
    display: flex;
    flex-wrap: wrap;
  }
</style>