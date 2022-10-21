import SobreViewVue from '@/views/SobreView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import InicioRouter from './incio';
import PedidoRouter from './pedido';
import SobreRouter from './sobre';

const routes = [
  InicioRouter,
  PedidoRouter,
  SobreRouter,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
