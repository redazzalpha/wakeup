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
    <!--nav-drawer-->
    <v-navigation-drawer app
    v-model='drawer'
    @click.stop='drawer= !drawer'
    absolute
    temporary
    >
    <!--nav-menu-->
    <menulist></menulist>
    </v-navigation-drawer>
      <!--container-->
      <v-container grid-list-xs>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>footer</v-footer>
  </v-app>
</template>

<script>
import appbar from './components/appbar.vue';
import menulist from './components/menulist.vue';
export default {
  name: 'main-app',
  components: {
    appbar,
    menulist,
  }, 
  data: () => {
    return {
      drawer: null,
    };
  },
}
</script>
