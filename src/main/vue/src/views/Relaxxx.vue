<template>
  <div class="relax">
    <h1>Tutaj piloci będą się relaksować. Arghhh!!!</h1>
    <RelaxContent msg="Ale słodziutki żuczek!" />
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
export default class Relaxxx extends Vue {}
</script>
