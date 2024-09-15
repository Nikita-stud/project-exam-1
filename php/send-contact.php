<?php

$name = $_GET["name"];
$email = $_GET["email"];
$subject = $_GET["subject"];
$message = $_GET["message"];

$to = "nikita151998de@gmail.com";

$messageToSend = "From $name at $email about $subject with the Inquiry: $message"

if(mail($to, $subject, $messageToSend)){
  echo "Email sent successfully";
}else{
  echo "Mail not sent";
}


?>