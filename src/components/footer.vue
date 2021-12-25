<template>
    <!--footer-block-->
    <v-footer dark class="mt-10">
        <!--main-container-->
        <v-container grid-list-xs fluid>
            <!--follow-us-text-->
            <v-row>
                <v-col class="d-flex justify-center text-decoration-underline">
                    Suivez-nous sur :
                </v-col>
            </v-row>
            <!--follow-us-icons-->
            <v-row>
                <v-col class="d-flex justify-center align-center">
                    <v-btn
                    v-for="item in icons"
                    :key="item.icon"
                    icon
                    :href='item.link'
                    class="mx-4 primary--text"
                    ><v-icon :title='item.title'>{{ item.icon}}</v-icon></v-btn>
                </v-col>
            </v-row>
            <!--agency-phones-numbers-->
            <v-row>
                <v-col>
                    <nav>
                        <ul>
                            <div class="d-flex align-baseline mb-2"> <v-icon class="mr-2">mdi-phone-classic</v-icon>Contacts : </div>
                            <li v-for="addr in address" :key="addr.label" style="list-style-type: none">
                                <address><a :href="addr.link">{{ addr.label }}</a></address>
                            </li>
                        </ul>
                    </nav>
                </v-col>
            </v-row>
            <!--bottom-nav-bar-->
            <v-row>
                <v-col>
                    <v-card class="d-flex flex-wrap justify-center elevation-8" color='transparent'>
                        <v-btn 
                        v-for="menu in menus"
                        :key="menu.label"
                        plain small
                        height=0
                        @click='$vuetify.goTo(0)'
                        :width="menuWidth"
                        :to='menu.link'
                        title="Accédez la rubrique"
                        class="ma-5 d-flex justify-center">
                            <span class="white--text">{{ menu.label }}</span>
                            <v-icon color='white' class="mx-2">{{ menu.icon }}</v-icon>
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>

            <!--logo-->
            <v-row>
                <v-col
                class="d-flex justify-center text-h3 font-weight-bold"
                style="font-family: 'Tangerine' !important"
                >wake up café</v-col>
            </v-row>

            <!--copyright-->
            <v-row>
                <v-col cols=10>
                    Copyright &copy;  {{ new Date().getFullYear() }} Association Wake' up café. Tous droits réservés.
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ftr',
    data: () => {
        return {
            icons: [
                {icon: 'mdi-facebook', link: 'https://www.facebook.com/Wake-up-Caf%C3%A9-1701047416846948/?fref=ts', title: 'Suivez-nous sur facebook'},
                {icon: 'mdi-twitter', link: 'https://twitter.com/WakeupcafeWKF', title: 'Suivez-nous sur twitter'},
                {icon: 'mdi-instagram', link: 'https://www.instagram.com/wakeupcafe_wkf/?hl=fr', title: 'Suivez-nous sur instagram '},
                {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/company/wkf-association-wake-up-caf%C3%A9/', title: 'Suivez-nous sur linkedin'},
                {icon: 'mdi-youtube', link: 'https://www.youtube.com/channel/UCVHMEbwc3fDlcuNjxddthNw', title: 'Suivez-nous sur youtube'},
            ],
            address: [
                {label: 'WKF Paris: 07 88 23 91 29', link: 'tel:+33788239129'},
                {label: 'WKF Montpellier: 04 67 60 68 03', link: 'tel:+33467606803'},
                {label: 'WKF Lyon: 09 88 31 48 43', link: 'tel:+33988314843'},
                {label: 'WKF Montreuil: 01 48 36 93 97', link: 'tel:+33148369397'},
            ],
        };
    },
    computed: {
        ...mapState([
            'menus',
        ]),
        menuWidth() {
            let width;
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': width = '100%'; break;
                case 'sm': width = '25%'; break;
                case 'md': width = '15%'; break;
                case 'lg': width = '20%'; break;
                case 'xl': width = '10%'; break;
            }
            return width;
        },
    },
}
</script>
