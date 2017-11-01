<?php
// Check for empty fields
if(empty($_POST['rate'])      ||
   empty($_POST['message'])   )
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = empty($_POST['name']) ? 'anonymous' : strip_tags(htmlspecialchars($_POST['name']));
$rate = strip_tags(htmlspecialchars($_POST['rate']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'hernan@localhost'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Feedback:  $name";
$email_body = "You have received a Feedback.\n\n"."Here are the details:\n\nName: $name\n\nRate: $rate\n\nMessage:\n$message";
$headers = "From: noreply@localhost\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: noreply@localhost";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
