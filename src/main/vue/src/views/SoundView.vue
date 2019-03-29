<template>
  <div>
    <p>{{$route.params.categoryName}} {{$route.params.soundName}}</p>
    <!-- <img v-if="imgPath" :src="require(`@/${imgPath}`)" class="bg-img"> -->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import SoundsList from '@/components/category/SoundsList.vue';

  @Component({
    components: {
      SoundsList,
    },
  })
  export default class SoundView extends Vue {
  }

</script>
