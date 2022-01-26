<template>
    <v-list>
        <v-list-item
        v-for='menu in menus'
        :key="menu.label"
        :to='menu.link'
        @click='$vuetify.goTo(0)'
        color='primary'
        class='menu'
        >
            <v-list-item-icon><v-icon>{{ menu.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title class="orange--text text-darken-2 text">{{ menu.label }}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
export default Vue.extend({
    name: 'menulist',
    data: () => {
        return {
        };
    },
    computed: {
        ...mapState([
            'menus'
        ]),
    },
});
</script>

<style lang="scss" scoped>
.menu:hover {
    background-color: #2196F3;
}
.menu:hover > .text{
    color: white !important;
}
</style>