import '../semantic/dist/semantic.min.css'
import '../styles/global.scss'

import 'expose?jQuery!expose?$!jquery'
import '../semantic/dist/semantic.min.js'


$(document).ready(function() {
	init_component()
    highly_adaptive()
	$(window).resize(highly_adaptive)

	function init_component() {
		$('.masthead .ui.dropdown').dropdown({
		  // on: 'hover'
		})
	}

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