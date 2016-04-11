import '../../styles/templates/core/help.scss'

$(function() {
	init() 

	function init() {
	    $('.ui.sticky')
	      .sticky({
	        context: '.help_context',
	        offset: 30,   
	      })
	    ;


	    $('.ui.accordion').accordion({
	    	exclusive: false,
	    	onChange: function() {
			    $('.ui.sticky')
				  .sticky('refresh')
				;
	    	}
	    });
	}
})