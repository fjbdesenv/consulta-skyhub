<template>
    <nav class="menu">
        <router-link class="menu-item" to="/">Inicio</router-link> 
        <router-link class="menu-item" to="/pedido">Pedidos</router-link>
        <router-link class="menu-item" to="/sobre">Sobre</router-link>
        <router-link @click="logof()" class="menu-item" to="/login">Sair</router-link>
    </nav>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'Menu',
    methods:{
        ...mapMutations(['logof'])
    }

}

</script>

<style lang="scss" scoped>
    @import '@/assets/sass/variabes.scss';

    .menu{
        padding: 1rem;

        .menu-item{
            color: $cor-quaternaria;
            background-color: $cor-primaria;
            box-shadow: 1px  1px  1px  1px $cor-tenciaria;
            
            padding: 0.5rem;
            margin: 0.5rem;
            
            border: 1px solid $cor-preta;
            border-radius: 10px;

            font-size: 1.5rem;
            text-decoration: none;

            transition: all 0.5s;
            &:hover{
                color: $cor-primaria;
                background-color: $cor-branca;
                box-shadow: 2px  2px  2px  2px $cor-secundaria;
            }
        }
    }    
</style>