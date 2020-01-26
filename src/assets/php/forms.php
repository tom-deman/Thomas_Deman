<link rel="stylesheet" href="../css/style.css">

<?php

// Mail destination
$destination = 'dt.deman.thomas@gmail.com';

// Errors var
$message_send    = "Your message has been successfully sent !";
$message_error   = "Error <a href=\"../html/contact.html\"> come back to try again</a>";
$message_invalid = "Error, please make sure all required fields are filled out correctly";

// check if the var return isn't NULL
if ( !isset( $_POST[ 'send' ] )) 
	echo '<p class="php_p">'.$message_error.'</p>'."\n";

// If it isn't we enter here
else {
	// Function to convert special characters in html entity
	function Rec( $text ) {
		$text = htmlspecialchars( trim ( $text ), ENT_QUOTES );
		if ( 1 === get_magic_quotes_gpc() ) 
			$text = stripslashes( $text );

		$text = nl2br( $text );
		return $text;
	}

	// Settings php var in relation with contact.html
	$name    = ( isset( $_POST[ 'name' ] ))   ? Rec( $_POST[ 'name' ] )    : '';
	$email   = ( isset( $_POST[  'email' ] )) ? Rec( $_POST[ 'email' ] )   : '';
	$message = ( isset( $_POST['message' ]))  ? Rec( $_POST[ 'message' ] ) : '';
	
	// Checking if the fields aren't empty and if the email is a valid address
	if ( ( $name != '' ) && ( $email != '' && filter_var( $email, FILTER_VALIDATE_EMAIL )) && ( $message != '' ) ) {
		
		// Technical headers php settings, kind of meta for html
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'From:'.$name.' <'.$email.'>' . "\r\n" .
				'Reply-To:'.$email. "\r\n" .
				'Content-Type: text/plain; charset="utf-8"; DelSp="Yes"; format=flowed '."\r\n" .
				'Content-Disposition: inline'. "\r\n" .
				'Content-Transfer-Encoding: 7bit'." \r\n" .
				'X-Mailer:PHP/'.phpversion();
		// Targeting my email with his var
		$target = $destination;

		$num_emails = 0;
		$tmp = explode( ';', $target );

		foreach( $tmp as $email_destination ) {
			if ( mail ( $email_destination, '', $message, $headers ))
				$num_emails ++;
		}
		// Validation message
		echo '<p class=""> <br />'.$message_send.' Back</p>';
	}

	// If an error occurs we enter here and echo the invalid var message with a come back link to try again
	else 
		echo '<p class="php_p">'.$message_invalid.'<a href="../html/contact.html"> <br /> <br /> Try again</a></p>'."\n";
}
?>
