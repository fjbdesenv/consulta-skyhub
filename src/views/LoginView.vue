<template>
    <div class="login container flex center">
        <header>
            <h3>
                Login
            </h3>
        </header>
        <div>
            <p>
                <label for="email">E-mail: </label><input name="email" type="text" v-model="email" >
            </p>
            <p>
                <label for="senha">Senha: </label><input name="email" type="password" v-model="senha">
            </p>
            <p>
                <button class="btn" @click="checkLogin()" >
                    Login
                </button>
            </p>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default{
    name: 'Login',
    data: ()=>{
        return({
            email: '',
            senha: '',
        })
    },
    methods:{
        ...mapMutations(['login']),
        checkLogin(){
            if(this.email === 'user@integracao.com.br' && this.senha === '123user'){
                this.login();
                this.$router.push({name: 'inicio'});
            }else{
                alert('Verifique seu email e senha!')
            }
        }
    }
} 

</script>

<style lang="scss">
    @import "@/assets/sass/variabes.scss";
    .login{
        p{
            margin: 1.5rem;
            label{
                font-size: 1.2rem;
            }
            input{
                border-radius: 0.5rem;
                padding: 0.25rem;
            }
            .btn{
                padding: 10px;
                border-radius: 4px;
                background-color: $cor-primaria;
                color: $cor-branca;
                transition: all 1s;
                &:hover{
                    color: $cor-tenciaria;
                    border-color: $cor-branca;    
                }
            }
        }
    }
</style>