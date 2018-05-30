<html>
  <head>
    <title>
      Offshore Software Development Company India,Offshore Development,IT Outsourcing
      India
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="images/rapidtech.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" language="javascript1.2" src="images/include_script.js"></script>
  </head>
  <body>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <!--Start of Header-->
          <script type="text/javascript">                    ajaxinclude("header.html")</script>
          <!--End of Header-->
        </td>
      </tr>
      <tr>
        <td valign="top">
          <table id="main" align="center" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td valign="top">
                <!--Start of Headerinner-->
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="776">
                      <img src="images/Inner-main-img.jpg"></img>
                    </td>
                    <td class="imagediv">
                      Shifting Business Thoughts to Reality
                    </td>
                  </tr>
                </table>
                <!--End of Headerinner-->
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="22%" valign="top" style="padding-left: 10px; padding-top: 50px">
                      <!--Start of Left Sidebar-->
                      <script type="text/javascript">                                            ajaxinclude("sidebar.html")</script>
                      <!--End of Left Sidebar-->
                    </td>
                    <td valign="top">
                      <table width="98%" border="0" cellspacing="0" cellpadding="0" height="500">
                        <tr>
                          <td align="left" valign="top">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
									<td class="innerheading">
										<img src="images/head-arrow.gif" width="8" height="9">&nbsp;REQUEST A QUOTE
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
												  // your error code can go here         
												  echo "We are very sorry, but there were error(s) found with the form you submitted. ";         
												  echo "These errors appear below.<br /><br />";         
												  echo $error."<br /><br />";         
												  echo "Please go back and fix these errors.<br /><br />"; 
												  //echo var_dump($_POST);
												  die();     
												  } 

												  // validation expected data exists     
												  if(!isset($_POST['name']) ||         
												  !isset($_POST['subject']) ||        
												  !isset($_POST['email']) ||         
												  !isset($_POST['phone']) ||         
												  !isset($_POST['details'])||         
												  !isset($_POST['seRequest'])||         
												  !isset($_POST['website'])||         
												  !isset($_POST['seHear'])) 
												  {         
												  died('We are sorry, but there appears to be a problem with the form you submitted.');            
												  } 
  
												  //Get field data for email
												  $name = $_POST['name'] ;
												  $email = $_POST['email'] ;
												  $subject = $_POST['subject'] ;
												  $phone = $_POST['phone'] ;
												  $text = $_POST['details'];
												  $request = $_POST['seRequest'] ;
												  $website = $_POST['website'] ;
												  $hear = $_POST['seHear'] ;
												  //$file = $_POST['file'];

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
												  $website_exp = '/^((http:\/\/www\.)|(www\.)|(http:\/\/))[a-zA-Z0-9._-]+\.[a-zA-Z.]{2,5}$/'; 
												   if($website != "") {    
													  if(!preg_match($website_exp,$website)) {     
														$error_message .= 'The Website you entered does not appear to be valid.<br />';   
													  }
												  }
												  if(strlen($text) < 1) {     
												  $error_message .= 'The Details you entered do not appear to be valid.<br />';   
												  }   
												  if(strlen($subject) < 1) {     
												  $error_message .= 'The Subject you entered do not appear to be valid.<br />';   
												  }
												  if($request == "") {     
												  $error_message .= 'The Request For selected value do not appear to be valid.<br />';   
												  }
												  if($hear == "") {     
												  $error_message .= 'The Hear From selected value do not appear to be valid.<br />';   
												  }
												  if(strlen($error_message) > 0) {
												    echo "We are very sorry, but there were error(s) found with the form you submitted.<br /><br /> ";         
													echo "<span>These errors appear below.</span><br /><br />";         
													echo $error_message."<br /><br />";         
													echo "Please go back and fix these errors.<br /><br />";     
												  //died($error_message);   
												  } 
												  else
												  {
													  // create email headers 
													  $headers = 'From: '.$email."\r\n". 'Reply-To: '.$email."\r\n" . 'X-Mailer: PHP/' . phpversion();
  
													  //Create complete email body
													  $message .="Hi Rapidsoftech \n\n";
													  $message .="Someone want to contact you regarding a business proposal. Below are the details for that: \n\n";
													  $message .= "Name: $name \n\n";      
													  $message .= "Email: $email \n\n";   
													  $message .= "Phone: $phone \n\n";
													  $message .= "Subject: $subject \n\n"; 
													  $message .= "Current Website: $website \n\n";
													  $message .= "Request for: $request \n\n";
													  $message .= "Hear from: $hear \n\n";
													  $message .= "Details: \n\n";
													  $message .= "$text";
                                
													  //send email
													  @mail("ash_mechin@yahoo.com", "For Quote| $subject",$message, $headers);
  
													  echo "We have received your Email and we will revert back to you shortly for your queries.";
													  /*$host  = $_SERVER['HTTP_HOST'];
													  $uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
													  $extra = 'contact.php';
													  header("Location: http://$host$uri/$extra?msg=1");*/
													}
												 }
												else
												 //if "email" is not filled out, display the form
												 {
													died('The Email Address you entered does not appear to be valid.');
												  /*$host  = $_SERVER['HTTP_HOST'];
												  $uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
												  $extra = 'contact.html';
												  header("Location: http://$host$uri/$extra?msg=0");*/
												  }

												?>
											  </div>
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
                          <td align="left" colspan="2">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="innerheading">
                                  <img src="images/head-arrow.gif" width="8" height="9">&nbsp;REACH US
                                                            </td>
                              </tr>
                              <tr height="1">
                                <td class="dotline">
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td class="sidelinksCurrent">
                            <img src="images/arrow.gif" width="7" height="8">
                                                </td>
                          <td class="sidelinksCurrent">
                            <a href="contact.htm">Contact Us</a>
                          </td>
                        </tr>
                        <tr>
                          <td class="sidelinks">
                            <img src="images/arrow.gif" width="7" height="8">
                                                </td>
                          <td class="sidelinks">
                            <a href="quote.htm">Request a Quote</a>
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
          <!--Start of Header-->
          <script type="text/javascript">                    ajaxinclude("footer.html")</script>
          <!--End of Header-->
        </td>
      </tr>
    </table>
  </body>
</html>




