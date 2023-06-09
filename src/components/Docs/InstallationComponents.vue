<template>
    <div>
        <h1>Installation</h1>
        <h2 id="demarrage">Démarrage</h2>
        <p>
            MattaPHP est un framework PHP pour la création d'application et site web. 
            Il s'appuie sur le model MVC (Model - Vue - Controller) mais aussi sur le moteur de template 
            TWIG qui permet un rendu optimal. Ce framework a pour but d'être minimaliste, léger et 
            from-scratch.
        </p>
        <h6>Créer un projet :</h6>
        <p>
            Faire un git clone du repo pour installer le projet sur votre ordinateur.
        </p>
        <div class="code">
            <code>
                git clone https://github.com/matteobnvl/mattaphp.git
            </code>
        </div>

        <h2 id="configuration">Configuration</h2>

        <p>
            Une fois le projet cloné, il faut se rendre dedans et créer le fichier <code>.env</code> à 
            partir du fichier <code>.env.local</code>.<br><br>
            Comme-ceci :
        </p>
        <BlocCodeComponents :code="codeEnv" el="codeEnv" />
        <p>
            Puis faire la commande :
        </p>

        <div class="code">
            <code>
                composer install
            </code>
        </div>

        <h2>Environnement</h2>

        <div class="div">
            <v-tabs
                fixed-tabs
                bg-color="#282c31"
                color="white"
                v-model="tab"
            >
                <v-tab value="1">
                    Docker
                </v-tab>
                <v-tab value="2">
                    Autres
                </v-tab>
            </v-tabs>
            <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="1">
                    <div class="box-tab">
                        <h6>Prérequis :</h6>
                        <ul>
                            <li>Avoir docker installer</li>
                            <li>Et aussi docker-compose</li>
                        </ul>
                        <h6>Une fois ceci :</h6>
                        <p>Faire la commande à la racine du projet</p>
                        <div class="code">
                            <code>
                                docker-compose up --build
                            </code>
                        </div>
                        <p>
                            Ensuite retrouvez votre application ici
                        </p>
                        <div class="code">
                            <code>
                                <a href="http://localhost:8080/">http://localhost:8080/</a>
                            </code>
                        </div>
                    </div>
                </v-window-item>
                <v-window-item value="2">
                    <div class="box-tab">
                        <h6>Votre environnement personnel néssecite :</h6>
                        <ul>
                            <li>Une version de php</li>
                            <li>Une base de données de préférence mysql (sinon modifier la connexion dans <code>app/Models/Model.php</code>)</li>
                            <li>Un serveur de préférence apache (sinon changer le .htaccess)</li>
                        </ul>

                        <h6>Changer dans le fichier <code>.env</code> :</h6>
                        <p>La variable <code>APP_URL</code> par l'url de votre projet</p>
                        <code>APP_URL = http://localhost/mattaphp</code>
                    </div>
                </v-window-item>
            </v-window>
            </v-card-text>
        </div>
    </div>
</template>

<script>
import BlocCodeComponents from '@/components/Code/BlocCodeComponents.vue'

export default {
    name: 'InstallationComponents',
    components: {
        BlocCodeComponents
    },
    data() {
        return {
            codeEnv: `APP_URL = http://localhost/mattaphp
APP_NAME = 'Mon site'
APP_DEBUG = true
APP_ENV=dev

### SETTINGS BDD ###

DB_NAME = 'YOUR_DB_NAME'
DB_USER = 'YOUR_DB_USER'
DB_PASSWORD = 'YOUR_DB_PASSWORD'


### SETTINGS EMAIL ###

HOST_MAIL = 'YOUR_HOST_EMAIL'
USER_MAIL = 'YOUR_USER_EMAIL'
PASSWORD_MAIL = 'YOUR_PASSWORD_EMAIL'
PORT_MAIL = 'YOUR_PORT_EMAIL'
EMAIL_SENT_FROM = 'YOUR_EMAIL_TO_SEND'`,
            tab: null
        }
    }
}
</script>

<style>
.box-tab{
    min-height: 40vh;
}
</style>