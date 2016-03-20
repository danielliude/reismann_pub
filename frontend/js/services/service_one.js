import '../../styles/templates/services/service_one.scss'

$(function() {
	init_rating()
	send_message()

	function init_rating() {
		$('.ui.comments .ui.rating').rating('disable');
		$('.ui.form .ui.rating').rating();
		
	}
	function send_message() {
		$('.ui.form .submit').click(function() {
			var stars = $('.ui.form .ui.rating .icon.active').size()
			var comment = $("#id_comment").val()
			if(stars == "0") {
				return alert('please star rating')
			}
			if(comment == "") {
				return alert('please comment')
			}

	        var temp = {
	        	'stars' : stars,
	        	'comment' : comment
	        }
	        $.post('', temp, function(result){
	        	location.href = location.href
	        })
		})
	}
})