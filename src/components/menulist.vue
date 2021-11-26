<template>
    <v-list>
        <v-list-item
        v-for='menu in menus'
        :key="menu.label"
        :to='menu.link'
        color='red'
        class='item'
        >
            <v-list-item-icon><v-icon>{{ menu.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title class="orange--text text-darken-2 text">{{ menu.label }}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: 'menulist',
    data: () => {
        return {
            menus: [
                {label: 'Accueil', icon: 'mdi-home-outline', link: '/'},
                {label: 'Qui sommes nous', icon: 'mdi-chat-question-outline', link:'/who'},
                {label: 'Nos sites WKF', icon: 'mdi-domain', link:''},
                {label: 'Nos actions', icon: 'mdi-briefcase-outline', link:''},
                {label: 'Nos partenaires', icon: 'mdi-handshake-outline', link:''},
                {label: 'Nous soutenir', icon: 'mdi-lifebuoy', link:''},
                {label: 'Nous rejoindre', icon: 'mdi-set-left-center', link:''},
                {label: 'Medias', icon: 'mdi-play-network-outline', link:''},
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
.item:hover {
    background-color: #2196F3;
}
.item:hover > .text{
    color: white !important;
}
</style>