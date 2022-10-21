<template>
    <nav class="menu">
        <router-link class="menu-item" to="/">Inicio</router-link> 
        <router-link class="menu-item" to="/pedido">Pedidos</router-link>
        <router-link class="menu-item" to="/sobre">Sobre</router-link>
    </nav>
  <router-view/>
</template>

<style lang="scss" scoped>
    @import '@/assets/sass/variabes.scss';

    .menu{
        padding: 1rem;

        .menu-item{
            color: $cor-tenciaria;
            background-color: $cor-secundaria;
            box-shadow: 1px  1px  1px  1px $cor-tenciaria;
            
            padding: 0.5rem;
            margin: 0.5rem;
            
            border-radius: 10px;

            font-size: 1.5rem;
            text-decoration: none;

            transition: all 0.5s;
            &:hover{
                color: $cor-quaternaria;
                background-color: $cor-tenciaria;
                box-shadow: 2px  2px  2px  2px $cor-secundaria;
            }
        }
    }    
</style>