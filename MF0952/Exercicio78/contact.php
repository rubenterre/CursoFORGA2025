<?php

if (!$_POST) exit;

// Email verification function
function isEmail($email_contact) {
    return (preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/", $email_contact));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$email_contact = $_POST['email_contact'];

if (trim($email_contact) == '') {
    echo '<div class="error_message">Por favor, introduce un email válido.</div>';
    exit();
} else if (!isEmail($email_contact)) {
    echo '<div class="error_message">Has introducido un email no válido, por favor inténtalo otra vez.</div>';
    exit();
}

$address = "info@rubenterre.com";

// Email subject
$e_subject = 'Nuevo contacto desde el formulario';

// Email content
$e_body = "Has sido contactado por un usuario con el siguiente email:" . PHP_EOL . PHP_EOL;
$e_content = "Email: $email_contact" . PHP_EOL . PHP_EOL;

$msg = wordwrap($e_body . $e_content, 70);

$headers = "From: $email_contact" . PHP_EOL;
$headers .= "Reply-To: $email_contact" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

$user = "$email_contact";
$usersubject = "Gracias por contactarnos";
$userheaders = "From: info@rubenterre.com\n";
$usermessage = "Gracias por contactar con nosotros. Te responderemos lo antes posible.";

mail($user, $usersubject, $usermessage, $userheaders);

if (mail($address, $e_subject, $msg, $headers)) {
    // Success message
    echo "<div id='success_page' style='padding:20px 20px 20px 0'>";
    echo "<strong>Email enviado.</strong>";
    echo "Gracias, tu mensaje ha sido enviado correctamente. Te contactaremos lo antes posible.";
    echo "</div>";
} else {
    error_log("Error al enviar el correo a $address");
    echo 'ERROR!';
}
