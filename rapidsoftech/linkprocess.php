<?php
    ob_start();
?>
<html>
<head>
    <title>Untitle</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="tech.css" rel="stylesheet" type="text/css" />
</head>
<body>
   
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td>
				 <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="header" align="center">
                            <table width="998" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="left" width="30%" style="padding-left: 30;">
                                        
                                    </td>
                                    <td align="right" class="toplink" style="padding-right: 30;">
                                        
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="dotline">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <table id="main" align="center" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td valign="top">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="22%" valign="top" style="padding-left: 10px; padding-top: 50px">
										<table width="90%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="innerheading">
                                                    <img src="images/head-arrow.gif" width="8" height="9">
                                                </td>
                                                <td class="innerheading">
                                                    &nbsp;Text to change
                                                </td>
                                            </tr>
                                            <tr height="1">
                                                <td colspan="2" class="dotline">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="infolinks">
                                                    <img src="images/arrow.gif" width="7" height="8">
                                                </td>
                                                <td class="infolinks">
                                                    <a href="contact.htm">Link</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="infolinks">
                                                    <img src="images/arrow.gif" width="7" height="8">
                                                </td>
                                                <td class="infolinks">
                                                    <a href="quote.htm">Link</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="infolinks">
                                                    <img src="images/arrow.gif" width="7" height="8">
                                                </td>
                                                <td class="infolinks">
                                                    <a href="profile.pdf" target="_blank">Link</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td valign="top">
                                        <table width="98%" border="0" cellspacing="0" cellpadding="0" height="500">
                                            <tr>
                                                <td align="left" valign="top">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="innerheading">
                                                                <img src="images/head-arrow.gif" width="8" height="9">&nbsp;Form
                                                            </td>
                                                        </tr>
                                                        <tr height="1">
                                                            <td class="dotline">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="innertext">
                                                                <div id="content" align="justify">
                                                                    <p>
                                                                        <span>We are very happy to know that you want to reach us. Thanks for contacting.</span>
                                                                    </p>
                                                                    <p>
                                                                        <div>
																			<?php
																			/* Redirect to a different page in the current directory that was requested */
																			if (isset($_POST['email']))
																			  //if "email" is filled out, send email
																			  {
  
																				function died($error) {
																					/*$host  = $_SERVER['HTTP_HOST'];
																					$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
																					$extra = 'linkfail.htm';
																					header("Location: http://$host$uri/$extra?msg=0");*/
																					// your error code can go here         
																					echo "<div>We are very sorry, but there were error(s) found with the form you submitted.<br><br> ";         
																					echo "<span>These errors appear below.</span><br /><br />";         
																					echo $error."<br /><br />";         
																					echo "Please go back and fix these errors.<br /><br /></div>"; 
																					//echo var_dump($_POST);
																					die();     
																				} 

																				// validation expected data exists     
																				if(!isset($_POST['name']) ||         
																				!isset($_POST['subject']) ||        
																				!isset($_POST['email']) ||         
																				!isset($_POST['phone']) ||         
																				!isset($_POST['details'])) 
																				{         
																				//died('We are sorry, but there appears to be a problem with the form you submitted.');            
																				$host  = $_SERVER['HTTP_HOST'];
																				$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
																				$extra = 'linkfail.htm';
																				header("Location: http://$host$uri/$extra?msg=0");
																				} 
  
																				//Get field data for email
																				$name = $_POST['name'] ;
																				$email = $_POST['email'] ;
																				$subject = $_POST['subject'] ;
																				$phone = $_POST['phone'] ;
																				$text = $_POST['details'];
                              
																				//Validate the field values
																				$error_message = "";     
																				$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';   
																				if(!preg_match($email_exp,$email)) {     
																				$error_message .= 'The Email Address you entered does not appear to be valid.<br />';   
																				}     
																				$string_exp = "/^[a-zA-Z][a-zA-Z\s]+$/";   
																				if(!preg_match($string_exp,$name)) {     
																				$error_message .= 'The Name you entered does not appear to be valid.<br />';   
																				}   
																				$phone_exp = '/^((-?\d+\.?)|(-?\d*\.\d+))$/';   
																				if(!preg_match($phone_exp,$phone)) {     
																				$error_message .= 'The Phone Number you entered does not appear to be valid.<br />';   
																				}
																				if(strlen($text) < 2) {     
																				$error_message .= 'The Details you entered do not appear to be valid.<br />';   
																				}   
																				if(strlen($subject) < 1) {     
																				$error_message .= 'The Subject you entered do not appear to be valid.<br />';   
																				}
																				if(strlen($error_message) > 0) {   
																					echo "<div>We are very sorry, but there were error(s) found with the form you submitted.<br><br> ";         
																					echo "<span>These errors appear below.</span><br /><br />";         
																					echo $error_message."<br /><br />";         
																					echo "Please go back and fix these errors.<br /><br /></div>";    
																				//died($error_message);   
																				} 
																				else
																				{
																					// create email headers 
																					$headers = 'From: '.$email."\r\n". 'Reply-To: '.$email."\r\n" . 'X-Mailer: PHP/' . phpversion();
  
																					//Create complete email body
																					$message .="Hi \n\n";
																					$message .="Someone try to contact you. Below are the details for that: \n\n";
																					$message .= "Name: $name \n\n";      
																					$message .= "Email: $email \n\n";   
																					$message .= "Phone: $phone \n\n";
																					$message .= "Subject: $subject \n\n"; 
																					$message .= "Details: \n\n";
																					$message .= "$text";
                                
																					//send email
																					@mail("ash_mechin@yahoo.com",$subject,$message, $headers);
  
																					echo "We have received your Email and we will revert back to you shortly for your queries.";
																					/*$host  = $_SERVER['HTTP_HOST'];
																					$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
																					$extra = 'linksuccess.htm';
																					header("Location: http://$host$uri/$extra?msg=1");*/
																				}
																			 }
																			else
																			 //if "email" is not filled out, display the form
																			 {
																				died('The Email Address you entered does not appear to be valid.');
																				/*$host  = $_SERVER['HTTP_HOST'];
																				$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
																				$extra = 'linkfail.htm';
																				header("Location: http://$host$uri/$extra?msg=0");*/
																			  }

																			?>
																		  </div>
                                                                    </p>
                                                                    <p>
                                                                        Please go back and fix these errors.
                                                                    </p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
													
													
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="22%" align="center" valign="top" class="sidenav">
                                        <!--Start of Right Sidebar-->
                                        <table width="98%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="sidelinksCurrent">
                                                    <img src="images/arrow.gif" width="7" height="8">
                                                </td>
                                                <td class="sidelinksCurrent">
                                                    <a href="link.htm">link</a>
                                                </td>
                                            </tr>
                                        </table>
                                        <!--End of Right Sidebar-->
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" height="30" border="0" cellpadding="0" cellspacing="0">
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr height="1">
                        <td class="bottombar">
                        </td>
                    </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" class="footerlink" cellspacing="0">
                    <tr>
                        <td align="center">
                            <table width="998" border="0" cellpadding="0" class="footerlink" cellspacing="0">
                                <tr>
                                    <td align="center">
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td width="34%" align="left" valign="top">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tr align="center">
                                                <td>
                                                    <span>&copy; 2010 TestCompany. All Rights Reserved.</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <div class="dot-y-footer">
                                        </div>
                                    </td>
                                    <td width="3%">
                                        <div>
                                            &nbsp;
                                        </div>
                                    </td>
                                    <td width="18%" valign="top">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tr align="Left">
                                                <td class="footerheading">
                                                    Know Us
                                                </td>
                                            </tr>
                                            <tr align="Left">
                                                <td>
                                                    <a href="custom.htm">Dummy Link</a>
                                                </td>
                                            </tr>
                                            <tr align="Left">
                                                <td>
                                                    <a href="quality.htm">Dummy Link</a>
                                                </td>
                                            </tr>
                                            <tr align="Left">
                                                <td>
                                                    <a href="introduction.htm">Dummy Link</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <div class="dot-y-footer">
                                        </div>
                                    </td>
                                    <td width="3%">
                                        <div>
                                            &nbsp;
                                        </div>
                                    </td>
                                    <td width="18%" valign="top">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tr align="Left">
                                                <td class="footerheading">
                                                    Quick Links
                                                </td>
                                            </tr>
                                            <tr align="Left">
                                                <td>
                                                    <a href="terms.htm">Dummy Link</a>
                                                </td>
                                            </tr>
                                            <tr align="Left">
                                                <td>
                                                    <a href="privacy.htm">Dummy Link</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <div class="dot-y-footer">
                                        </div>
                                    </td>
                                    <td width="3%">
                                        <div>
                                            &nbsp;
                                        </div>
                                    </td>
                                    <td width="18%" valign="top">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tr align="Left">
                                                <td class="footerheading">
                                                    Reach Us
                                                </td>
                                            </tr>
                                            <tr align="Left">
                                                <td>
                                                    <a href="contact.htm">Dummy Link</a>
                                                </td>
                                            </tr>
                                            <tr align="Left">
                                                <td>
                                                    <a href="quote.htm">Dummy Link</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <div class="dot-y-footer">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>