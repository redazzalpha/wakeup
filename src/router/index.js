import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import who from '../views/who.vue';
import sites from '../views/sites.vue';
import actions from '../views/actions.vue';
import partners from '../views/partners.vue';
import help from '../views/help.vue';
import join from '../views/join.vue';
import medias from '../views/medias.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: home
  },
  {
    name: 'who',
    path: '/who',
    component: who
  },
  {
    name: 'sites',
    path: '/sites',
    component: sites
  },
  {
    name: 'actions',
    path: '/actions',
    component: actions
  },
  {
    name: 'partners',
    path: '/partners',
    component: partners
  },
  {
    name: 'help',
    path: '/help',
    component: help
  },
  {
    name: 'join',
    path: '/join',
    component: join
  },
  {
    name: 'medias',
    path: '/medias',
    component: medias
  },

];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
