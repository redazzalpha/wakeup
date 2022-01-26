<template>
  <div class="partners">

    <!--title-->
    <h2>Nos Partenaires</h2>
    <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2020/10/120932868_147603957043144_3717174745999936021_o.jpg' :width='imgWidth' height=300 class="mx-auto" />
    <p class="text-center my-8">"Plus de 100 entreprises partenaires nous accompagnent au quotidien"</p>

    <!--institutional-partners-->
    <h3>Partenaires institutionnels</h3>
    <v-card shaped :width='cardWidth' class="mx-auto my-10 elevation-3">
      <v-card-text>
        <v-container grid-list-xs>
          <v-row class="d-flex align-center justify-center">
            <v-col v-for='img in institutionnal_img' :key="img.src" :class="colClass
            " >
              <v-lazy :options='{threshold: 1}'>
                <v-img :src='img.src' :width='logoWidth' class="mx-auto my-auto" />
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <!--fondation-->
    <h3>Fondations</h3>
    <v-card shaped :width='cardWidth' class="mx-auto my-10 elevation-3">
      <v-card-text>
        <v-container grid-list-xs>
          <v-row class="d-flex align-center justify-center">
            <v-col v-for='img in fondation_img' :key="img.src" :class="colClass
            " >
              <v-lazy :options='{threshold: 1}'>
                <v-img :src='img.src' :width='logoWidth' class="mx-auto my-auto" />
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <!--society-partners-->
    <h3>Entreprises partenaires</h3>
    <v-card shaped :width='cardWidth' class="mx-auto my-10 elevation-3">
      <v-card-text>
        <v-container grid-list-xs>
          <v-row class="d-flex align-center justify-center">
            <v-col v-for='img in society_img' :key="img.src" :class="colClass
            " >
              <v-lazy :options='{threshold: 1}'>
                <v-img :src='img.src' :width='logoWidth' class="mx-auto my-auto" />
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <p class="mx-auto" :style="paragraphStyle">
      <span class="orange--text font-weight-bold">Ils nous accompagnent</span><br />
      Kéa, Kimso eurogroup autrement, Co, fondsl, Scale Changer, Ronalpia.
    </p>

    <p class="mx-auto" :style="paragraphStyle">
      <span class="orange--text font-weight-bold">Ils s'engagent avec nous</span><br />
      Accenture, Vermeer Capital, Audiens, Panorama, Safran, Macif, Bolloré, Total , Toit à moi, 
      Urssaf, Habitat et Humanisme, Makesense, Essilor, Alternatives, Crésus, Chimène, Solidarité, 
      Balluchon, Agatha, CPP, Ce que mes yeux ont vu, Edas, Racing 92, La Ruche, Afec, Lemon Tri, 
      Le Rocher, UNEP, 2e Chance, Association Discipline Positive, EDVO, Weave, Entreprise W, Kéa, 
      Lemon Aide, Arès, Aloest, Aurore, Lilo; Delsol et Avocats, Eventium, Sellsy, Groupe Rougnon, Lame de Fond, 
      Le Projet Imagine, Eurogroup Autrement, Raise, Solidarity Accor Hotels, CFA Stephenson, AFPA, Aef94, 
      Réseau Cocagne, Pôle emploi, Simplon, Carrefour, Le réseau des missions locales, L'association Pour l'Amitié, 
      Siao 75, Siao 92, Solidarité Nouvelle Logement, Emmaüs, L'escale, Bichat, Sainte-Anne, CFP Podo-Logie, 
      La Corde Raide, Trait d'union, Bimbamjob, La Cimade, La Cravate Solidaire, Wimoov, Eloquentia, L'Alternative Urbaine, 
      Culture du Cœur, La Cloche.

    </p>

    <!--our-price-->
    <h3>Nos prix</h3>
    <v-card shaped :width='cardWidth' class="mx-auto my-10 elevation-3">
      <v-card-text>
        <v-container grid-list-xs>
          <v-row class="d-flex align-center justify-center">
            <v-col v-for='img in price_img' :key="img.src" :class="colClass
            " >
              <v-lazy :options='{threshold: 1}'>
                <v-img :src='img.src' :width='logoWidth' class="mx-auto my-auto" />
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>
    <div class="d-flex flex-column flex-sm-row justify-center">
        <a a href="https://www.wakeupcafe.org/wp-content/uploads/2020/11/ITW-Pierre.pdf" class="d-flex flex-column align-center ma-5">
          <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2020/05/IMG_3496-150x150.jpg' :width='photoWidth' />
          <span>Témoignage</span>
        </a>
        <a a href="https://app.vendredi.cc/s-engager-pour/wake-up-cafe" class="d-flex flex-column align-center ma-5">
          <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2020/11/Capture-decran-2020-11-06-a-09.27.08-e1606066173996-150x150.png' :width='photoWidth' />
          <span>Rejoignez nos mécènes</span>
        </a>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'partners',
    data: () => {
      return {
        institutionnal_img: [
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/Ministere-de-la-justice-2020.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/Logo-AP-100-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/Pr%C3%A9fet-des-Hauts-de-Seine-150x150.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/TRAVAIL-e1606063761465.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/Direccte-150x150.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/Caisse-des-depots.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/DGEFP.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/unnamed-150x150.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/Ville_de_Paris.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/ob_c5efda_logomeudon-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/IDF.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/Logo-departement-1.png'},
        ],
        fondation_img: [
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/03/brageac-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/03/AIDEN-logo-fondation-eiffage-300x115.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2019/09/Fondation_EDC_logo_2018-RVB-300x206.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2019/07/fondation_PSA-300x207.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/02/LOGO-FIPL-2017-293x300.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/part-btp-300x221.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2019/04/Logo-fondation-de-france-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/04/stgenevieve-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2017/07/societegenerale-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/01/LOGO-FOND-BELLON-RVB-2.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2017/08/ferthe-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/01/logo-fondation-grdf.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/Capture-decran-2020-11-27-a-13.07.08-285x143.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/03/fondation-manpower-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/03/fondation-air-liquide-300x188.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/download-150x150.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/android-icon-192x192-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/Logo_AAC_-usage_externe--300x64.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/Banque-transatlantique-300x187.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/12/logo-original-1-300x155.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/media-logo-fondation-sfr-300x71.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2017/07/altercare-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/UEDF-chant-des-etoiles-logo-272x182.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/nos_fondations_auchan_retail-e1606064628287.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/logo-maillon-285x57.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/03/ratp-300x154.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/The-Adecco-Group-300x172.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/logo-safran-285x95.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/07/pacifico-1-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/04/carrefour-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/p1-210x300.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/unnamed-300x134.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/01/logo-archipel-des-utopies-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/01/Fondation-caritas-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/01/Fondation-Vinci-285x143.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/01/Fondation-credit-agricole-300x94.png'},
        ],
        society_img: [
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2018/07/Nespresso-300x189.png  '},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/Logo-AXA-300x169.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2017/03/bouygues-batiment.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/09/animalis.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/09/derichbourg.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/05/espaces-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2017/06/accorhotels.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/04/cora.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/03/LOGO-TRUFFAUT-VERT-pdf.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/05/challancin.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/France.tv_.svg_-300x52.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/logo-carrefour-285x228.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2018/03/Logo_Belbeoch.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/04/houra-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2018/03/Logo_Michel_Augustin-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/Logo_Suez_2016-285x72.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/Adecco-logo-300x246.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/12/utileetagreable-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2017/05/chimene.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/12/corotentraide-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/09/seuil-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/05/institutdeshautsdeseine-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/04/emmaus-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/lilot-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/04/mrs-150x150.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/1280px-Logo-groupe-ginger.svg_.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2017/10/ecp.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/logo-auchan-retail-france.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/Capture-d%E2%80%99%C3%A9cran-2020-06-11-%C3%A0-10.10.08-285x143.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/Buffalo-Grill-Logo.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/12/Logo-Total-1.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2021/03/logo-daphni-150x150.jpg'},
        ],
        price_img: [
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2018/08/prix-fondation-cognacq-jay_thumb-300x283-300x211.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2018/08/TropheesUp-300x211.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2018/08/Sticker_Laure%CC%81ats-locaux-1-300x211.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2018/08/FFE-300x211.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2019/07/investissement_competences-285x95.png'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/logo-atoutsoleil-2013-copie-e1606069708568.jpg'},
          {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/logo-creenso.png'},
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
      cardWidth() {
        let width;
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': width = '100%'; break;
            case 'sm': width = '80%'; break;
            case 'md': width = '80%'; break;
            case 'lg': width = '75%'; break;
            case 'xl': width = '70%'; break;
        }
        return width;
      },
      logoWidth() {
        let width;
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': width = '80%'; break;
            case 'sm': width = '65%'; break;
            case 'md': width = '65%'; break;
            case 'lg': width = '100%'; break;
            case 'xl': width = '80%'; break;
        }
        return width;
      },
      photoWidth() {
        let width;
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': width = '60%'; break;
            case 'sm': width = '168px'; break;
            case 'md': width = '200px'; break;
            case 'lg': width = '220px'; break;
            case 'xl': width = '200px'; break;
        }
        return width;
      },
      colClass() {
        return 'col-6 col-sm-4 col-md-3 col-lg-2';
      },
      paragraphStyle() {
        let style = 'width: ';
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': style += '100%'; break;
            case 'sm': style += '80%'; break;
            case 'md': style += '90%'; break;
            case 'lg': style += '50%'; break;
            case 'xl': style += '50%'; break;
        }
        return style;
      },
    },
});
</script>

