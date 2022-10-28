<template>
  <Menu/>
  <router-view/>
</template>

<script>
  import Menu from '@/components/Menu.vue';
  import '@/assets/sass/style.scss';

  export default {
    name: 'App',
    components:{
      Menu
    }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/style.scss';
  
  #app{
    width: 100vw;
    height: 100vh;
  }
  
  .container{
    color: $cor-primaria;
    background-color: $cor-secundaria;

    border-radius: 1rem;
    box-shadow: 1px 1px 1px 1px $cor-tenciaria;

    height: 500px;
    width: 90%;
 

    transition: all 0.5s;

    &:hover{
      box-shadow: 1px 1px 1px 1px $cor-primaria;
    }
  } 

  .title{
      color: $cor-branca;
      margin: 1rem;
    }
</style>
