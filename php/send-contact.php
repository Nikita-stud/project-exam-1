<?php

$name = $_GET["name"];
$email = $_GET["email"];
$subject = $_GET["subject"];
$message = $_GET["message"];

$to = "dev-email@wpengine.local";

$messageToSend = "From $name at $email about $subject with the Inquiry: $message";


//Did not install Ubuntu for mail()

if(mail($to, $subject, $messageToSend)){
  echo "Email sent successfully";
}else{
  echo "Mail not sent";
}


?>