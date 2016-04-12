import '../../styles/templates/cities/city.scss'

$(function() {
    var page     = 1     
    var page_num = 21     
    init_button()
    init_filter()

    function init_filter() {
        $(document).on('mouseenter', '.filter_map', function(){
          $(this).animate({opacity:0.2},200);
        })
        $(document).on('mouseout', '.filter_map', function(){
          $(this).animate({opacity:0},200);
        })
    }

    function init_button() {
        $('.search_form .ui.dropdown').dropdown();
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
            page = 1
            var temp = get_post_data(page)
            $.post('/cities/show/all/', temp, function(result){
                $(".services_num").text(result.num)
                $(".search_profile").empty()
                if(result.num == '0') {
                    $(".serveice_num_p").hide()
                    $(".search_profile").append('<h4>No result,please search again!</h4>')
                    return 
                }
                $(".serveice_num_p").show()
                if(parseInt(result.num) <= page * page_num) {
                    $(".more_loaders").hide()
                } else {
                    $(".more_loaders").show()
                }
                
                show_data(result.services_new)
            })
        })
        $(".more_loader").click(function() {
            page++
            var temp = get_post_data(page)
            $.post('/cities/show/all/', temp, function(result){
                $(".services_num").text(result.num)
                if(parseInt(result.num) <= page * page_num) {
                    $(".more_loaders").hide()
                } else {
                    $(".more_loaders").show()
                }

                show_data(result.services_new)
            })
        })
    }
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
    function get_post_data(page) {
        var temp = {}
        temp.services = get_select_checkbox("services")
        temp.languages = get_select_checkbox("languages")
        temp.tags = get_select_checkbox("tags")
        if($(".search_form [name='gender']").val()[0]) {
            temp.gender   = $(".search_form [name='gender']").val() 
        }
        if($(".search_form [name='age']").val()) {
            temp.age      = $(".search_form [name='age']").val()
        }
        if($(".search_form [name='city']").val()) {
            temp.city     = $(".search_form [name='city']").val()
        }
        temp.page         = page
        return temp
    }
    function show_data(ret) {
        var html = ''
        for (var i in ret) {
            html += '<div class="column">' +
                      '<div class="ui segment padding">'+
                        '<a href="' + ret[i].profile_map_url + '" class="profile_map" style="background-image: url(\'' + ret[i].card_image_url +'\');"><div class="filter_map"></div></a>' +
                        '<a href="' + ret[i].image_url + '" class="ui tiny circular image">' +
                          '<img  src="' + ret[i].avatar_url + '" alt="User Avatar">' +
                        '</a>' +
                        '<div class="ui segment">' +
                          '<div class="row"> ' +
                            '<div class="ui header">' + ret[i].name_of_username + ' '  + ret[i].short_description + '</div>' +
                            '<span>' + ret[i].cities + '</span>' +
                          '</div>' +
                          '<div class="ui red header average_price">€ ' + ret[i].price + ' service price unit</div>' +
                          '<div class="row content">' +
                            '' + ret[i].content.substring(0, 250) + '<span>...</span>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' 
        }
        $(".search_profile").append(html)
    }
})