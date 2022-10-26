import { createRouter, createWebHistory } from 'vue-router';
import InicioRouter from './incio';
import PedidoRouter from './pedido';
import SobreRouter from './sobre';
import NotFountRouter from './NotFound';

const routes = [
  InicioRouter,
  PedidoRouter,
  SobreRouter,
  NotFountRouter
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
