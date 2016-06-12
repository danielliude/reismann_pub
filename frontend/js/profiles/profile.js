import '../../semantic/dist/components/tab.min.css'
import '../../semantic/dist/components/tab.min.js'
import '../../semantic/dist/components/breadcrumb.min.css'
// import '../../vendors/galleria/galleria-1.4.2.js'

import '../../styles/templates/profiles/profile.scss'

$(function() {
	init() 

	service_click_event()

	function service_click_event() {
		var service_index = 0
		$('.click_service').click(function(event) {
			var service_id = $(this).data('service')
			$('.service_' + service_index).hide()
			$('.service_' + service_id).show()
			service_index = service_id
		});
	}

	function equal_width() {
	    var width = 0 
	    $(".equal_width").each(function() {
	      if(width < parseInt($(this).width())) {
	        width = parseInt($(this).width())
	      }
	    })

	    if(width) {
	      $(".equal_width").css({
	        width: width+20,
	      });
	    }
		
	}

	function init() {
	    $('.ui.comments .ui.rating').rating('disable');

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

	    $('.menu .item')
		  .tab()
		;

		$('.profile_home .ui.dropdown')
		  .dropdown()
		;


	    $('.register_modal .submit').click(function() {
	    	var temp = $('.register-content').serialize(); 

		    $.post(window.location.href, temp, function(result){
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

		    $.post(window.location.href, temp, function(result){
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

		// Galleria.loadTheme('/themes/classic/galleria.classic.min.js');
	 //    Galleria.run('#galleria');
	}
})
