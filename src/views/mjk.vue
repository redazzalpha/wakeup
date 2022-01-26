<template>
    <div class="mjk">
        <div class="bloc mx-auto" :style="divStyle">
            <!--intro-->
            <div class="intro">
                <h2>Le projet de mjk</h2>
                    <figure class="mb-4" :style='figureStyle'>
                        <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peint-en-prison.jpg' title="Clotilde Gilbert fondatrice wake' up café" style="border-radius: 15px 15px 0 0;" />  
                        <figcaption class="font-italic" style="">Marcel alias mjk</figcaption>
                    </figure>
                <p class="text-body-2 text-sm-body-1">
                    "C'est en se promenant place du Tertre à Paris que MJK a voulu apprendre à dessiner. 
                    Il y a observé les peintres et les portraitistes qui caricaturent les passants. 
                    Un jour en prison, il a tenté de croquer une rose qu'on lui avait donnée. 
                    Le résultat l'a surpris et vous séduirait. "
                </p>
            </div>
            <!--project-->
            <div class="project">
                <h3>Le projet</h3>
                <p>
                    Marcel ou MJK (surnom guadeloupéen avec lequel notre artiste signe toutes ses oeuvres) a découvert son talent en prison, en essayant de dessiner une rose qu’on lui avait donnée. <br>
                    Depuis deux ans, WKF lui donne les moyens nécessaires pour travailler ce talent :  matériel, autorisations de l’administration pénitentiaire, valorisation de son travail… <br>
                    MKJ peint beaucoup pour d'autres détenus, des portraits de leur famille. <br>
                    "Cela les aide" ... "Il n'y a que du positif là-dedans" nous dit-il. <br>
                    Il a travaillé chaque jour pour progresser et s'est mis à la peinture. <br>
                    WKF l’a encouragé tout au long de ce travail, lui a permis de croire en lui, notamment en projetant une soirée qui mettrait ses oeuvres en vente. <br>
                    Chacune de ces oeuvres nous parle de la beauté du monde, de la nature, de son île d'origine (La Guadeloupe) et de son regard sur les autres à travers une série de portraits expressifs. <br>
                    Wake up Café participe ainsi à la mission de réinsertion mise en place par l’administration pénitentiaire et le service pénitentiaire d’insertion et de probation (SPIP). <br>
                    Aujourd'hui, MJK continue à peindre dans sa cellule: un moyen pour lui de communiquer avec l'extérieur, de transmettre sa vision du monde et de préparer sa réinsertion dans la société. <br>
                    Grâce au travail de Marcel, Wake up Café a pu organiser un événement destiné à vendre ses oeuvres aux enchères et à sensibiliser les entrepreneurs à l’embauche de sortants de prison, à donner une place à ces personnes qui toutes, un jour, sortiront de prison.
                </p>
                <h4>Quelques &#x153;uvres:</h4>
                <v-container>
                    <v-row>
                        <v-col class="col-12 col-sm-4">
                            <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture12-285x285.jpg' width="300" height="225" />
                        </v-col>
                        <v-col class="col-12 col-sm-4">
                            <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture24-285x285.jpg' width="300" height="225" />
                        </v-col>
                        <v-col class="col-12 col-sm-4">
                            <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture55-285x285.jpg' width="300" height="225" />
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <!--like-bloc-->
            <div class="like">
                <h3 style="text-align: unset">Vous aimé le travail de mjk ?</h3>
                <v-container grid-list-xs>
                    <v-row>
                        <v-col class="col-12 col-sm-6">
                            <p>
                                Il reste des oeuvres à vendre. <br>
                                Si vous souhaitez en acheter, il vous suffit de nous transmettre un message ici en indiquant 
                                la référence de l'oeuvre et nous vous préciserons son prix ainsi que les modalités d'acquisition.
                            </p>
                            <!--send-message-panel-->
                            <v-expansion-panels accordion class="mb-5">
                                <v-expansion-panel>
                                    <v-expansion-panel-header elevation=5 color="orange" class="white--text elevation-5">Envoyer un message a mjk</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-form ref="form">
                                            <!--name-field-->
                                            <v-text-field
                                            v-model="name"
                                            label="Votre nom*"
                                            required
                                            clearable
                                            :rules="nameRules"
                                            class="my-2"
                                            ></v-text-field>
                                            <!--society-field-->
                                            <v-text-field
                                            v-model="society"
                                            label="Votre entreprise"
                                            required
                                            clearable
                                            :rules="societyRules"
                                            class="my-2"
                                            ></v-text-field>
                                            <!--email-field-->
                                            <v-text-field
                                            v-model="email"
                                            label="Votre email*"
                                            required
                                            clearable
                                            :rules="emailRules"
                                            class="my-2"
                                            ></v-text-field>
                                            <!--phone-field-->
                                            <v-text-field
                                            v-model="phone"
                                            label="Votre téléphone"
                                            required
                                            clearable
                                            :rules='phoneRules'
                                            class="my-2"
                                            ></v-text-field>
                                            <!--message-field-->
                                            <v-textarea
                                            v-model="message"
                                            auto-grow
                                            no-resize
                                            outlined
                                            clearable
                                            hide-details

                                            label='Votre message'
                                            prepend-inner-icon="mdi-comment"
                                            :rules='messageRules'
                                            class="my-4"
                                            ></v-textarea>
                                            <!--buttons-->
                                            <v-btn  text color="success" @click="$refs.form.validate()" class="mr-4">envoyer</v-btn>
                                            <v-btn text color="error" @click="$refs.form.reset()">effacer</v-btn>
                                        </v-form>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>

                            <h4 style="text-align: unset">Vous souhaitez commander un portrait à mjk ?</h4>
                            <p>
                                C'est très simple il vous suffit de nous envoyer une message ainsi que la photo du portrait que vous souhaitez faire réaliser. <br>
                                Wake up Café prendra contact avec vous dès réception de votre demande.
                            </p>

                            <!--command-panel-->
                            <v-expansion-panels accordion class="mb-5">
                                <v-expansion-panel>
                                    <v-expansion-panel-header elevation=5 color="orange" class="white--text elevation-5">Commander un portrait à mjk</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-form ref="form1">
                                            <!--name-field-->
                                            <v-text-field
                                            v-model="name1"
                                            required
                                            clearable
                                            label="Votre nom*"
                                            :rules="nameRules"
                                            class="my-2"
                                            ></v-text-field>
                                            <!--email-field-->
                                            <v-text-field
                                            v-model="email1"
                                            required
                                            clearable
                                            label="Votre email*"
                                            :rules="emailRules"
                                            class="my-2"
                                            ></v-text-field>
                                            <!--message-field-->
                                            <v-textarea
                                            v-model="message1"
                                            hide-details
                                            auto-grow
                                            no-resize
                                            outlined
                                            clearable
                                            label='Votre message'
                                            prepend-inner-icon="mdi-comment"
                                            :rules='messageRules'
                                            class="my-4"
                                            ></v-textarea>
                                            <!--image-input-->
                                            <div 
                                            class="text-center grey--text text--darken-1 mt-6"
                                            >Votre photo en jpeg ou png max. 2Mo</div>
                                            <v-file-input
                                            append-icon='mdi-file-image'
                                            v-model="imgFile"
                                            hide-details
                                            solo
                                            dense
                                            clearable
                                            persistent-hint
                                            placeholder="Choisir un fichier"
                                            accept="image/*"
                                            class="mb-8"
                                            ></v-file-input>
                                            <!--buttons-->
                                            <v-btn  text color="success" @click="$refs.form1.validate()" class="mr-4">envoyer</v-btn>
                                            <v-btn text color="error" @click="$refs.form1.reset()">effacer</v-btn>
                                        </v-form>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                        <!--sale-catalog-->
                        <v-col class="col-12 col-sm-6">
                            <v-btn
                            min-height=48
                            large
                            block 
                            color='orange'
                            class="white--text"
                            elevation=5
                            href='https://www.wakeupcafe.org/wp-content/uploads/2016/04/Oeuvres-invendues.pdf'
                            style="font-weight: unset"
                            >
                                <v-icon  size=25>mdi-download-circle-outline</v-icon>Catalogue des &#x153;uvres en ventes
                            </v-btn>
                            <v-carousel
                            cycle
                            hide-delimiters
                            show-arrows-on-hover
                            :height='carouselHeight'
                            class="mb-6"
                            >
                                <v-carousel-item
                                v-for='image in images'
                                :key="image.src"
                                ><img :src='image.src' style="object-fit: contain" width="100%" height="100%" />
                                </v-carousel-item>
                            </v-carousel>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>

import Vue from 'vue';
import * as rules from '../rules';

export default Vue.extend({
    name: 'mjk',
    data: () => {
        return {
            name: '',
            email: '',
            name1: '',
            email1: '',
            message: '',
            message1: '',
            society: '',
            phone: '',
            imgFile: null,

            nameRules: rules.name,
            societyRules: rules.society,
            emailRules: rules.email,
            phoneRules: rules.phone,
            messageRules: rules.message,

            images: [
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture56.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture47.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture57.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture4.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture11.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture59.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture92.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture91.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture93.jpg'},
                {src: 'https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-mjk-peinture90.jpg'},
            ]
        };
    },
    computed: {
        figureStyle() {
            let style = 'border-radius: 15px 15px 0 0;';
            return style;
        },
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
        carouselHeight() {
            let height;
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': height = 220; break;
                case 'sm': height = 400; break;
                case 'md': height = 500; break;
                case 'lg': height = 600; break;
                case 'xl': height = 700; break;
            }
            return height;
        },
    },
    methods: {
    }
});
</script>
