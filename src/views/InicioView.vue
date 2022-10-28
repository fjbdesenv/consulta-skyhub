<template>
  <div class="container flex center">
    <header>
      <h1 class="title">Bem vindo!</h1>
    </header>
    <main>
      <img src="@/assets/Imgs/integrar.jpg" alt="Imagem sobre">
    </main>
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
  },
  created(){
    if (!this.loged){
      this.$router.push({name: 'login'})
    }  
  }
};
</script>

<style lang="scss" scoped>
  img{
    width: 300px;
    height: 300px;
    border-radius: 10px;
    filter: hue-rotate(90deg);
    animation: show-img-animation 5s, color-img-animation 5s infinite;

    @keyframes show-img-animation {
      0%    { opacity: 0; }
     100%   { opacity: 1; }
    }
    @keyframes color-img-animation {
      0%    { filter: hue-rotate(0deg); }
     50%   { filter: hue-rotate(360deg); }
     100%   { filter: hue-rotate(0deg); }
    }
  }
  
</style>