<template>
    <div class="appbar">
        <!--app-bar-->
        <v-app-bar app src='https://www.wakeupcafe.org/wp-content/uploads/2020/11/Capture-decran-2020-11-20-a-18.34.53.png'>
            <template v-slot:img="{ props }">
                <v-img
                v-bind='props'
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                ></v-img>

            </template>
            <v-app-bar-nav-icon />
            <v-toolbar-title
            class='container text-h3 font-weight-bold orange--text text--darken-2'
            style="font-family: 'Tangerine' !important"
            >Wake up café
            </v-toolbar-title>
            <!--container-->
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'appbar',
    data: () => {
        return {
            buttons: [
                {label: 'Accueil'},
                {label: 'Qui sommes nous'},
                {label: 'Nos sites'},
                {label: 'Nos actions'},
                {label: 'Nos partenaire'},
                {label: 'Nous soutenir'},
                {label: 'Nous rejoindre'},
                {label: 'Medias'},
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Tangerine';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/tangerine/v12/IurY6Y5j_oScZZow4VOxCZZM.woff2') format('woff2');
}
</style>

