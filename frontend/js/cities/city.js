import '../../styles/templates/cities/city.scss'

jQuery(document).ajaxSend(function(event, xhr, settings) {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function sameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }
    function safeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
 
    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
});

$(function() {
    $(".more_select").click(function() {
        $(".hidden_content").slideToggle("slow");
    })
    $(".ui.secondary.segment").click(function(e) {
        var ev = e || window.event;
        var elm = ev.target || ev.srcElement;
        if (elm.tagName === 'DIV') {
            $(this).find('input').click()
        }
    })

    $(".submit_button").click(function() {
        var temp = {}
        temp.services = get_select_checkbox("services")
        temp.services = get_select_checkbox("languages")
        temp.services = get_select_checkbox("tags")
        if($(".search_form [name='gender']").val()) {
            temp.gender   = $(".search_form [name='gender']").val() 
        }
        if($(".search_form [name='age']").val()) {
            temp.age      = $(".search_form [name='age']").val()
        }
        if($(".search_form [name='city']")) {
            temp.city     = $(".search_form [name='city']").val()
        }
        temp.page = 1
        $.post('/cities/show/all/', temp, function(ret){
            console.log(ret, typeof ret)
            $(".search_profile").empty()
            var html = ''
            for (var i in ret) {
                html += '<div class="column">' +
                          '<div class="ui segment padding">'+
                            '<a href="' + ret[i].profile_map_url + '" class="profile_map" style="background-image: url(\'' + ret[i].card_image_url +'\');"></a>' +
                            '<a href="' + ret[i].image_url + '" class="ui tiny circular image">' +
                              '<img  src="' + ret[i].avatar_url + '" alt="User Avatar">' +
                            '</a>' +
                            '<div class="ui segment">' +
                              '<div class="row"> ' +
                                '<div class="ui header">' + ret[i].name_or_username + ' '  + ret[i].short_description + '</div>' +
                                '</strong><a href="#">' + ret[i].cities + '</a></strong>' +
                              '</div>' +
                              '<div class="ui red header average_price">€ ' + ret[i].price + ' service price unit</div>' +
                              '<div class="row content">' +
                                '<p>' + ret[i].content + '</p>' +
                              '</div>' +
                            '</div>' +
                          '</div>' +
                        '</div>' 
            }
            $(".search_profile").append(html)
        })
    })
    function get_select_checkbox(name) {
        var result
        $(".search_form [name='" + name + "']:checked").each(function() {
            if(!result) {
                result = []
            }
            result.push($(this).val())
        })
        return result
    }

    var page = 1
    $(".more_loader").click(function() {
        page++
        var temp = {}
        temp.services = get_select_checkbox("services")
        temp.services = get_select_checkbox("languages")
        temp.services = get_select_checkbox("tags")
        if($(".search_form [name='gender']").val()) {
            temp.gender   = $(".search_form [name='gender']").val() 
        }
        if($(".search_form [name='age']").val()) {
            temp.age      = $(".search_form [name='age']").val()
        }
        if($(".search_form [name='city']")) {
            temp.city     = $(".search_form [name='city']").val()
        }
        temp.page = page
        $.post('/cities/show/all/', temp, function(ret){
            var html = ''
            for (var i in ret) {
                html += '<div class="column">' +
                          '<div class="ui segment padding">'+
                            '<a href="' + ret[i].profile_map_url + '" class="profile_map" style="background-image: url(\'' + ret[i].card_image_url +'\');"></a>' +
                            '<a href="' + ret[i].image_url + '" class="ui tiny circular image">' +
                              '<img  src="' + ret[i].avatar_url + '" alt="User Avatar">' +
                            '</a>' +
                            '<div class="ui segment">' +
                              '<div class="row"> ' +
                                '<div class="ui header">' + ret[i].name_or_username + ' '  + ret[i].short_description + '</div>' +
                                '</strong><a href="#">' + ret[i].cities + '</a></strong>' +
                              '</div>' +
                              '<div class="ui red header average_price">€ ' + ret[i].price + ' service price unit</div>' +
                              '<div class="row content">' +
                                '<p>' + ret[i].content + '</p>' +
                              '</div>' +
                            '</div>' +
                          '</div>' +
                        '</div>' 
            }
            $(".search_profile").append(html)
        })
    })
})