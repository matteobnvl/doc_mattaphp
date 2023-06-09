<template>
    <h1>Rooting</h1>
    <p>
        MattaPHP permet de gérer les routes via le fichier <code>app/routes/web.php</code>, où est géré
        le Controller de la route, sa méthode et aussi nom qui permettra de l'appeler plus tard. Il est possible
        de faire deux types de routes : simple et dynamique.
    </p>
    <RouteSimpleComponents />

    <RouteDynamiqueComponents />

    
</template>

<script>
import RouteSimpleComponents from './Rooting/RouteSimpleComponents.vue'
import RouteDynamiqueComponents from './Rooting/RouteDynamiqueComponents.vue'

export default {
    name: 'RootingComponents',
    components: {
        RouteSimpleComponents,
        RouteDynamiqueComponents
    }

}
</script>


<style>

</style>