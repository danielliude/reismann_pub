import '../../styles/templates/profiles/profile.scss'

$(function() {
	init() 

	function init() {
	    $('.ui.sticky')
	      .sticky({
	        context: '.profile_content',
	        offset: 0,   
	      })
	    ;
	}
})