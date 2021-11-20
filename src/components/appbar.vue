<template>
    <div class="appbar">
        <!--app-bar-->
        <v-app-bar app height="85">
            <!--container-->
            <v-container grid-list-xs>
                <v-row>
                    <!--app-bar-icon-->
                    <v-col>
                        <v-app-bar-nav-icon />
                    </v-col>
                    <!--app-bar-logo-->
                    <v-col>
                        <v-toolbar-title
                        class='container text-h3 font-weight-bold orange--text text--darken-2'
                        style="font-family: 'Tangerine' !important"
                        >Wake up café
                        </v-toolbar-title>
                    </v-col>
                </v-row>
                <v-row>
                    <!--nav-buttons-->
                    <v-col>
                    </v-col>
                </v-row>
            </v-container>
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

