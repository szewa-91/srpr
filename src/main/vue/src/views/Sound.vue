<template>
  <div>
    <h1>Będzie dźwięk</h1>
    <h2> O taki: {{ getCurrentSound }}</h2>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { mapGetters } from 'vuex';


  @Component({
    computed: {
      ...mapGetters(['getCurrentSound']),
    },
  })
  export default class Relaxxx extends Vue { }

</script>
