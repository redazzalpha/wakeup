<template>
  <v-app>
    <!--app-bar-->
    <appbar>
      <template v-slot:menu-icon>
        <!--hamberger-icon-->
        <v-app-bar-nav-icon 
        @click="drawer = !drawer"
        />
      </template>
    </appbar>

    <!--main-tag-->
    <v-main>
      <!--container-->
      <v-container grid-list-xs>
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

    <!--footer-->
    <ftr />
  </v-app>
</template>

<script>
import appbar from './components/appbar.vue';
import menulist from './components/menulist.vue';
import ftr from './components/footer.vue';
export default {
  name: 'main-app',
  components: {
    appbar,
    menulist,
    ftr
  }, 
  data: () => {
    return {
      drawer: null,
    };
  },
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Tangerine';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/tangerine/v12/IurY6Y5j_oScZZow4VOxCZZM.woff2') format('woff2');
}
</style>

