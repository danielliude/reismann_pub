import '../../styles/templates/profiles/dashboard.scss'

$(function() {
	init_notification()

	function init_notification() {
		$('.noti_segment .ui.dropdown').dropdown({
			on : 'hover'
		})

		$('.ui.checkbox').checkbox()	

		$('.checkbox_sort').parent('.checkbox').click(function(event) {
			update_checkbox()
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
	}

	function update_checkbox() {
		var temp = {
			checkbox : get_select_checkbox('checkbox_sort')
		}

		$.post(window.location.pathname, temp, function(result){
	    	$('.noti_segment table, .noti_segment .pagination').remove()
	    	$('.notifications_list').after(result)
        })
	}

	function get_select_checkbox(name) {
        var result = []
        $("[name='" + name + "']:checked").each(function() {
            result.push($(this).val())
        })
        return result
    }
})

