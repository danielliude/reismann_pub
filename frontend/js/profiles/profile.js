import '../../styles/templates/profiles/profile.scss'
import '../../semantic/dist/components/tab.min.css'
import '../../semantic/dist/components/tab.min.js'

$(function() {
	init() 

	function init() {
	    // $('.ui.sticky')
	    //   .sticky({
	    //     context: '.profile_content',
	    //     offset: 0,   
	    //   })
	    // ;

	    $('.ui.comments .ui.rating').rating('disable');

	    $(".not_login").click(function() {
	    	alert('please login for this action')
	    });

	    $('.menu .item')
		  .tab()
		;

		$('.ui.dropdown')
		  .dropdown()
		;
	}
})