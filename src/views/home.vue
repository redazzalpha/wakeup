<template>
    <div class="home">
        <!--wakeup-logo-->
        <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2020/11/Capture-decran-2020-11-20-a-17.29.25.png' />
        <!--carousel-img-->
        <v-carousel
        cycle
        show-arrows-on-hover
        hide-delimiters
        :height='carouselHeight'
        class="mb-6"
        >
            <v-carousel-item
            v-for='image in images'
            :key="image.src"
            ><v-img :src='image.src' :height='carouselHeight'  />
            </v-carousel-item>
        </v-carousel>
        <!--main-block-->
        <div class="mx-auto" :style='divStyle'>
            <!--title-->
            <div class="text-center text-h2 font-weight-bold ma-5" style="font-family: 'Tangerine' !important;">wake up café</div>
            <!--presentation-picture-->
            <figure class="mb-4" :style='figureStyle'>
                <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2016/12/wkf-histoire.jpg' title="Clotilde Gilbert fondatrice wake' up café" style="border-radius: 15px 15px 0 0;" />  
                <figcaption class="font-italic" style="">Clotilde Gilbert fondatrice Wake' up café.</figcaption>
            </figure>
            <!--presentation-text-->
            <p class="mb-9">
                Pendant 7 ans, Clotilde Gilbert, en tant qu’aumônier de prison, a rencontré des 
                détenus de la maison d’arrêt de Nanterre dans leurs cellules. <br />
                Elle a fait le constat que l’enfermement et l’inaction désocialisent, déstructurent
                et déshumanisent la personne. <br />
                Or toutes ces personnes sortiront un jour de prison, et devront retrouver 
                une vie sociale et professionnelle. <br />
                Il est donc important qu'elles reprennent confiance en elles-mêmes pour devenir 
                moteur de leur réinsertion. <br />
                Au fil des rencontres, la découverte de talents dans le domaine de l’art et de la culture, <br />
                a d’abord donné lieu à la création d’une chorale dirigée par Clotilde pendant 5 ans. <br />
                Les bénéfices constatés chez les participants (plus grande confiance en soi, ouverture aux autres, énergie retrouvée…) <br />
                ont permis d’aller plus loin.
                Le projet d’enregistrer un CD en détention est né : c’est le début de Wake up Café.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data: () => {
        return {
            images: [
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/11/IMG_20201110_123458_785-1024x1024.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/10/IMG-20200825-WA0002.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/06/0ea8ff44-bb30-4c53-a04c-1181ee7bcc64.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2019/09/WhatsApp-Image-2019-09-10-at-14.59.20.jpeg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2020/07/IMG_1578.jpg'},
            ]
        };
    },
    computed: {
        divStyle() {
            let style = 'width: ';
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': style += '100%'; break;
                case 'sm': style += '80%'; break;
                case 'md': style += '90%'; break;
                case 'lg': style += '50%'; break;
                case 'xl': style += '50%'; break;
            }
            return style;
        },
        figureStyle() {
            let style = 'border-radius: 15px 15px 0 0; float: ';
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': style += 'unset'; break;
                case 'sm': style += 'right'; break;
                case 'md': style += 'right'; break;
                case 'lg': style += 'right'; break;
                case 'xl': style += 'right'; break;
            }
            return style;
        },
        carouselHeight() {
            let height;
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': height = 220; break;
                case 'sm': height = 400; break;
                case 'md': height = 500; break;
                case 'lg': height = 600; break;
                case 'xl': height = 800; break;
            }
            return height;
        },
    },
}
</script>


