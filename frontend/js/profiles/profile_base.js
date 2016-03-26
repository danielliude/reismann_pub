import '../../styles/templates/profiles/profile_base.scss'

$(function() {
	$('.demo.sidebar').sidebar('setting', 'dimPage', false)
		.sidebar('setting', 'closable', false).sidebar('toggle');
	$(".sidebar_click").click(function() {
		$('.demo.sidebar').sidebar('setting', 'dimPage', false)
		.sidebar('setting', 'closable', false).sidebar('toggle');
	})
})

