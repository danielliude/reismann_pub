import '../semantic/dist/semantic.min.css'
import '../styles/profile_global.scss'

import 'expose?jQuery!expose?$!jquery'
import '../semantic/dist/semantic.min.js'

$(function() {
	init_button() 

	function init_button() {
		$('.masthead .ui.dropdown').dropdown({})

		$(".sidebar_click").click(function() {
			$('.profile_sidebar.sidebar').sidebar('setting', 'dimPage', false)
			.sidebar('setting', 'closable', false).sidebar('toggle');

			$(".reismann_logo").toggle(500)
		})
	}
})

