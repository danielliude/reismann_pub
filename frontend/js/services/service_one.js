import '../../styles/templates/services/service_one.scss'

$(function() {
	init() 
	init_rating()
	send_message()

	function init() {
	    $('.all_buttons .ui.dropdown')
		  .dropdown()
		;
		
		$(".not_login").click(function() {
	    	$('.register_modal')
			  .modal('show')
			;
	    });


	    $('.message_modal, .second.modal')
		  .modal({
		    allowMultiple: false
		  })
		;
		$('.second.modal')
		  .modal('attach events', '.message_modal.modal .close')
		;
	    $(".send_message").click(function() {
	    	$('.message_modal')
			  .modal('show')
			;
	    });

	    $('.register_modal .submit').click(function() {
	    	var temp = $('.register-content').serialize(); 

		    $.post(window.location.pathname.substring(0, window.location.pathname.indexOf('services')), temp, function(result){
		    	if(result.success == 'ok') {
		    		window.location.href = window.location.href.replace(window.location.pathname, result.redirect_to)
		    		return;
		    	}
		    	$('.register-content').empty()
		    	$('.register-content').html(result)
		    	$('.register_modal')
				  .modal('refresh')
				;
	        })
	    });

	    $('.message_modal .submit').click(function() {
	    	var temp = $('.message-content').serialize(); 

		    $.post(window.location.pathname.substring(0, window.location.pathname.indexOf('services')), temp, function(result){
		    	if(result.success == 'ok') {
			    	$('.second_modal')
					  .modal('show')
					;
		    		return;
		    	}
		    	$('.message-content').empty()
		    	$('.message-content').html(result)
		    	$('.message_modal')
				  .modal('refresh')
				;
	        })
	    });
	}


	function init_rating() {
		$('.ui.comments .ui.rating').rating('disable');
		$('.ui.form .ui.rating').rating();
		
	}
	function send_message() {
		$('.ui.form .submit').click(function() {
			var stars = $('.ui.form .ui.rating .icon.active').size()
			var comment = $("#id_comment").val()
			if(stars == "0") {
				return alert('please star rating')
			}
			if(comment == "") {
				return alert('please comment')
			}

	        var temp = {
	        	'stars' : stars,
	        	'comment' : comment
	        }
	        $.post('', temp, function(result){
	        	location.href = location.href
	        })
		})
	}
})