import '../../semantic/dist/components/tab.min.css'
import '../../semantic/dist/components/tab.min.js'
import '../../semantic/dist/components/popup.min.css'
import '../../semantic/dist/components/popup.min.js'
import '../../semantic/dist/components/breadcrumb.min.css'

import '../../vendors/unslider/dist/css/unslider.css'
import '../../vendors/unslider/dist/css/unslider-dots.css'
import '../../vendors/unslider/dist/js/unslider-min.js'
// import '../../vendors/flexslider/jquery.flexslider-min.js'
// import '../../vendors/flexslider/flexslider.css'

import '../../styles/templates/profiles/profile.scss'

$(function() {
    var profile_username = $('.profile_username').text()

	init() 
	init_rating()
	service_click_event()
	register_modal() 
	send_message_modal()
	send_comment($server_id)
	use_unslider()

	function init() {
		$('.profile_home .ui.dropdown')
		  .dropdown()
		;

	    $('.menu .item')
		  .tab()
		;

		$('.menu .all_services')
		  .popup({
		    on: 'click',
		    position : 'bottom right',
		  })
		;

	}

	function init_rating() {
		$('.ui.comments .ui.rating').rating('disable');
		$('.ui.form .ui.rating').rating();
	}

	function service_click_event() {
		var service_index = $server_id != 'all' ? $server_id : 0
		$('.click_service').click(function(event) {
			var service_id = $(this).data('service')
			var $div = $(this)
			get_rating_and_form({'service_id' : service_id }, function() {
				init_rating()
				send_comment(service_id)

				$('.service_' + service_index).hide()
				$('.service_' + service_id).show()
				$('.service_length').hide()
				$('.service_title').text($div.find('td').eq(0).text()).show()
				$('.menu .all_services').popup('hide')
				service_index = service_id
			})
		});

		$('.click_about_me').click(function(event) {
			get_rating_and_form({'service_id' : 'all'}, function() {
				init_rating()

				$('.service_title').hide()
				$('.service_length').show()
			})
		});
	}

	function get_rating_and_form(temp, cb) {
		var url = '/profiles/' + profile_username + '/get_rating_and_form/'
	    $.get(url, temp, function(result){
	    	$('.rating_box').empty().html(result)
	    	cb && cb()
        })
	}

	function register_modal() {
		$(".not_login").click(function() {
	    	$('.register_modal')
			  .modal('show')
			;
	    });

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
	}

	function send_message_modal() {
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
	}

	function send_comment(service_id) {
		$('.ui.form.rating_form .submit').click(function() {
			console.log('fdfd')
			var stars = $('.ui.form.rating_form .ui.rating .icon.active').size()
			var comment = $("#id_comment").val()
			if(stars == "0") {
				return alert('请选择合适的满意度')
			}
			if(comment == "") {
				return alert('请输入评价')
			}

	        var temp = {
	        	'stars' : stars,
	        	'comment' : comment,
	        	'service_id' : service_id
	        }

	        var url = '/profiles/' + profile_username + '/get_rating_and_form/'
	        $.post(url, temp, function(result){
	        	$('.rating_box').empty().html(result)
	        	init_rating()
	        })
		})
	}

	function use_unslider() {
		$('.banner').unslider({
			arrows: true 
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
})
