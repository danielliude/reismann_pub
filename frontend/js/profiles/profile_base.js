import '../../styles/templates/profiles/profile_base.scss'

$(function() {
	init_button() 

	function init_button() {
		$(".sidebar_click").click(function() {
			$('.demo.sidebar').sidebar('setting', 'dimPage', false)
			.sidebar('setting', 'closable', false).sidebar('toggle');

			$(".reismann_logo").toggle(500)
		})
	}
})

