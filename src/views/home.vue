<template>
    <div class="home">
        <v-img 
        src='https://www.wakeupcafe.org/wp-content/uploads/2020/11/Capture-decran-2020-11-20-a-17.29.25.png' 
        class="d-none d-sm-block"
        />
        <v-carousel
        cycle
        show-arrows-on-hover
        hide-delimiters
        height="51vh"
        >
            <v-carousel-item
            v-for='image in images'
            :key="image.src"
            :src='image.src'
            width='50vw'
            class="mx-auto"
            ></v-carousel-item>
        </v-carousel>
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
    }
}
</script>

