import NotFoundView from '../views/NotFound.vue';

export default {
  path: '/:patch(.*)*',
  name: 'NotFound',
  component: NotFoundView,
}; 
