import '../../styles/templates/profiles/profile.scss'
import '../../semantic/dist/components/tab.min.css'
import '../../semantic/dist/components/tab.min.js'


$(function() {
	init() 

	function init() {
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

		Galleria.loadTheme('http://cdn.bootcss.com/galleria/1.4.2/themes/classic/galleria.classic.min.js');
	    Galleria.run('#galleria');
	}
})