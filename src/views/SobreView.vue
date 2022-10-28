<template>
  <div class="container flex center">
    <header>
      <h1 class="title">Sobre</h1>
    </header>
    <article>
      <section class="content">
        <p>
          Criador: Fábio Júnior Barbosa
        </p>
        <p>
          Objetivo: Consultar pedidos do canal SkyHub, de forma básica.
        </p>
      </section>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SobreView',
  computed:{
    ...mapGetters([
      'loged'
    ])
  },
  created(){
    if (!this.loged){
      this.$router.push({name: 'login'});
    }  
  }
};

</script>


<style lang="scss" scoped>
@import '@/assets/sass/variabes.scss';

.content p{
  font-size: 1.5rem;
  color: $cor-quaternaria;
}
</style>