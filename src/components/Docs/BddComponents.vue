<template>
    <h1>Bdd</h1>
    <h2>Connexion</h2>

    <p>
        Lors de l'installation vous avez définie les variables pour la connexion à votre base de données.
        Si ce n'est pas fait vous pouvez toujours le faire en regardant cette partie 
        <router-link class="link" :to="{ name: 'docs_detail', params: {components: 'installation'} }">Installation</router-link>.
    </p>
    <BlocCodeComponents :code="env" el="env" />

    <p>
        La connexion à la base de données se fait automatiquement via le fichier <code>app/Models/Model.php</code>
        qui fait une connexion à une bdd mysql. Si vous avez une autre base de données vous pouver changer la connexion
        ici :
    </p>
    <BlocCodeComponents :code="model" el="model" />

    <h2>Exemple utilisation</h2>

    <p>
        Comme nous avons pu voir dans la partie <router-link class="link" :to="{ name: 'docs_detail', params: {components: 'rooting'} }">rooting</router-link>
        nous pouvons appeler des <code>Model</code> dans le controller. Nous allons donc créer le Model <code>User</code>.
    </p>
    <div class="code">
        <code>
            app/Models/User.php
        </code>
    </div>
    <BlocCodeComponents :code="modelUser" el="modelUser" />

    <p>
        Ici nous avons créé la fonction <code>getUserById</code> du Model User, on fait un extends de Model pour pouvoir
        hériter du consctruteur de ce dernier et faire notre reqêtes SQL.
        <br><br>
        Ensuite nous pouvons appeler notre Model dans le Controller <code>UserController</code>.
    </p>

    <BlocCodeComponents :code="controller" el="controller" />

</template>

<script>
import BlocCodeComponents from '../Code/BlocCodeComponents.vue'

export default {
    name: 'BddComponents',
    components: {
        BlocCodeComponents
    },
    data() {
        return {
            env: `# ### SETTINGS BDD ###

# DB_NAME = 'YOUR_DB_NAME'
# DB_USER = 'YOUR_DB_USER'
# DB_PASSWORD = 'YOUR_DB_PASSWORD'
# DB_HOST = 'YOUR_DB_HOST'`,
            model: `<?php

namespace App\\Models;

class Model
{
    protected $db;

    public function __construct()
    {
        $host = env('DB_HOST');
        $dbuser = env('DB_USER');
        $dbpwd = env('DB_PASSWORD');
        $dbname = env('DB_NAME');
        $pdoReqArg1 = "mysql:host=". $host .";dbname=". $dbname .";";
        $pdoReqArg2 = $dbuser;
        $pdoReqArg3 = $dbpwd;
        
        try {

            $this->db = new \\PDO($pdoReqArg1, $pdoReqArg2, $pdoReqArg3);
            $this->db->setAttribute(\\PDO::ATTR_CASE, \\PDO::CASE_LOWER);
            $this->db->setAttribute(\\PDO::ATTR_ERRMODE , \\PDO::ERRMODE_EXCEPTION);
            $this->db->exec("SET NAMES 'utf8'");

        } catch(\\PDOException $e) {

            $errorMessage = $e->getMessage();
            echo $errorMessage;
        }
    }
}`,
            modelUser: `<?php

namespace App\\Models;

class User extends Model
{
    public function getUserById(int $id_user): array
    {
        $qry = "SELECT * FROM User WHERE id_user = :id_user";
        $stt = $this->db->prepare($qry);
        $stt->execute([
            ':id_user' => $id_user
        ]);

        return $stt->fetch(\\PDO::FETCH_COLUMN);
    }
}`,
            controller: `<?php

namespace App\\Controllers;

use App\\Controllers\\Controller;
use App\\Models\\User;

class UserController extends Controller
{
    public function getUser(int $id_user)
    {
        $userModel = new User();
        $user = $userModel->getUserById($id_user);

        return $this->twig->render('user/detail.html.twig', [
            'user' => $user
        ]);
    }
}`
            
        }
    }
}
</script>