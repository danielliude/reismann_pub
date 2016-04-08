import '../semantic/dist/semantic.min.css'
import '../styles/global.scss'

import 'expose?jQuery!expose?$!jquery'
import '../semantic/dist/semantic.min.js'


$(document).ready(function() {
	highly_adaptive()
	init_component()

	function init_component() {
		$('.masthead .ui.dropdown').dropdown({})
	}

	$(window).resize(highly_adaptive)
	function highly_adaptive() {
		var h = window_height() - $(".masthead").innerHeight() - $(".footer").innerHeight() - $(".copyright").innerHeight()

		$(".highly_adaptive").css("min-height", h+"px")
	}

	function window_height() {
	    var w = window.innerHeight
	          || document.documentElement.clientHeight
	          || document.body.clientHeight;
	    return w
	}
})
