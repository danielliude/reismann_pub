import '../../semantic/dist/components/sticky.min.css'
import '../../semantic/dist/components/sticky.min.js'
import '../../semantic/dist/components/accordion.min.css'
import '../../semantic/dist/components/accordion.min.js'
import '../../semantic/dist/components/breadcrumb.min.css'

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