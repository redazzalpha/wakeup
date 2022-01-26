<template>
    <!--app-bar-->
    <v-app-bar app
    dense
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

                <!--nav-icon-slot-->
                <v-col class="d-block d-lg-none flex-grow-0">
                    <slot name='nav-icon'></slot>
                </v-col>

                <!--logo-->
                <v-col
                class='flex-shrink-0 text-no-wrap  my-0 text-center text-lg-left'
                >
                    <router-link to="/">
                        <h1 class="text-h3 font-weight-bold orange--text text--darken-2" style="font-family: 'Tangerine' !important; text-shadow: 4px 4px 6px #001997;">
                            Wake up café
                        </h1>
                    </router-link>
                </v-col>

                <!--nav-buttons-->
                <v-col class="d-none d-lg-flex align-center justify-end">
                    <v-btn active-class='blue darken-4'
                    class="d-none d-lg-flex btn align-content-center"
                    v-for='menu in menus'
                    :key="menu.label"
                    :to='menu.link'
                    @click='$vuetify.goTo(0)'
                    color='white'
                    plain
                    small
                    >{{ menu.label }}</v-btn>
                </v-col>

            </v-row>
        </v-container>

        <!--blank-space-->
        <div v-show="$vuetify.breakpoint.name == 'xs'? true:false" class='blank'>
            <v-container grid-list-xs fluid >
                <v-row>
                </v-row>
            </v-container>
        </div>

    </v-app-bar>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
export default Vue.extend({
    name: 'appbar',
    data: () => {
        return {
        };
    },
    computed: {
        ...mapState([
        'menus'
        ]),
        gGradient() {
            return this.$vuetify.breakpoint.name == 'xs'? 'top left' : 'left';
        },
    }
});
</script>

