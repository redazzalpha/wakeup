<template>
  <v-app>
    <!--app-bar-->
    <appbar>
      <!--hamberger-icon-slot-->
      <template v-slot:nav-icon>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
    </appbar>

    <!--main-tag-->
    <v-main class="pt-15">
      <!--container-->
      <v-container grid-list-xs fluid>
        <!--router-view-->
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!--nav-drawer-->
    <v-navigation-drawer app
    v-model='drawer'
    @click.stop='drawer= !drawer'
    temporary
    >
      <!--nav-menu-->
      <menulist />
    </v-navigation-drawer>

    <!--btn-scroll-top-->
    <btnscrolltop />

    <!--footer-->
    <ftr />
  </v-app>
</template>

<script>
import Vue from 'vue';
import appbar from './components/appbar.vue';
import menulist from './components/menulist.vue';
import ftr from './components/footer.vue';
import btnscrolltop from './components/btnscrolltop.vue';
export default Vue.extend({
  name: 'main-app',
  components: {
    appbar,
    menulist,
    ftr,
    btnscrolltop,
  }, 
  data: () => {
    return {
      drawer: null,
    };
  },
});
</script>

<style lang="scss">
@font-face {
    font-family: 'Tangerine';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/Tangerine-Regular.ttf') format('truetype');
}
@font-face {
    font-family: 'Petemoss';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/Petemoss-Regular.ttf') format('truetype');
}

@media screen and (min-width: 768px) {
  p{
    font-size: 1rem;
  }
}
@media screen and (max-width: 425px) {
  p{
    font-size: 0.875rem;
  }
}

a{
  text-decoration: none;
}
q{
  color: grey;
}
h2{
  font-family: 'Tangerine';
  font-size: 3em;
  padding: 20px;
  text-align: center;
}
h3{
  font-family: 'Tangerine';
  font-size: 3em;
  text-align: center;
}
figure {
    border: thin #c0c0c0 solid;
    display: flex;
    flex-flow: column;
    padding: 5px;
}
figcaption {
    background-color: orange;
    color: #fff;
    font: italic smaller sans-serif;
    padding: 5px;
    text-align: center;
    font-size: 15px;
};
</style>

