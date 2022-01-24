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
                                        <v-text-field
                                        v-model="name"
                                        label="Votre nom*"
                                        required
                                        clearable
                                        :rules="nameRules"
                                        class="my-2"
                                        ></v-text-field>

                                        <v-text-field
                                        v-model="society"
                                        label="Votre entreprise"
                                        required
                                        clearable
                                        :rules="societyRules"
                                        class="my-2"
                                        ></v-text-field>

                                        <v-text-field
                                        v-model="email"
                                        label="Votre email*"
                                        required
                                        clearable
                                        :rules="emailRules"
                                        class="my-2"
                                        ></v-text-field>

                                        <v-text-field
                                        v-model="phone"
                                        label="Votre téléphone"
                                        required
                                        clearable
                                        :rules='phoneRules'
                                        class="my-2"
                                        ></v-text-field>
                                        
                                        <v-textarea 
                                        label='Votre message'
                                        auto-grow
                                        no-resize
                                        outlined
                                        clearable
                                        prepend-inner-icon="mdi-comment"
                                        :rules='messageRules'
                                        class="my-5"
                                        ></v-textarea>
                                    
                                        <v-btn  text color="success" @click="submit" class="mr-4">envoyer</v-btn>
                                        <v-btn text color="error" @click="clear">effacer</v-btn>
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
                                    <v-form ref="form">
                                        <v-text-field
                                        v-model="name"
                                        label="Votre nom*"
                                        required
                                        clearable
                                        :rules="nameRules"
                                        class="my-2"
                                        ></v-text-field>

                                        <v-text-field
                                        v-model="email"
                                        label="Votre email*"
                                        required
                                        clearable
                                        :rules="emailRules"
                                        class="my-2"
                                        ></v-text-field>
                                        
                                        <v-textarea 
                                        label='Votre message'
                                        auto-grow
                                        no-resize
                                        outlined
                                        clearable
                                        prepend-inner-icon="mdi-comment"
                                        :rules='messageRules'
                                        class="my-5"
                                        ></v-textarea>
                                    
                                        <v-btn  text color="success" @click="submit" class="mr-4">envoyer</v-btn>
                                        <v-btn text color="error" @click="clear">effacer</v-btn>
                                    </v-form>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                    <!--sale-catalog-->
                    <v-col class="col-12 col-sm-6">
                        <v-btn
                        :large='buttonType'
                        :small='!buttonType'
                        block 
                        color='orange'
                        class="white--text"
                        elevation=5
                        href='https://www.wakeupcafe.org/wp-content/uploads/2016/04/Oeuvres-invendues.pdf'
                        >
                            <v-icon>mdi-download-circle-outline</v-icon>Catalogue des &#x153;uvres en ventes
                        </v-btn>
                        <v-carousel
                        cycle
                        hide-delimiter-background
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

export default {
    name: 'mjk',

    data: () => {
        return {
            name: '',
            society: '',
            email: '',
            phone: '',
            message: '',

            nameRules: [
                v => !!v || "Votre nom est requis!",
            ],
            societyRules: [
                v => !!v || "Votre entreprise est requis!",
            ],
            emailRules: [
                v => !!v || "Votre email est requis!",
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "email invalid!",
            ],
            phoneRules: [
                v => !!v || "Votre téléphone est requis!",
                v => /^((\+33[1-9]{9})|(0[1-9]{9}))$/.test(v) || "Téléphone invalide!",
            ],
            messageRules: [
                v => !!v || "Votre message est requis!",
            ],


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
        buttonType() {
            let large;
            switch(this.$vuetify.breakpoint.name) {
                case 'xs': large = false; break;
                case 'sm': large = false; break;
                case 'md': large = true; break;
                case 'lg': large = true; break;
                case 'xl': large = true; break;
            }
            return large;
        }
    },
    methods: {
        submit () {
            this.$refs.form.validate();
        },
        clear () {
            this.$refs.form.reset();
        },
    }
}
</script>
