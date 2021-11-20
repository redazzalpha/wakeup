<template>
  <v-app>
    <!--app-bar-->
    <appbar />
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
  </v-app>
</template>

<script>
import appbar from './components/appbar.vue';
export default {
  name: 'main-app',
  components: {
    appbar,
  },
  
}
</script>
