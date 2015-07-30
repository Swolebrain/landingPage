jQuery(function () {
	"use strict";
    
    /*global jQuery, $*/
	jQuery(document).ready(function(){
		
		
		// Parallax 
		$('.lead-header-area').parallax("50%", 0.1);
		$('.about-more-area').parallax("50%", 0.1);
		$('.cta-area').parallax("50%", 0.1);
		
		// OWL Carousel
		$("#owl-example").owlCarousel({
 
			autoPlay: 3000, //Set AutoPlay to 3 seconds
			items : 2,
			itemsDesktop : [1199,2],
			itemsDesktopSmall : [979,2]
 
		});
		
		
	});
	
// Function for email address validation
	function isValidEmail(emailAddress) {

	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

		return pattern.test(emailAddress);

	};
	function isValidPhone(phone) {
		var pattern = new RegExp(/^\(?[0-9]{3}\)?[ -]?[0-9]{3}[ -]?[0-9]{4}/i);
		return pattern.test(phone);
	}
	/* =================================
	  CONTACT FORM         
	=================================== */
    $("#contactform").submit(function (e) {
        e.preventDefault();
        var name = $("#cf-name").val();
		var arr = name.split(" ");
		var fname = arr[0];
		var lname = arr[arr.length-1];
        var email = $("#cf-email").val();
        var message = $("#cf-phone").val();
        var dataString = 'FirstName=' + fname + '&LastName=' + lname + '&Email=' + email;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(email) && (message.length > 1) && (name.length > 1) && isValidPhone(message)) {
            $.ajax({
                type: "POST",
                url: "https://secure.velocify.com/Import.aspx?Provider=FloridaVocational&Client=30010&CampaignId=1057",
                data: dataString,
                success: function () {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                },
				error: function(jqXHR, status, err ){
					console.log(status);
					console.log(err);
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
        }
        return false;
    });		
	
}());