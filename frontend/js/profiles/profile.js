import '../../styles/templates/profiles/profile.scss'
import '../../semantic/dist/components/tab.min.css'
import '../../semantic/dist/components/tab.min.js'
// import '../../vendors/galleria/galleria-1.4.2.js'


$(function() {
	init() 

	function init() {
	    $('.ui.comments .ui.rating').rating('disable');

	    $(".not_login").click(function() {
	    	$('.ui.long.test.modal')
			  .modal('show')
			;
	    });

	    $('.menu .item')
		  .tab()
		;

		$('.ui.dropdown')
		  .dropdown()
		;

	    $('.submit').click(function() {
	    	var temp = $('.register-content').serialize(); 

		    $.post('/profiles/shuimu1/', temp, function(result){
		    	console.log(result)
		    	if(result.success == 'ok') {
		    		window.location.href = window.location.href.replace(window.location.pathname, result.redirect_to)
		    		return;
		    	}
		    	$('.register-content').empty()
		    	$('.register-content').html(result)
		    	$('.ui.long.test.modal')
				  .modal('refresh')
				;
            })
	    });

		// Galleria.loadTheme('/themes/classic/galleria.classic.min.js');
	 //    Galleria.run('#galleria');
	}
})
