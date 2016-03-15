import '../../styles/templates/cities/city.scss'

$(function() {
    $(".more_select").click(function() {
        $(".hidden_content").slideToggle("slow");
    })
    $(".ui.secondary.segment").click(function() {
        $(this).find('input').click()
    })
})