<template>
  <div class="container flex center">
    <header>
      <h1 class="title">Pedidos</h1>      
    </header>
    <p>
        Total: {{total}}
    </p>
    <section class="container">
      <div class="order" v-for="(order, index) in this.orders" :key="index" >
        <Order :order="order" />
      </div>
    </section>
  </div>
</template>

<script>
import orders from "@/assets/doc/data.json";
import Order from "@/components/Order.vue";

export default {
  name: 'PedidoView',
  data: () =>{
    return({
      total: orders.total,
      orders: orders.orders
    }) 
  },
  components:{
    Order
  }
};

</script>

<style lang="scss" scoped>
  
  .container{
    height: 800px;
  }
  .order{
    background-color: #fff;
    margin: 0.5rem;
    padding: 1rem;

    border-radius: 5px;
    border: 2px solid #444;
    box-shadow: 2px 2px 2px 2px #444;
    
    transition: all 0.5s;

    &:hover{
      border-color: #8cc;
    box-shadow: 2px 2px 2px 2px #8cc;  
    }
  }
  .container section {
    overflow-y: scroll;
  }
</style>