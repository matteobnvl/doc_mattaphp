<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4" v-for="item in items" :key="item.title">
                <CardsComponents :data="item"/>
            </div>
        </div>
    </div>
</template>

<script>

import CardsComponents from './CardsComponents.vue';

export default{
    name: 'DocsComponents',
    components: {
        CardsComponents
    },
    data() {
        return {
            items: [
                {
                    'title': 'Installation',
                    'icon' : 'bi bi-rocket-takeoff',
                    'texte': 'Comment utiliser le framework et lancer votre projet.',
                    'link': 'docs_detail'
                },
                {
                    'title': 'Rooting',
                    'texte': 'Créez vos propores routes simple et dynamique.',
                    'icon' : 'bi bi-signpost-2',
                    'link': 'docs_detail'
                },
                {
                    'title': 'Bdd',
                    'texte': 'Connectez vous à votre base de données et faites vos requêtes.',
                    'icon' : 'bi bi-database',
                    'link': 'docs_detail'
                },
                {
                    'title': 'Migration',
                    'texte': 'Créez vos migrations pour mettre à jour votre base de données',
                    'icon' : 'bi bi-shuffle',
                    'link': 'docs_detail'
                },
                {
                    'title': 'Mail',
                    'texte': 'Envoyer des mails à partir de votre application',
                    'icon' : 'bi bi-envelope',
                    'link': 'docs_detail'
                },
                {
                    'title': 'Template',
                    'texte': 'Gérez votre système d\'affichage et vos functions personnels.',
                    'icon' : 'bi bi-file-earmark-spreadsheet',
                    'link': 'docs_detail'
                }
            ]
        }
    }
}
</script>

<style>
.container{
    margin-top: 10vh;
}
</style>