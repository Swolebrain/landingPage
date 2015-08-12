jQuery(function () {
	"use strict";
    
    /*global jQuery, $*/
	jQuery(document).ready(function(){
		
		
		// Parallax 
		$('.lead-header-area').parallax("20%", 0);
		$('.about-more-area').parallax("50%", 0);
		$('.cta-area').parallax("50%", 0);
		
		// OWL Carousel
		$("#owl-example").owlCarousel({
 
			autoPlay: 3000, //Set AutoPlay to 3 seconds
			items : 2,
			itemsDesktop : [1199,2],
			itemsDesktopSmall : [979,2]
 
		});
		
		
	});
	

	/* =================================
	  CONTACT FORM         
	=================================== */
	/*$("#contactform").submit(function(e){
		e.preventDefault();
		submitForm(e);
	});*/
	/*$("#submit").click(function(){
		submitForm();
	});*/
	
	
}());

// Function for email address validation
function isValidEmail(emailAddress) {

var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

	return pattern.test(emailAddress);

};
function isValidPhone(phone) {
	var pattern = new RegExp(/^\(?[0-9]{3}\)?[ -]?[0-9]{3}[ -]?[0-9]{4}/i);
	return pattern.test(phone);
}
function submitForm(e) {
	//if (e) e.preventDefault();
	var name = $("#cf-name").val();
	var arr = name.split(" ");
	var fname = arr[0]; $("#FirstName").val(fname);
	var lname = arr[arr.length-1]; $("#LastName").val(lname);
	var email = $("#cf-email").val();
	var message = $("#cf-phone").val();
	var velocifyQueryString = 'FirstName=' + fname + '&LastName=' + lname + '&Email=' + email +
	"&ProgramName=Web+and+Application+Development+Engineer&PhoneNumber=";

	function isValidEmail(emailAddress) {
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	};
	if (isValidEmail(email) && (message.length > 1) && (name.length > 1) && isValidPhone(message)) {
		
		var ynotQueryString = "address=unknown&program_id=5168"+ 
		"&first_name="+fname+"&last_name="+lname+
		"&day_phone="+message+"&email="+email;
		ynotQueryString += "&city=Miami&grad_year="+new Date().getFullYear();
		ynotQueryString += "&lead_source_id=5&location_id=1169&state_id=9";
		ynotQueryString += "&zipcode=00000&level_of_education_id=590";
		
		$.ajax({
			type: "POST",
			url: "http://api.ynotlms.com/leads-test.json",
			data: ynotQueryString,
			async: false,
			success: function (data, textStatus, jqXHR) {
				$('.success').fadeIn(1000);
				$('.error').fadeOut(500);
				console.log(data);
			},
			error: function(jqXHR, status, err ){
				console.log(status);
				console.log(err);
				return false;
			}
		});
		
	}
	else {
		if (!isValidEmail(email)) {
			$(".error").html('<span class="colored-text icon_error-circle_alt"></span> Please enter a valid email address.');
		}
		else if (!isValidPhone(message)){
			console.log("validating number: "+message);
			$(".error").html('<span class="colored-text icon_error-circle_alt"></span> Please enter a valid phone number.');
		}
		else{
			$(".error").html('<span class="colored-text icon_error-circle_alt"></span> All fields must be completed.');
		}
		$('.error').fadeIn(1000);
		$('.success').fadeOut(500);
		return false;
	}
	
}