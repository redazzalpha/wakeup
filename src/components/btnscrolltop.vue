<template>
    <v-btn
    v-scroll="onScroll"
    v-show="fab"
    fab
    dark
    fixed
    bottom
    right
    color="orange"
    @click="toTop"
    ><v-icon>mdi-chevron-up</v-icon></v-btn>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'btnscrolltop',
    data: () => {
        return {
        fab: false,
        };
    },
    methods: {
        onScroll(e) {
        if (typeof window === 'undefined') return;
        const top = window.pageYOffset ||   e.target.scrollTop || 0
        this.fab = top > 20;
        },
        toTop() {
        this.$vuetify.goTo(0);
        }
    },
});
</script>

