<template>
  <div class="relax">
    <h1>Tutaj piloci będą się relaksować. Arghhh!!!</h1>
    <button v-on:click="fecz">Fecz</button>
    <RelaxContent msg="Wybierz dźwięk" />
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

  public fecz() {
    console.log('fetching...');
    fetch('/api/categories')
    .then(res => res.json())
    .then((res) => {
      console.log(res);
    });
  }


}
</script>
