<template>
    <h1>Mail</h1>

    <h2>Configuration</h2>

    <p>
        Comme vu dans <router-link class="link" :to="{ name: 'docs_detail', params: {components: 'installation'} }">l'installation</router-link>
        pour la configuration des valeurs du serveur de mail. Sinon il suffit d'ajouter cela au fichier <code>.env</code>.
    </p>
    <BlocCodeComponents :code="env" el="env"/>

    <p>
        Une fois la configuration faite nous pouvons nous penché sur le fichier qui gère l'envoi de mail avec 
        PHPMailer dans le fichier <code>app/Models/Mail.php</code>
    </p>

    <BlocCodeComponents :code="mail" el="mail" />

    <p>
        Nous pouvons donc envoyer un mail directement depuis le controller en appelant le Model Mail, grâce au
        constructeur de ce dernier la connexion à votre serveur de mail se fait automatiquement et nous pouvons 
        envoyer un mail avec la méthode <code>send()</code>. Il faut renseigner le mail du réceptionneur, l'objet
        du mail, et son body qui peut être un fichier twig stocké dans <code>template/mail/</code>.
    </p>

    <BlocCodeComponents :code="controller" el="controller" />

</template>

<script>
import BlocCodeComponents from '../Code/BlocCodeComponents.vue'

export default {
    name: 'MailComponents',
    components: {
        BlocCodeComponents
    },
    data() {
        return {
            env: `# ### SETTINGS EMAIL ###

# HOST_MAIL = 'YOUR_HOST_EMAIL'
# USER_MAIL = 'YOUR_USER_EMAIL'
# PASSWORD_MAIL = 'YOUR_PASSWORD_EMAIL'
# PORT_MAIL = 'YOUR_PORT_EMAIL'
# EMAIL_SENT_FROM = 'YOUR_EMAIL_TO_SEND'`,
            mail: `<?php

namespace App\\Models;

use PHPMailer\\PHPMailer\\PHPMailer;
use PHPMailer\\PHPMailer\\Exception;

class Mail
{
    protected $email;

    public function __construct()
    {
        $this->email = new PHPMailer();
        $this->email->isSMTP();
        $this->email->Host = env('HOST_MAIL');
        $this->email->SMTPAuth = true;
        $this->email->Username = env('HOST_MAIL');
        $this->email->Password = env('PASSWORD_MAIL');
        $this->email->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $this->email->Port = env('PORT_MAIL');
    }

    public function send($emailTo, $subject, $body)
    {
        try {
            $this->email->setFrom(env('EMAIL_SENT_FROM'));
            $this->email->addAddress($emailTo);
    
            $this->email->isHTML(true);
            $this->email->Subject = $subject;
            $this->email->Body = $body;
    
            $this->email->send();
            return true;
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$this->email->ErrorInfo}";
        }
    }
}`,
            controller: `<?php

namespace App\\Controllers;

use App\\Controllers\\Controller;
use App\\Models\\Mail;
use App\\Models\\User;

class UserController extends Controller
{
    public function getUser(int $id_user)
    {
        $userModel = new User();
        $user = $userModel->getUserById($id_user);

        $subject = 'Demande de contact';

        $body = $this->twig->render('mail/demande_paiement.html.twig', ['name' => $user['name']]);

        $email = new Mail();
        $r = $email->send($user['email'], $subject, $body);

        return $this->twig->render('user/detail.html.twig', [
            'user' => $user
        ]);
    }
}`
        }
    }
}
</script>