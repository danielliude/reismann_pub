import '../semantic/dist/components/site.min.css'
import '../semantic/dist/components/reset.min.css'
import '../semantic/dist/components/button.min.css'
import '../semantic/dist/components/card.min.css'
import '../semantic/dist/components/checkbox.min.css'
import '../semantic/dist/components/comment.min.css'
import '../semantic/dist/components/container.min.css'
import '../semantic/dist/components/divider.min.css'
import '../semantic/dist/components/dropdown.min.css'
import '../semantic/dist/components/form.min.css'
import '../semantic/dist/components/grid.min.css'
import '../semantic/dist/components/header.min.css'
import '../semantic/dist/components/icon.min.css'
import '../semantic/dist/components/image.min.css'
import '../semantic/dist/components/input.min.css'
import '../semantic/dist/components/item.min.css'
import '../semantic/dist/components/label.min.css'
import '../semantic/dist/components/menu.min.css'
import '../semantic/dist/components/message.min.css'
import '../semantic/dist/components/search.min.css'
import '../semantic/dist/components/segment.min.css'
import '../semantic/dist/components/sidebar.min.css'
import '../semantic/dist/components/statistic.min.css'
import '../semantic/dist/components/table.min.css'
import '../semantic/dist/components/list.min.css'
import '../semantic/dist/components/transition.min.css'
import '../semantic/dist/components/accordion.min.css'
import '../styles/profile_global.scss'

import 'expose?jQuery!expose?$!jquery'
import '../semantic/dist/components/site.min.js'
import '../semantic/dist/components/checkbox.min.js'
import '../semantic/dist/components/dropdown.min.js'
import '../semantic/dist/components/form.min.js'
import '../semantic/dist/components/search.min.js'
import '../semantic/dist/components/sidebar.min.js'
import '../semantic/dist/components/transition.min.js'
import '../semantic/dist/components/accordion.min.js'

$(function() {
	var sidebar_state = -1   //-1 is the meaning of hiding
	var if_use        = true
	init_button() 
	init_side_state()
	$(window).resize(init_sidebar)

	function init_button() {
		$('.masthead .ui.dropdown').dropdown({})

		$(".sidebar_click").click(function() {
			$('.profile_sidebar.sidebar').sidebar('setting', 'dimPage', false)
			.sidebar('setting', 'closable', false).sidebar('toggle');

			if(if_use) {
				$(".reismann_logo").toggle(500, function() {
				})
			} else {
				sidebar_state = -sidebar_state
				if_use = true	
			}
		})

		$('.ui.accordion').accordion();
	}

	function init_side_state() {
		if(window_width() <= 992) {
			sidebar_state = -1
		} else {
			sidebar_state = 1
		}
	}

	function init_sidebar() {
		if(if_use && (sidebar_state > 0) && (window_width() <= 992)) {
			if_use = false
            $(".sidebar_click").click()
		}
		if(if_use && (sidebar_state < 0) && (window_width() > 992)) {
			if_use = false
            $(".sidebar_click").click()
		}
	}

    function window_width() {
        var w = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth;
        return parseInt(w)
    }
})

