import Vue from 'vue';
import Router from 'vue-router';
import Films from '@/views/Films';
import Favourites from '@/views/Favourites';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '',
      name: 'films',
      component: Films
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites
    },
  ]
})

export default router;
