<template>
    <h2>Route simple</h2>
    <p>
        Pour créer une route simple il suffit de se rendre dans le fichier <code>app/routes/web.php</code> et
        y ajouter comme ceci :
    </p>
    <BlocCodeComponents :code="routeSimple" el="routeSimple" />
    <br>
    <p>Nous créons donc la route <code>/home</code>, il faut donc créer le fichier <code>app/controller/HomeController.php</code>
    et la méthode <code>index</code>.</p>

    <h6>Création du Controller <code>app/controller/HomeController.php</code> :</h6>
    <BlocCodeComponents :code="controllerSimple" el="controllerSimple" />

    <p>
        Nous créons donc notre fonction qui va retourner une vue twig, qu'il faudra préalablement
        créer dans le dossier templates comme ceci <code>templates/home/index.html.twig</code> où on pourra mettre.
    </p>
    <BlocCodeTwigComponents :code="twigSimple" el="twigSimple" />

    <h6>Appel de notre route</h6>
    <p>
        Pour appeler notre route depuis une autre route nous pouvons faire comme ceci :
    </p>
    <BlocCodeTwigComponents :code="AppelRouteSimple" el="AppelRouteSimple" />

</template>

<script>
import BlocCodeComponents from '@/components/Code/BlocCodeComponents.vue'
import BlocCodeTwigComponents from '@/components/Code/BlocCodeTwigComponents.vue'

export default {
    name: 'RouteSimpleComponents',
    components: {
        BlocCodeComponents,
        BlocCodeTwigComponents
    },
    data() {
        return {
            routeSimple: `<?php \nRoute::get(['/home', 'App\\Controllers\\HomeController@index'])->name('Accueil');`,
            controllerSimple: `<?php

namespace App\\Controllers;

use App\\Controllers\\Controller;

class HomeController extends Controller
{
    public function index()
    {

        //return $this->twig->render('home/index.html.twig', ['users' => $users]);
        return $this->twig->render('home/index.html.twig', []);
    }
}`,
            twigSimple: `{% extends 'base.html.twig' %}

{% block title %}Home{% endblock %}

{% block content %}
    <h1>HomeController</h1>
{% endblock %}`,
            AppelRouteSimple: `<a href="{{ route('Accueil') }}">Page Home</a>`
        }
    }

}
</script>


<style>

</style>