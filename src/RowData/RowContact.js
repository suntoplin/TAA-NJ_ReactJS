// // Validation Function
// function checkName(NAME){
// 	var reName = /^[A-Za-z]+$/;
// 	return reName.test(NAME);
// }

// function checkEmail(EMAIL){
// 	 var reEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
// 	 return reEmail.test(EMAIL);
// }

// // Main Function

// function checkStatus(error){
//   var btnSubmit = document.getElementById('btnSubmit');
//   if(error >3){ 
//   	btnSubmit.disabled = false;
//   	$("#btnSubmit").css("color","blue");
//   }
// }
// var check = "<img src='Images/check.png' width='20' >";
// var uncheck = "<img src='Images/uncheck.png' width='20' >";
// var error = 0;
// btnSubmit.disabled = true;

// $("#FirstName").change(function(){
// 	if (checkName(contact[0].value)){ $("#msg0").html(check); error++;}
//   	else { $("#msg0").html(uncheck);error--;}
//   	checkStatus(error);
// });

// $("#LastName").change(function(){
// 	if (checkName(contact[1].value)){ $("#msg1").html(check); error++;}
// 	else { $("#msg1").html(uncheck);error--;}
// 	checkStatus(error);
// });

// $("#Email").change(function(){
// 	if (checkEmail(contact[2].value)){ $("#msg2").html(check); error++;}
// 	else { $("#msg2").html(uncheck);error--;}
// 	checkStatus(error);
// });

// $("#Message").change(function(){
// 	if (contact[3].value.length > 0){ $("#msg3").html(check); error++;}
// 	else { $("#msg3").html(uncheck);error--;}
// 	checkStatus(error);
// });        
// //Submitting data to server(mail.php) by Ajax
// $('#btnSubmit').click(function() {
//   $.ajax({
//     type: "post",
//     url: "Includes/mail.php",
//     data: {
//       FirstName:contact[0].value,
//       LastName: contact[1].value,
//       Email:    contact[2].value,
//       Message:  contact[3].value
//     },
//     dataType: "text"
//   }).done(function(data){
//     // Show the results
//     $("#results").html(data);
//     // clean precheck message 
//     for (var i = 0; i < contact.length; i++) { 
//       $('#msg'+i).html("");
//       contact[i].value = '';
//     };
//     // Hide Submit button
//     $('#btnSubmit').hide(1000);
//     // Redirect to contact.php after 5 second.
//     window.setTimeout(function(){window.location.href = 'contact.php';}, 5000);
//   });
//   return false;
// });