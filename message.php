<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $companyname = htmlspecialchars($_POST['cname']);
  $form_subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "info@hariyalicrop.co.in"; 
      $subject = "[Inquiry From Website]From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nContact No : $phone\nCompany Name : $companyname\nSubject: $form_subject\nMessage: $message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Your message has been sent";
      }else{
         echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Enter a valid email address!";
    }
  }else{
    echo "Email and message field is required!";
  }
?>




