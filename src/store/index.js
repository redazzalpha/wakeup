import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: [
      {label: 'Accueil', icon: 'mdi-home-outline', link: '/'},
      {label: 'Qui sommes nous', icon: 'mdi-chat-question-outline', link:'/who'},
      {label: 'Nos sites WKF', icon: 'mdi-domain', link:'/sites'},
      {label: 'Nos actions', icon: 'mdi-briefcase-outline', link:'/actions'},
      {label: 'Nos partenaires', icon: 'mdi-handshake-outline', link:'/partners'},
      {label: 'Nous soutenir', icon: 'mdi-lifebuoy', link:'/help'},
      {label: 'Nous rejoindre', icon: 'mdi-set-left-center', link:'/join'},
      {label: 'Medias', icon: 'mdi-play-network-outline', link:'/medias'},
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
