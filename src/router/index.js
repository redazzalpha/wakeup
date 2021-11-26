import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import who from '../views/who.vue';

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
  }

];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
