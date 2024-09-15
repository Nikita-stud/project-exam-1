<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$to = "nikita151998de@gmail.com";

$messageToSend = "From $name at $email about $subject with the Inquiry: $message"

if(mail($to, $subject, $messageToSend)){
  echo "Email sent successfully";
}


?>