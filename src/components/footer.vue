<template>
    <v-footer color='orange' height=200>
        <v-container grid-list-xs fluid>
            <v-row>
                <v-col
                class="d-flex justify-center text-h3 font-weight-bold"
                style="font-family: 'Tangerine' !important;"
                >
                    wake up café - {{ new Date().getFullYear() }}.
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'ftr',
}
</script>
