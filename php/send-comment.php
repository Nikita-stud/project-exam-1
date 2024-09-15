<?php

$message = $_POST["message"];
$subject = "Feedback on the posts"

$to = "dev-email@wpengine.local";


//Did not install Ubuntu for mail()

if(mail($to, $subject , $messageToSend)){
  echo "Email sent successfully";
}else{
  echo "Mail not sent";
}


?>