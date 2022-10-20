import SobreViewVue from '@/views/SobreView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import InicioRouter from './incio';
import SobreRouter from './sobre';

const routes = [
  InicioRouter,
  SobreRouter,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
