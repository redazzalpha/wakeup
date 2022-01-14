<template>
    <div class="who">
        <!--tab-header-->
        <v-tabs 
        v-model="tab" 
        center-active
        :vertical='$vuetify.breakpoint.name == "xs"?true:false'  
        class="d-flex justify-center align-center mt-5 mx-auto" 
        :style="widthStyle"
        >
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item" class="ma-0 mx-auto">{{ item }}</v-tab>
        </v-tabs>
        <!--divider-->
        <v-divider />
        <!--tab-items-->
        <v-tabs-items v-model="tab">
            <!--mission-tab-->
            <v-tab-item>
                <h2>Notre mission</h2>
                <div  class="mx-auto" :style="widthStyle">
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
                <div  class="mx-auto" :style="widthStyle">
                    <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2021/02/Schema-png-1-768x512.png' :width='imgWidth' class="mx-auto" />
                </div>
                <h3>Nos valeurs</h3>
                <div class='mx-auto' :style='widthStyle'>
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
            <!--adventure-tab-->
            <v-tab-item>
                <h2>WKF l'aventure</h2>
                <v-container grid-list-xs class='mb-10' :style="widthStyle">
                    <v-row>
                        <v-col>
                            <v-card class="rounded-lg elevation-10">
                                <v-card-title primary-title class="text-decoration-underline">2018</v-card-title>
                                <v-card-subtitle class="orange--text">Juin</v-card-subtitle>
                                <v-card-text>
                                    - Shake up Party #4 <br />
                                    - Wake up Café lauréate de la Fondation la France s'engage. <br />
                                    - Wake up Café est invitée dans les locaux du Carillon pour un Vis ma Vie ouvert au grand public.
                                </v-card-text>
                                <v-expand-transition>
                                    <div v-show="show2018">
                                        <v-card-subtitle class="orange--text">Mai</v-card-subtitle>
                                        <v-card-text>
                                        - WKF organise deux Vis ma Vie (Évènement de sensibilisation sur les conditions de détention) de suite sur Ouragan. <br />
                                        Le premier avec les ambassadeurs de la fondation Nexity, le deuxième ouvert à tous les partenaires de Wake up Café. 
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Avril</v-card-subtitle>
                                        <v-card-text>
                                            - Remise des prix locaux et régionaux du Crédit Coopératif <br />
                                            - Début de l'aventure Wake up Matelot
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Mars</v-card-subtitle>
                                        <v-card-text>
                                            - Oser changer le regard autour de la question " Faut-il mentir pour s'en sortir ? " <br /> 
                                            - Trophée Up Alternatives Économiques
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Février</v-card-subtitle>
                                        <v-card-text>
                                            - Vis ma Vie Partenaires. <br />
                                            Pour cette deuxième édition sont invités les collaborateurs des entreprises engagées auprès de Wake up Café
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn small plain 
                                    @click="show2018 = !show2018" 
                                    color='orange'
                                    >
                                        {{ show2018? 'Fermer' : 'Lire la suite' }}<v-icon>{{ show2018 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card class="rounded-lg elevation-10">
                                <v-card-title primary-title class="text-decoration-underline">2017</v-card-title>
                                <v-card-subtitle class="orange--text">Décembre</v-card-subtitle>
                                <v-card-text>
                                    - Sortie du clip "L’envie" tournée en détention et sur le plateau Jean Drucker de M6. <br /> 
                                    - Wake up Noël, le wake up diner de décembre se transforme en Noël, occasion de mobilisation de la communauté pour offrir à chaque wakeur une sortie culturelle inédite. <br />
                                    - Une nouvelle coach rejoint l’équipe du Wake up Planète pour animer un deuxième groupe de parole <br />
                                    - Premier prix de la fondation Cognacq-Jay dans la catégorie « accélération »
                                </v-card-text>
                                <v-expand-transition>
                                    <div v-show="show2017">
                                        <v-card-subtitle class="orange--text">Novembre</v-card-subtitle>
                                        <v-card-text>
                                            - Participation à La Nuit du Bien Commun : soirée de levée de fonds pour des associations à fort impact social <br />
                                            - Lancement de la série d’événements : « Oser changer de regard », une série de rencontre entre un waker et des citoyens dans des lieux publics
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Octobre</v-card-subtitle>
                                        <v-card-text>
                                            - Déménagement sur la péniche Ouragan
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Juillet</v-card-subtitle>
                                        <v-card-text>
                                        - Shake up Party, anniversaire de l'association à "la Mer de Paris" <br />
                                        - Premier Vis ma Vie de sortant de prison, un parcours grandeur nature pour découvrir la détention, <br />
                                        expérimenter la sortie et comprendre les enjeux de la réinsertion des personnes sortant de prison co créé et animé par les wakeurs
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Mars</v-card-subtitle>
                                        <v-card-text>
                                            - Évènement «L'Envie» chez TF1, présentation des axes de réinsertion Wake up Café : la formation, l’embauche, la création d’entreprise
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Janvier</v-card-subtitle>
                                        <v-card-text>
                                            - Lancement Atelier Beauté Bien-être au Centre de détention pour femme de Réau et à la maison d'arrêt des femmes de Versaillles
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn small plain 
                                    @click="show2017 = !show2017" 
                                    color='orange'
                                    >
                                        {{ show2017? 'Fermer' : 'Lire la suite' }}<v-icon>{{ show2017 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card class="rounded-lg elevation-10">
                                <v-card-title primary-title class="text-decoration-underline">2016</v-card-title>
                                <v-card-subtitle class="orange--text">Décembre</v-card-subtitle>
                                <v-card-text>
                                    - Soirée des bénévoles
                                </v-card-text>
                                <v-expand-transition>
                                    <div v-show="show2016">
                                        <v-card-subtitle class="orange--text">Octobre</v-card-subtitle>
                                        <v-card-text>
                                            - Évènement «De la prison à l’embauche : l’envie de s’en sortir», Présentation du clip «l’Envie» chez M6 <br />
                                            - Lancement du Projet d’écriture d’une femme détenue au Centre de détention à Réau
                                        </v-card-text>
                                        <v-card-subtitle class="orange--text">Septembre</v-card-subtitle>
                                        <v-card-text>
                                            - Première embauche de salarié WKF
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Juillet</v-card-subtitle>
                                        <v-card-text>
                                            - Évènement «Shake up party», anniversaire de WKF et lancement du site web <br />
                                            - Lancement Atelier Fleuri au Centre de détention pour femmes de Réau
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Juin</v-card-subtitle>
                                        <v-card-text>
                                            - Évènement «Écriture et enfermement», sortie du livre «La moitié du chemin» de Dany le braqueur, à l'Archipel <br />
                                            - Lancement Atelier Photo-Danse au Centre de détention pour femmes de Réau, réalisation d'une vidéo <br />
                                            - Deux stagiaires de plus
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Mai</v-card-subtitle>
                                        <v-card-text>
                                            - Lancement Atelier Théâtre à la Maison d’arrêt de Nanterre
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Avril</v-card-subtitle>
                                        <v-card-text>
                                            - Lancement des Wake up Dîners et des Wake up Planète <br />
                                            - Un stagiaire multimédia
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Mars</v-card-subtitle>
                                        <v-card-text>
                                            - Sortie du clip «Have Mercy» tourné à la maison d’arrêt de Nanterre <br />
                                            - Deux nouvelles stagiaires
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Janvier</v-card-subtitle>
                                        <v-card-text>
                                            - Évènement «Création et enfermement», vente aux enchères des oeuvres de MJK
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn small plain 
                                    @click="show2016 = !show2016" 
                                    color='orange'
                                    >
                                        {{ show2016? 'Fermer' : 'Lire la suite' }}<v-icon>{{ show2016 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card class="rounded-lg elevation-10">
                                <v-card-title primary-title class="text-decoration-underline">2015</v-card-title>
                                <v-card-subtitle class="orange--text">Novembre</v-card-subtitle>
                                <v-card-text>
                                    - Premier stagiaire WKF <br />
                                    - Accompagnement du projet artistique de MJK <br />
                                    - Dany, en détention, commence l'écriture de son autobiographie soutenu par l'écrivain Aude de Tocqueville
                                </v-card-text>
                                <v-expand-transition>
                                    <div v-show="show2015">

                                        <v-card-subtitle class="orange--text">Octobre</v-card-subtitle>
                                        <v-card-text>
                                            - Démarrage des partenariats avec Challancin, Cora… => Premières embauches <br />
                                            - En partenariat avec la fondation M6, Pascal Anciaux commence le projet du clip «  L’envie » avec 4 chanteurs issus de la chorale de Nanterre
                                        </v-card-text>

                                        <v-card-subtitle class="orange--text">Septembre</v-card-subtitle>
                                        <v-card-text>
                                            - Arrivée de Wake up Café sur la Péniche Carrick
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn small plain 
                                    @click="show2015 = !show2015" 
                                    color='orange'
                                    >
                                        {{ show2015? 'Fermer' : 'Lire la suite' }}<v-icon>{{ show2015 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                               </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card class="rounded-lg elevation-10">
                                <v-card-title primary-title class="text-decoration-underline">2014</v-card-title>
                                <v-card-subtitle class="orange--text">Juillet</v-card-subtitle>
                                <v-card-text>
                                    - Création de l'association Wake up Café <br />
                                    - 8 chanteurs sélectionnés sur 40 auditionnés participent à l’enregistrement d’un CD à la maison d’arrêt de Nanterre. <br />
                                    - À l’intérieur de la maison d’arrêt : tournage du Clip "Have Mercy" avec la société de production Aloest <br />
                                    - Premières embauches chez FCTP et  Houra <br />
                                    - Enregistrement du CD à la maison d'arrêt de Nanterre
                                </v-card-text>
                                <v-expand-transition>
                                    <div v-show="show2014">
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <h3>Les news wake up' </h3>
                <v-container grid-list-xs :style='widthStyle'>
                    <v-row class="justify-center ">
                        <v-col v-for="link in links" :key="link.label" class="col-5 col-md-2 d-flex justify-center align-center">
                            <a :href="link.link">
                                <p class="orange--text text-center ma-0">{{ link.label }}</p>
                            </a>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>
            <!--story-tab-->
            <v-tab-item>
                <h2>Nos belles histoires</h2>
                <div class="mx-auto" :style="widthStyle">
                    <v-container grid-list-xs>
                        <v-row>
                            <v-col>
                                <v-card>
                                    <v-card-title style="background: linear-gradient( #BDBDBD, white, #BDBDBD)" class="text-subtitle-1 text-sm-h6">Le témoignage de Kenzo</v-card-title>
                                    <v-card-text class="pa-0">
                                        <iframe 
                                        src="https://www.youtube.com/embed/t-9Lj3Jde-s"
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen
                                        :style="vidStyle" 
                                        />
                                        <q>Ma conseillère d'insertion et de probation m'a conseillé wake up café</q>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-card >
                                    <v-card-title style="background: linear-gradient( #BDBDBD, white, #BDBDBD)" class="text-subtitle-1 text-sm-h6">Tally, Inventeur Entrepreneur</v-card-title>
                                    <v-card-text class="pa-0">
                                        <iframe 
                                        src="https://www.youtube.com/embed/ngAZ-YCw5TQ"
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen
                                        :style="vidStyle" 
                                        />
                                        <q>Privé de liberté, c'est là que j'ai appris beaucoup sur moi-même et que j'ai eu mon déclic</q><br>
                                        <q>Grâce à ma double expérience, j'en suis sorti renforcé, et aujourd'hui le projet digital est lancé</q>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-card>
                                    <v-card-title style="background: linear-gradient( #BDBDBD, white, #BDBDBD)" class="text-subtitle-1 text-sm-h6">Dylan, 20 ans</v-card-title>
                                    <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2017/01/wkf-dylan-2.jpg' :width='widthStyle' class="float-right"/>
                                    <v-card-text>
                                        Le 25 octobre dernier, l'équipe de Wake up Café était sur le chantier où travaille Dylan, 20 ans. <br>
                                        À peine sorti de prison, Dylan avait déjà contacté Wake up Café. Il avait envie. Envie de nous connaître, envie de s'investir, envie de s'en sortir. <br>
                                        Sa détermination était si évidente qu'au bout d'un mois, il a été embauché en CDD chez Bastien et Trebulle, une entreprise de ravalement à Paris. <br>
                                        À toute l'équipe de WKF admirative de son implication, il a montré fièrement sa dernière réalisation: un mur qu'il venait de terminer. <br>
                                        «J'aime mon boulot, je suis fier de ce que j'y accomplis» dit-il en montrant le fonctionnement des machines, en nous faisant découvrir son lieu de travail. <br>
                                        Mais il n'est pas le seul satisfait. Momo, son chef de chantier, ne veut tout simplement plus le laisser partir. «Le petit, c'est un bosseur, vous nous le laissez!». <br>
                                        La preuve que Dylan n'est pas le seul moteur de sa réinsertion mais que son engagement inspire confiance. <br>
                                        Bien sûr, il y a des moments plus difficiles, mais Dylan sait que cette fierté est sa force pour affronter d'autres défis de la réinsertion: logement, addictions … <br>
                                        Et qu'un travail acharné et collectif vient à bout de tout. Wake up Café est heureuse d'accompagner un de ses plus jeunes wakers!
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-card>
                                    <v-card-title style="background: linear-gradient( #BDBDBD, white, #BDBDBD)" class="text-subtitle-1 text-sm-h6">Jean-Pierre - 34 ans</v-card-title>
                                    <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2017/01/wkf-jean-pierre-2.jpg' :width='widthStyle'  class="float-right" />
                                    <v-card-text>
                                        Jean-Pierre était en détention à Nanterre et y a rencontré Clotilde. <br>
                                        Il a tout de suite voulu devenir un wakeur. Il a donc rejoint notre communauté, a d’abord réalisé quelques contrats temporaires et au fil de ses différentes embauches, il n’a pas eu de mal à prouver qu’il est fiable et sérieux. <br>
                                        Finalement, Cora aussi lui a fait confiance durablement en lui proposant un CDI en tant que Responsable du rayon Boissons dans leur grande surface d’Ermont. <br>
                                        Ce rayon, c’est comme sa vie : il faut y mettre de l’ordre et s’en occuper avec soin. <br>
                                        Quand on est allé le voir sur son lieu de travail, il se vantait fièrement : « Moi, mon allée, elle est toujours impeccable ! » <br>
                                        La preuve qu’on n’est jamais mieux servi que par soi-même ? <br>
                                        Mais pas sans l’aide et le soutien de personnes qui vous donnent une seconde chance, comme le directeur de Cora, Wake up Café et tous les autres qui sont heureux des réussites et de la fierté de Jean-Pierre.  
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-card>
                                    <v-card-title style="background: linear-gradient( #BDBDBD, white, #BDBDBD)" class="text-subtitle-1 text-sm-h6">Eric - 32 ans</v-card-title>
                                    <v-img src='https://www.wakeupcafe.org/wp-content/uploads/2018/06/Action-reinsertion-Eric.jpg' :width='widthStyle'  class="float-right" />
                                    <v-card-text>
                                        Eric est arrivé en France après une détention difficile au Congo. <br>
                                        Un copain de derrière les barreaux lui a parlé de Wake up Café, il nous a contactés. <br>
                                        Pour Eric, le plus urgent, le plus important était de trouver un travail, une stabilité et une assurance pour sa petite fille de deux ans, pour pouvoir la faire vivre et assumer son rôle de père. <br>
                                        Sa persévérance a payé : avec l’aide de Wake up Café, il a finalement décroché son premier CDI à l’entrepôt Animalis de Courcouronnes en septembre 2016. <br>
                                        Pour marquer le coup, son patron, désireux de l’accompagner et de le soutenir, a inscrit la date de son premier jour de boulot sur sa carte de visite : le 12/09/16, à 13h30. Cette carte, Eric la garde précieusement en poche pour se souvenir de ce point de départ et la montre avec émotion à ses amis. Cette carte, c’est son assurance. La preuve qu’il est capable, qu’il a réussi à obtenir ce qu’il voulait: prendre soin de sa fille. <br>
                                        Eric n’a pas seulement convaincu Wake up Café, mais aussi son patron et le directeur d’Animalis lui-même, qui l’accompagnent fidèlement dans sa réinsertion.                                    
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-card>
                                    <v-card-title style="background: linear-gradient( #BDBDBD, white, #BDBDBD)" class="text-subtitle-1 text-sm-h6">Ismaël, éleveur de poussins</v-card-title>
                                    <v-card-text>
                                        <q>Je ne pouvais pas imaginer que je puisse être un bon jardinier ou un bon peintre</q> <br>
                                        <q>J'aimerais leur dire de se battre, de ne pas perdre espoir</q> <br>
                                        <q>Il y a Clotilde, et son association, qui permet d'avoir des activités à l'intérieur et qui va leur permettre de se découvrir eux-mêmes</q>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-card>
                                    <v-card-title style="background: linear-gradient( #BDBDBD, white, #BDBDBD)" class="text-subtitle-1 text-sm-h6">Olivier, Chauffeur poids lourds</v-card-title>
                                    <v-card-text>
                                        <q>Quand je suis sorti de prison, j'ai ressenti de la joie, bien sûr de la joie, et puis l'envie de tout recommencer à zéro</q> <br>
                                        <q>Je suis assez confiant en l'avenir, dès que j'ai un truc qui se passe dans ma vie, j'avance</q> <br>
                                        <q>Il faut vraiment avoir envie de reprendre un peu goût à la vie</q>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-card>
                                    <v-card-title style="background: linear-gradient( #BDBDBD, white, #BDBDBD)" class="text-subtitle-1 text-sm-h6">Marcel, Cuisinier</v-card-title>
                                    <v-card-text>
                                        <q>Quand on regarde ça pendant un moment, ça apaise l'esprit</q> <br>
                                        <q>Je crois que toute la prison sait que je peins maintenant. Ça les aide aussi</q> <br>
                                        <q>Il y a du positif la-dedans</q>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </v-tab-item>
            <!--projets-tab-->
            <v-tab-item>
                <h2>Les projets</h2>
                <div class="mx-auto" :style="widthStyle">
                    <v-container grid-list-xs>
                        <v-row>
                            <v-col class="col-12 col-sm-6">
                                <v-card> 
                                    <v-card-title primary-title>Bientot dans les bacs</v-card-title>
                                    <img src='https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-chorale-2.jpg' :style='imgProject' />
                                </v-card>
                            </v-col>
                            <v-col class="col-12 col-sm-6">
                                <v-card> 
                                    <v-card-title primary-title>Le projet de MJK</v-card-title>
                                    <img src='https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-peintures-mjk-1.jpg' :style='imgProject' />
                                </v-card>
                            </v-col>                            
                            <v-col class="col-12 col-sm-6">
                                <v-card> 
                                    <v-card-title primary-title>Projet audiovisuel</v-card-title>
                                    <img src='https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-waker-m6.jpg' :style='imgProject' />
                                </v-card>
                            </v-col>
                            <v-col class="col-12 col-sm-6">
                                <v-card> 
                                    <v-card-title primary-title>Danny l'écrivain</v-card-title>
                                    <img src='https://www.wakeupcafe.org/wp-content/uploads/2016/10/wkf-la-moitie-du-chemin-dany-2-e1606043378448.jpg' :style='imgProject' />
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
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
            show2018: false,
            show2017: false,
            show2016: false,
            show2015: false,
            show2014: false,
            showSt1: false,
            items: [
                'Notre mission', 
                "wkf l'aventure", 
                'Nos belles histoires', 
                'Les projets', 
            ],
            links: [
                {label: 'Newsletter Eté 2019', link: 'https://www.wakeupcafe.org/wp-content/uploads/2019/08/Newsletter_Aout_2019.pdf'},
                {label: 'Newsletter Printemps 2019', link: 'https://www.wakeupcafe.org/wp-content/uploads/2019/07/Newsletter_Printemps_2019_WEB.pdf'},
                {label: 'Newsletter Hiver 2019', link: 'https://www.wakeupcafe.org/wp-content/uploads/2020/04/newsletter-mars-2020-0904.pdf'},
                {label: 'Newsletter Été 2018', link: 'https://www.wakeupcafe.org/wp-content/uploads/2019/02/NewsletterPapier_Fevr-2019-07.pdf'},
                {label: 'Newsletter Printemps 2018', link: 'https://www.wakeupcafe.org/wp-content/uploads/2019/02/Avril-18-WEB.pdf'},
                {label: 'Newsletter Automne 2017', link: 'https://www.wakeupcafe.org/wp-content/uploads/2019/02/Newsletter-Novembre-2017.pdf'},
                {label: 'Newsletter Printemps 2017', link: 'https://www.wakeupcafe.org/wp-content/uploads/2019/02/newsletter-WKF-printemps-2017.pdf'},
                {label: 'Newsletter Automne 2016', link: 'https://www.wakeupcafe.org/wp-content/uploads/2019/02/newslettermail.pdf'},
            ],
        };
    },
    computed: {
        widthStyle() {
            let style = 'width: ';
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': style += '100%'; break;
                case 'sm': style += '80%'; break;
                case 'md': style += '70%'; break;
                case 'lg': style += '50%'; break;
                case 'xl': style += '50%'; break;
            }
            return style;
        },
        vidStyle() {
            let style = '';
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': style += 'width: 100%; height: 250px'; break;
                case 'sm': style += 'width: 100%; height: 350px'; break;
                case 'md': style += 'width: 100%; height: 350px'; break;
                case 'lg': style += 'width: 100%; height: 450px'; break;
                case 'xl': style += 'width: 100%; height: 500px'; break;
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
        imgProject() {
            let style = '';
            switch(this.$vuetify.breakpoint.name) {
                case 'xs': style += 'width: 100%; height: 225px'; break;
                case 'sm': style += 'width: 100%; height: 225px'; break;
                case 'md': style += 'width: 100%; height: 350px'; break;
                case 'lg': style += 'width: 100%; height: 300px'; break;
                case 'xl': style += 'width: 100%; height: 350px'; break;
            }
            return style;
        },
    }
}
</script>

<style lang="scss" scoped>
q {
    color: grey;
    font-style: italic;
}
</style>

