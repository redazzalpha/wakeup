<template>
    <!--footer-block-->
    <v-footer color='transparent'>
        <!--main-container-->
        <v-container grid-list-xs fluid>
            <!--logo-->
            <v-row>
                <v-col
                class="d-flex justify-center text-h3 font-weight-bold"
                style="font-family: 'Tangerine' !important;"
                >wake up café</v-col>
            </v-row>
            <!--follow-us-text-->
            <v-row>
                <v-col class="d-flex justify-center text-decoration-underline">
                    Suivez nous sur :
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
                            <div class="text-decoration-underline mb-2">Contacts : </div>
                            <li v-for="addr in address" :key="addr.label" style="list-style-type: none">
                                <address><a :href="addr.link" style="text-decoration: unset">{{ addr.label }}</a></address>
                            </li>
                        </ul>
                    </nav>
                </v-col>
            </v-row>
            <!--copyright-->
            <v-row>
                <v-col>
                    Copyright &copy;  {{ new Date().getFullYear() }} Association Wake' up café. Tous droits réservés.
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'ftr',
    data: () => {
        return {
            icons: [
                {icon: 'mdi-facebook', link: 'https://www.facebook.com/Wake-up-Caf%C3%A9-1701047416846948/?fref=ts', title: 'Accédez à facebook'},
                {icon: 'mdi-twitter', link: 'https://twitter.com/WakeupcafeWKF', title: 'Accédez à twitter'},
                {icon: 'mdi-instagram', link: 'https://www.instagram.com/wakeupcafe_wkf/?hl=fr', title: 'Accédez à instagram '},
                {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/company/wkf-association-wake-up-caf%C3%A9/', title: 'Accédez à linkedin'},
                {icon: 'mdi-youtube', link: 'https://www.youtube.com/channel/UCVHMEbwc3fDlcuNjxddthNw', title: 'Accédez à youtube'},
            ],
            address: [
                {label: 'WKF Lyon: 09 88 31 48 43', link: 'tel:+33988314843'},
                {label: 'WKF Montreuil: 01 48 36 93 97', link: 'tel:+33148369397'},
                {label: 'WKF Paris: 07 88 23 91 29', link: 'tel:+33788239129'},
                {label: 'WKF Montpellier: 04 67 60 68 03', link: 'tel:+33467606803'},
            ],
        };
    },

}
</script>
