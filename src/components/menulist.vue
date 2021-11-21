<template>
    <v-list>
        <v-list-item
        v-for='menu in menus'
        :key="menu.label"
        link
        >
            <v-list-item-icon><v-icon>{{ menu.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ menu.label }}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: 'menulist',
    data: () => {
        return {
            menus: [
                {label: 'Accueil', icon: 'mdi-home-outline'},
                {label: 'Qui sommes nous', icon: 'mdi-chat-question-outline'},
                {label: 'Nos sites WKF', icon: 'mdi-domain'},
                {label: 'Nos actions', icon: 'mdi-briefcase-outline'},
                {label: 'Nos partenaires', icon: 'mdi-handshake-outline'},
                {label: 'Nous soutenir', icon: 'mdi-lifebuoy'},
                {label: 'Nous rejoindre', icon: 'mdi-set-left-center'},
                {label: 'Medias', icon: 'mdi-play-network-outline'},
            ]
        };
    },
}
</script>
