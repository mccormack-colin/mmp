$(document).ready(function () {
	$('a[href^="#"]').click(function(event){
	    event.preventDefault();
	    $('html, body').animate({ scrollTop: $( $.attr(this, 'href') ).offset().top }, 700);
	});

	$('#contact-form').submit(function() {
        $.ajax({
	        url: "https://docs.google.com/forms/d/1vUgikiGXvh6Ivdz5UlBLfQlJyALWcXhu50NwtNYm0o4/formResponse",
	        data: {
	        	"entry.764541870": "name from ajax", 
	        	"entry.15047546": "email from ajax", 
	        	"entry.35397237": "phone from ajax",
	        	"entry.198629952": "message from ajax"
	        },
	        type: "POST",
	        dataType: "xml",
	        success: function() {
	        	alert('success overall');
	        },
	        error: function() {
	        	alert('error overall');
	        },
	        complete: function() {
	        	alert('complete overall');
	        },
	        statusCode: {
	            0: function() {
	                //Success message
	                alert('succcess 0');
	            },
	            200: function() {
	                //Success Message
	                alert('succcess 200');
	            }
	        }
	    });
        return false;
    });
});


