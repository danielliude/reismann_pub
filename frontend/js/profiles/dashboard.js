import '../../styles/templates/profiles/dashboard.scss'

$(function() {
	init_notification()

	function init_notification() {
		$('.noti_segment .ui.dropdown').dropdown({
			on : 'hover'
		})

		$('.ui.checkbox').checkbox()	

		$('.checkbox_sort').parent('.checkbox').click(function(event) {
			event.preventDefault()
			setTimeout(function() {
				update_checkbox()
			}, 100)
		});

		$('.mark_read').click(function(event) {
			var temp = {
				type : 'mark_read',
				checkbox : get_select_checkbox('checkbox_select')
			}

			$.get(window.location.pathname.replace('dashboard', 'mark_read_or_delete'), temp, function(result){
		    	update_checkbox()
	        })
		});

		$('.mark_delete').click(function(event) {
			var temp = {
				type : 'mark_delete',
				checkbox : get_select_checkbox('checkbox_select')
			}

			$.get(window.location.pathname.replace('dashboard', 'mark_read_or_delete'), temp, function(result){
		    	update_checkbox()
	        })
		});

		$('.noti_segment').on('click', '.click_tr_url', function(e) {
			e.preventDefault();
			var ev = e || window.event;
            var elm = ev.target || ev.srcElement;
            if (elm.tagName != 'LABEL') {
            	if($(this).data('url')) {
	                location.href = $(this).data('url')
            	}
            }
		});
	}

	function update_checkbox() {
		var temp = {
			checkbox : get_select_checkbox('checkbox_sort')
		}

		$.post(window.location.pathname, temp, function(result){
	    	$('.noti_segment table, .noti_segment .pagination').remove()
	    	$('.notifications_list').after(result)
	    	$('.noti_segment .ui.checkbox').checkbox()
        })
	}

	function get_select_checkbox(name) {
        var result = []
        console.log('>>>>>>>init', result)
        $("[name='" + name + "']:checked").each(function() {
        	console.log('>>>>>>>each', $(this))
            result.push($(this).val())
        })
        console.log('>>>>>>>finish', result)
        return result
    }
})

