import 'expose?jQuery!expose?$!jquery'

import '../semantic/dist/components/site.min.css'
import '../semantic/dist/components/site.min.js'
import '../semantic/dist/components/reset.min.css'

import '../semantic/dist/components/container.min.css'
import '../semantic/dist/components/grid.min.css'
import '../semantic/dist/components/button.min.css'
import '../semantic/dist/components/divider.min.css'
import '../semantic/dist/components/header.min.css'
import '../semantic/dist/components/icon.min.css'
import '../semantic/dist/components/image.min.css'
import '../semantic/dist/components/input.min.css'
import '../semantic/dist/components/label.min.css'
import '../semantic/dist/components/segment.min.css'
import '../semantic/dist/components/table.min.css'
import '../semantic/dist/components/item.min.css'
import '../semantic/dist/components/menu.min.css'
import '../semantic/dist/components/list.min.css'

import '../semantic/dist/components/checkbox.min.css'
import '../semantic/dist/components/checkbox.min.js'
import '../semantic/dist/components/dropdown.min.css'
import '../semantic/dist/components/dropdown.min.js'
import '../semantic/dist/components/form.min.css'
import '../semantic/dist/components/form.min.js'
import '../semantic/dist/components/search.min.css'
import '../semantic/dist/components/search.min.js'
import '../semantic/dist/components/transition.min.css'
import '../semantic/dist/components/transition.min.js'
import '../semantic/dist/components/message.min.css'
import '../semantic/dist/components/comment.min.css'

import '../semantic/dist/components/dimmer.min.css'
import '../semantic/dist/components/dimmer.min.js'
import '../semantic/dist/components/rating.min.css'
import '../semantic/dist/components/rating.min.js'
import '../semantic/dist/components/modal.min.css'
import '../semantic/dist/components/modal.min.js'

import '../styles/global.scss'





$(document).ready(function() {
	highly_adaptive()
	init_component()

	function init_component() {
		$('.masthead .ui.dropdown').dropdown({
			on : 'hover'
		})
	}

	$(window).resize(highly_adaptive)
	function highly_adaptive() {
		var h = window_height() - $(".masthead").innerHeight() - $(".footer").innerHeight() 

		$(".highly_adaptive").css("min-height", h+"px")
	}

	function window_height() {
	    var w = window.innerHeight
	          || document.documentElement.clientHeight
	          || document.body.clientHeight;
	    return w
	}
})
