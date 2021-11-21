<template>
    <!--app-bar-->
    <v-app-bar app>
        <!--image-template-->
        <template v-slot:img="{ props }">
            <v-img
            v-bind='props'
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            src='https://www.wakeupcafe.org/wp-content/uploads/2020/11/Capture-decran-2020-11-20-a-18.34.53.png'
            ></v-img>
        </template>
        <slot name='menu-icon'></slot>
        <!--title-logo-->
        <v-toolbar-title
        class='container text-h3 font-weight-bold orange--text text--darken-2'
        style="font-family: 'Tangerine' !important; text-shadow: 0px 2px 10px cyan, 0px 3px 10px blue"
        >Wake up café
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    name: 'appbar',
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

