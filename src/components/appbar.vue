<template>
    <!--app-bar-->
    <v-app-bar app 
    dark fade-img-on-scroll 
    shrink-on-scroll 
    max-height=80
    min-height=80
    style="background: linear-gradient(to top left, rgb(245, 124, 0), rgb(255, 178, 99));"
    >
        <!--image-template-->
        <template v-slot:img="{ props }">
            <v-img
            v-bind='props'
            :gradient="'to ' + (gGradient) + ', rgba(245, 124, 0,1) 40%, rgba(255, 178, 99,.1)'"
            src='https://www.wakeupcafe.org/wp-content/uploads/2020/11/Capture-decran-2020-11-20-a-18.34.53.png'
            ></v-img>
        </template>
        
        <!--appbar-container-->
        <v-container grid-list-xs fluid>
            <v-row no-gutters class="flex-nowrap">

                <!--icon-slot-->
                <v-col class="d-block d-lg-none flex-grow-0">
                    <slot name='menu-icon'></slot>
                </v-col>

                <!--logo-->
                <v-col
                class='flex-shrink-0 text-no-wrap text-h3 font-weight-bold orange--text text--darken-2 my-0 text-center text-lg-left'
                style="font-family: 'Tangerine' !important; text-shadow: 4px 4px 6px #001997;"
                >Wake up café</v-col>

                <!--nav-buttons-->
                <v-col class="d-none d-lg-flex align-center">
                    <v-btn 
                    class="d-none d-lg-flex btn align-content-center"
                    v-for='button in buttons'
                    :key="button.label"
                    :to='button.link'
                    color='white'
                    plain
                    small
                    >{{ button.label }}</v-btn>
                </v-col>

            </v-row>
        </v-container>

        <!--title-logo-->
        <v-toolbar-title 
        >
            <v-container grid-list-xs fluid >
                <v-row>
                </v-row>
                
            </v-container>
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    name: 'appbar',
    data: () => {
        return {
            buttons: [
                {label: 'Accueil', icon: 'mdi-home-outline', link: '/'},
                {label: 'Qui sommes nous', icon: 'mdi-chat-question-outline', link:'/who'},
                {label: 'Nos sites WKF', icon: 'mdi-domain', link:'/'},
                {label: 'Nos actions', icon: 'mdi-briefcase-outline', link:'/'},
                {label: 'Nos partenaires', icon: 'mdi-handshake-outline', link:'/'},
                {label: 'Nous soutenir', icon: 'mdi-lifebuoy', link:'/'},
                {label: 'Nous rejoindre', icon: 'mdi-set-left-center', link:'/'},
                {label: 'Medias', icon: 'mdi-play-network-outline', link:'/'},
            ]

        };
    },
    computed: {
        gGradient() {
            return this.$vuetify.breakpoint.name == 'xs'? 'top left' : 'left';
        },
    }
}
</script>

<style lang="scss" scoped>
.btn:hover {
    color: #00558f !important;
}
.v-toolbar__content {
    height: 80px !important;
}
</style>

