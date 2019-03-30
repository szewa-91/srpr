<template>
  <div>
    <img v-if="imgFile" :src="require(`@/assets/images/${imgFile}`)" class="sound-img">
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import SoundsList from '@/components/category/SoundsList.vue';
  import { Getter } from 'vuex-class';

  @Component({
    components: {
      SoundsList,
    },
  })
  export default class SoundView extends Vue {

    private imgFile!: string;

    @Getter('getSound', { namespace: 'categories' })
    private getSound!: any;

    public created() {
      this.imgFile = this.getSound(
          this.$router.currentRoute.params.categoryName,
          this.$router.currentRoute.params.soundName,
      ).icon;
    }

  }

</script>

<style lang="scss">
  .sound-img {
    width: 100%;
    height: auto;
  }
</style>