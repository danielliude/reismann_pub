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

	    $(".not_login").click(function() {
	    	alert('please login for this action')
	    });
	}
})