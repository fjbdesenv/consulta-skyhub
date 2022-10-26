<template>
  <div class="container flex center">
    <header>
      <h1 class="title">Pedidos</h1>
      <button @click="this.consultar" >Consultar</button>
    </header>
  </div>
</template>

<script>
import axios from 'axios';
import variables from '@/config/variables';
const headers = new Headers();

headers.append("Access-Control-Allow-Origin", "*");
headers.append("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
headers.append("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
headers.append("X-User-Email", variables.integracao.email);
headers.append("X-Api-Key", variables.integracao.token);
headers.append("X-Accountmanager-Key", variables.integracao.account);
headers.append("Accept", "application/json");
headers.append("Content-Type", "application/json");

const instance = axios.create({
    baseURL: "https://skyhub.com.br/",
    headers: headers,
});

export default {
  name: 'PedidoView',
  methods: {
    consultar() {
      instance.get("/orders").then((request, response)=>{
        console.log('RESPONSE => ' + response);
      }).catch((error) => {
        console.log('ERROR => '+error);
      });
    }
  }
};

</script>
