import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: home
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
