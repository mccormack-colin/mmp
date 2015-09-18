$(document).ready(function () {
	$('a[href^="#"]').click(function(event){
	    event.preventDefault();
	    $('html, body').animate({ scrollTop: $( $.attr(this, 'href') ).offset().top }, 700);
	});

	$('#contact-form').submit(function() {
        $.ajax({
	        url: "https://docs.google.com/forms/d/1o4YWNW2-z8w_Lc6FLiPJUZ4SAU9Xi0yDDYFzQyqVyZQ/formResponse",
	        data: {
	        	"entry.1061912685": $('#inputName', this).val(), 
	        	"entry.1262036382": $('#inputEmail', this).val(), 
	        	"entry.1814817805": $('#inputTel', this).val(),
	        	"entry.1142611550": $('#inputSession', this).val(),
	        	"entry.584969321": $('#inputDate', this).val(),
	        	"entry.1228634635": $('#inputMessage', this).val()
	        },
	        type: "POST",
	        dataType: "xml",
	        statusCode: {
	            0: function() {
	                $('#inputName', '#contact-form').val(""); 
	        		$('#inputEmail', '#contact-form').val("");
	        		$('#inputTel', '#contact-form').val("");
	        		$('#inputSession', '#contact-form').val("");
	        		$('#inputDate', '#contact-form').val("");
	        		$('#inputMessage', '#contact-form').val("");
	                $("#confirmModal").modal();
	            }
	        }
	    });
        return false;
    });
});


