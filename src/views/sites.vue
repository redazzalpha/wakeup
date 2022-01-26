<template>
<!--main-container-->
  <div class="sites">
    <!--title-->
    <h2>Nos sites WKF</h2>
    <!--title-img-->
    <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2021/01/IMG-20210115-WA0018.jpg' :width='imgWidth' class="mx-auto" />
    <!--introduction-text-->
    <p class="text-center my-8">
      WKF accompagne de manière rapprochée des personnes volontaires, détenues et sorties de prison, sur toutes les difficultés rencontrées à la sortie (emploi, logement, soin...). <br />
      Pour cela, l’association s’appuie sur un réseau de partenaires engagés à ses côtés, pour une réinsertion durable, sans récidive.
    </p>
    <!--figure-container-->
    <v-container grid-list-xs class="pa-0">
      <v-row no-gutters class="justify-center mx-auto" style="max-width: 1200px" >
        <v-col v-for='img in images' :key="img.src" class="col-md-5 py-2 px-md-2">
          <figure class="elevation-3 mx-auto " :style="'border-radius: 15px 15px 0 0; width: ' + (figureWidth)">
            <v-img :src='img.src' :title='img.title' style="border-radius: 15px 15px 0 0;" max-height=189 />
            <figcaption>{{ img.caption }}</figcaption>
          </figure>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'sites',
    data: () => {
      return {
        images: [
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/IMG-20200825-WA0002.jpg', caption: 'WKF Paris', title: 'Agence WKF Paris'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/WhatsApp-Image-2020-05-14-at-09.39.49.jpeg', caption: 'WKF Montpellier', title: 'Agence WKF Montpellier'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/01/IMG_1782.jpg', caption: 'WKF Lyon', title: 'Agence WKF Lyon'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2019/09/WhatsApp-Image-2019-09-10-at-14.59.20.jpeg', caption: 'WKF Montreuil', title: 'Agence WKF Montreuil'},
        ],
      };
    },
    computed: {
      imgWidth() {
        let width;
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': width = '100%'; break;
            case 'sm': width = '80%'; break;
            case 'md': width = '80%'; break;
            case 'lg': width = '75%'; break;
            case 'xl': width = '40%'; break;
        }
        return width;
      },
      figureWidth() {
        let width;
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': width = '100%'; break;
            case 'sm': width = '70%'; break;
            case 'md': width = '100%'; break;
            case 'lg': width = '100%'; break;
            case 'xl': width = '100%'; break;
        }
        return width;
      },
    }
});
</script>

