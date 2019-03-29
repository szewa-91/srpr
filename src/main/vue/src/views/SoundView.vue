<template>
  <div>
    <p>{{$route.params.categoryName}} {{$route.params.soundName}}</p>
    <img v-if="imgFile" :src="require(`@/assets/images/${imgFile}`)" class="bg-img">
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import SoundsList from '@/components/category/SoundsList.vue';
  import { Getter } from 'vuex-class';
  import { Sound } from '@/store/categories/types';

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
