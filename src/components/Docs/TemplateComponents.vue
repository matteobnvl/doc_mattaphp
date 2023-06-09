<template>
    <h1>Template</h1>
    <h2>Configuration</h2>

    <p>
        MattaPHP utilise le moteur de template twig pour le rendu front, il est initialisé dans le fichier controller
        <code>app/Controllers.Controller.php</code>.
    </p>
    <BlocCodeComponents :code="controller" el="controller" />

    <p>
        Pour pouvoir donc utiliser le rendu de twig il faut donc extendre vos futurs controller avec celui-ci 
        pour pouvoir hérité de son constructeur et donc l'appeler plus facilement.
    </p>
    <BlocCodeComponents :code="controller2" el="controller2" />

    <h2>Personnalisation</h2>

    <p>
        Vous pouvez ajouter vos propres fonctions dans le moteur de template Twig à partir du fichier
        <code>app/TwigExtensions.php</code>.
    </p>
    <BlocCodeComponents :code="twigext" el="twigext" />

    <p>
        Grâce à la méthode getFunctions() nous pouvons créer de nouvelles extensions qui pourront être utilisé
        dans la view de la page. Pour cela rien de plus simple il faut créer sa function dans le fichier à la suite,
        comme ceci :
    </p>
    <BlocCodeComponents :code="route" el="route" />
    
    <p>
        Puis l'ajouter dans le return de la fonction <code>getFunctions()</code>
    </p>
    <BlocCodeComponents :code="retour" el="retour" />

    <h2>Méthode disponible</h2>
    <p>
        Plusieurs méthode sont déjà disponible dans le moteur de template twig:
        <ul>
            <li>
                <code>route()</code> qui permet d'appeler une route depuis la view avec son nom,
                et de fournir aussi le nombre de paramètre requis pour cette route (<code>{'id_user': param}</code>)
            </li>
            <li>
                <code>intervalleDate()</code> qui permet de faire l'intervalle entre deux dates et de le renvoyer
                au format texte, (x ans, y mois, z jours ou z jours).
            </li>
            <li>
                <code>isConnected()</code> retourne true si l'utilisateur est connecté sinon false.
            </li>
        </ul>

        <br><br>

        Ces fonctions peuvent être appelé partous, plus voici d'autres fonctions qui peuvent être appelé dans le
        controlle ou autres :
        <ul>
            <li>
                <code>redirect()</code> qui permet depuis le controller de faire une redirection avec la possibilité
                d'y ajouter un paramètre.
            </li>
            <li>
                <code>datediff()</code> qui fait la différence entre deux dates et renvoie la valeur de timestamp
                de leurs soustraction.
            </li>
            <li>
                <code>getCurrentRoute()</code> retour la route sur laquelle nous sommes.
            </li>
            <li>
                <code>env()</code> qui permet de retourner une valeur du fichier .env
            </li>
        </ul>
    </p>
    <h2>Page d'erreur</h2>

    <p>
        Les erreurs sont gérées automatiquement dans le système du framework, il suffit juste de personnaliser
        sa page d'erreur au niveau du fichier <code>templates/errors/default.html.twig</code>
    </p>
    <BlocCodeTwigComponents :code="twig" el="twig" />
</template>

<script>
import BlocCodeComponents from '../Code/BlocCodeComponents.vue'
import BlocCodeTwigComponents from '../Code/BlocCodeTwigComponents.vue';

export default {
    name: "TemplateComponents",
    components: { BlocCodeComponents, BlocCodeTwigComponents },
    data() {
        return {
            controller: `<?php

namespace App\\Controllers;

use Twig\\Environment;
use Twig\\Loader\\FilesystemLoader;
use App\\TwigExtensions;

class Controller
{
    private $loader;
    protected $twig;

    public function __construct()
    {
        $this->loader = new FilesystemLoader('./templates');

        $this->twig = new Environment($this->loader);
        $customExtension = new TwigExtensions();
        $this->twig->addExtension($customExtension);
    }
}`,
            controller2: `<?php

namespace App\\Controllers;

use App\\Controllers\\Controller;

class UserController extends Controller
{
    public function getUser()
    {
        return $this->twig->render('user/detail.html.twig', [
            'user' => 'paramètre'
        ]);
    }
}`,
twigext: `<?php

namespace App;

use Twig\\Extension\\AbstractExtension;
use Twig\\TwigFunction;
use App\\Request;

class TwigExtensions extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('route', 'route'),
        ];
    }
}`,
            route: `<?php \nfunction route(string $name, array $param = null): string
{
    return Request::route($name, $param);
}`,
            retour: `<?php \nnew TwigFunction('route', 'route')`,
            twig: `{% extends 'base.html.twig' %}

{% block title %}404{% endblock %}

{% block content %}
    <h1>Error {{ code }}</h1>
    <p>{{ message }}</p>
{% endblock %}`
        }
    }
}
</script>


