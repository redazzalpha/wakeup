<template>
    <div class="who">

        <v-tabs 
        v-model="tab" 
        center-active
        :vertical='$vuetify.breakpoint.name == "xs"?true:false'  
        class="d-flex justify-center align-center mt-5 mx-auto" 
        :style="divStyle"
        >
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item" class="ma-0 mx-auto">{{ item }}</v-tab>
        </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
            <h2>Qui sommes nous ?</h2>
            <div  class="mx-auto" :style="divStyle">
                <v-img src="https://www.wakeupcafe.org/wp-content/uploads/Img-Signature/LE161.jpg" class="mr-sm-5 mb-5 mb-sm-0" :style="imgStyle" />
                <p class="mb-9">
                    Créée en 2014, l’association Wake up Café (WKF) accompagne des personnes détenues motivées pour être soutenues vers une réinsertion durable sans récidive. <br />
                    Elle propose des parcours visant une réhabilitation complète de la personne, un accompagnement individuel dedans-dehors sur mesure, et une communauté d’entraide, <br />
                    pilier pour lutter contre la récidive et l’isolement. <br />
                    WKF travaille en collaboration avec les services pénitentiaires d’insertion et de probation (SPIP) pour redonner aux personnes détenues, l'envie d’avancer et <br />
                    accompagner celles qui sont volontaires dans leur projet de sortie. Les parcours WKF, dispensés en détention et ceux établis pour les premiers temps à la sortie, sont sollicités par les magistrats et la direction de l’administration pénitentiaire, le cabinet de la Garde des Sceaux et le Conseil Régional d’Ile de France. 
                    WKF s’engage dans les dossiers d'aménagement de peine vis-à-vis des magistrats en délivrant des attestations de suivi individuel, suivi en groupe, <br />
                    suivi psychologique et des promesses d’embauche d’entreprises partenaires engagées. WKF sollicite ses partenaires pour assurer un accompagnement individuel et sur mesure, <br />
                    répondant à l’ensemble des difficultés rencontrées par les personnes, notamment sur les thématiques du logement, de l'emploi et des soins.
                </p>
            </div>
            <h3>Parcours de reussite</h3>
            <div  class="mx-auto" :style="divStyle">
                <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2021/02/Schema-png-1-768x512.png' :width='imgWidth' class="mx-auto" />
            </div>
            <h3>Nos valeurs</h3>
            <div class='mx-auto' :style='divStyle'>
                <h4 class="orange--text">L'accueil</h4>
                <p>
                    Il est universel et sans contrainte, s'adresse à chaque personne rencontrée, quelque soit son statut et son passé. <br />
                    L'accueil est chaleureux et représentatif de l'esprit Wake up. 
                </p>
                <h4 class="orange--text">La bienveillance</h4>
                <p>
                    Le regard bienveillant, l’absence de jugement, la discrétion sont autant de valeurs que WKF véhicule et cherche à faire vivre.
                </p>
                <h4 class="orange--text">La confiance</h4>
                <p>
                    Elle est nécessaire pour la réinsertion des wakeurs et se construit dès la rencontre en détention. <br />
                    Elle est réciproque et donnée par principe. Pour Wake up Café, ce qui compte c’est la personne aujourd’hui, et non son passé.
                </p>
                <h4 class="orange--text">L’esprit de service</h4>
                <p>
                    Faire partie de la communauté WKF, c'est s'engager dans des relations d'entraide : <br />
                    Les wakeurs entre eux, puis entre les wakeurs, les salariés, les bénévoles et les partenaires. <br />
                    C'est tous ensemble que l'on trouve des solutions, et sans les autres on n'avance pas !
                </p>
                <h4 class="orange--text">La fraternité</h4>
                <p>
                    Chez WKF, on cherche à tisser des liens de fraternité entre nous, quel que soit notre "statut" : <br />
                    wakeurs, bénévoles, stagiaires, salariés... tous engagés dans des relations fraternelles !
                </p>

                <div class="text-center text-h6 font-weight-bold py-5">Wake up Café travaille sur 3 volets essentiels à son projet</div>

                <h4 class="orange--text">Valoriser</h4>
                <p>
                    Redonner à des personnes incarcérées une meilleure estime d’elles-mêmes afin qu’elles puissent retrouver l’envie et l’énergie nécessaires pour devenir moteur de leur réinsertion.
                </p>
                <h4 class="orange--text">Accompagner</h4>
                <p>
                    Accompagner des détenus de leur lieu d’incarcération jusqu’à une embauche, et par-delà l'embauche dans la durée.
                </p>
                <h4 class="orange--text">Sensibiliser</h4>
                <p>
                    Sensibiliser la société et les chefs d’entreprise à l’enjeu de la réhabilitation de sortants de prison. 
                </p>
            </div>
        </v-tab-item>
      </v-tabs-items>












    </div>
</template>

<script>
export default {
    name: 'who',
    data: () => {
        return {
            tab: null,
            items: [
                'Qui sommes nous ?', 
                'Notre histoire', 
                'Nos belles histoires', 
            ],
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
        imgStyle() {
            let style = 'border-radius: 15px 15px 0 0; float: ';
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': style += 'unset'; break;
                case 'sm': style += 'left'; break;
                case 'md': style += 'left'; break;
                case 'lg': style += 'left'; break;
                case 'xl': style += 'left'; break;
            }
            return style;
        },
        imgWidth() {
            let width = '';
                switch(this.$vuetify.breakpoint.name) {
                case 'xs': width += '100%'; break;
                case 'sm': width += '90%'; break;
                case 'md': width += '85%'; break;
                case 'lg': width += '80%'; break;
                case 'xl': width += '80%'; break;
            }

            return width;
        },
    }
}
</script>

