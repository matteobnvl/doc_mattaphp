<template>
    <h2>Route dynamique</h2>

    <p>
        MattaPHP permet aussi de faire des routes dynamiques en tout genre, qui permettra de rendre plus agréable
        vos applications à developper.
        <br><br>
        Pour créer votre route dynamique, c'est identique à la route simple il faut juste rajouter votre 
        paramètre comme celui-ci par exemple <code>{ id_user }</code>.
    </p>
    <BlocCodeComponents :code="route" el="route"/>

    <p>
        Le <code>{ id_user }</code> va permettre de glisser une variable dans l'url, ici par exemple l'id d'un 
        utilisateur.

        <br><br>

        Pour récupérer cet identifiant il va faloir mettre un paramètre à notre méthode <code>getUser()</code>,
        comme ceci :        
    </p>

    <BlocCodeComponents :code="controller" el="controller" />

    <p>
        Une fois ceci fait nous pouvons voir que nous renvoyons l'<code>id_user</code> dans le template pour pouvoir
        l'utiliser comme ceci :
    </p>

    <BlocCodeTwigComponents :code="twig" el="twig" /> 

    <p>
        Et nous pouvons appeler notre route comme ceci, dans l'exemple proposer l'id est rentré par défaut
    </p>

    <BlocCodeTwigComponents :code="appelRouteDyn" el="appelRouteDyn" />

    <p>
        Ou bien via une variable
    </p>
    <BlocCodeTwigComponents :code="appelRouteDyn2" el="appelRouteDyn2" />

    <p>
        Vous pouvez ajouter autant de variable que nécessaire pour votre application.
    </p>

</template>

<script>
import BlocCodeComponents from '@/components/Code/BlocCodeComponents.vue'
import BlocCodeTwigComponents from '@/components/Code/BlocCodeTwigComponents.vue'

export default {
    name: 'RouteDynamiqueComponents',
    components: {
        BlocCodeComponents,
        BlocCodeTwigComponents
    },
    data() {
        return {
            route: `<?php \nRoute::get(['/user/{id_user}', 'App\\Controllers\\UserController@getUser'])->name('User detail');`,
            controller: `<?php

namespace App\\Controllers;

use App\\Controllers\\Controller;

class UserController extends Controller
{
    public function getUser(int $id_user)
    {

        return $this->twig->render('user/detail.html.twig', [
            'id_user' => $id_user
        ]);
    }
}`,
            twig: `{% extends 'base.html.twig' %}

{% block title %}User{% endblock %}

{% block content %}
    <h1>UserController</h1>

    <p>Id utilisateur : {{ id_user }}</p>

{% endblock %}`,
            appelRouteDyn: `{% extends 'base.html.twig' %}

{% block title %}Home{% endblock %}

{% block content %}
    <h1>HomeController</h1>

    <a href="{{ route('User detail', {'id_user' : '1'}) }}">Voir user 1</a>

{% endblock %}`,
            appelRouteDyn2: `<a href="{{ route('User detail', {'id_user' : id_user}) }}">Voir user 1</a>`
        }
    }
}
</script>