<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$to = "dev-email@wpengine.local";

$messageToSend = "From $name at $email about $subject with the Inquiry: $message";


//Did not install Ubuntu for mail()

if(mail($to, $subject, $messageToSend)){
  echo "Email sent successfully";
}else{
  echo "Mail not sent";
}


?>