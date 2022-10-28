<template>
  <div class="container flex center">
    <header>
      <h1 class="title alert">Página não encontada!</h1>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'InicioView',
  computed:{
    ...mapGetters([
      'loged'
    ])
  }
};
</script>
