import '../../styles/templates/core/index.scss'

$(document).ready(function() {
  sc()
  $(window).scroll(sc)
  init_component()
  init_search()
  image_scroll()
  init_click()

  function init_component() {
    $('.information .ui.dropdown').dropdown({
      forceSelection : false,
    });

    $('.banner .information').transition('scale', 500)

    $('.ui.search').search({
      source: content
    });
  }

  function init_search() {
    $('.search_but').click(function() { 
      var name = $(".information .prompt").val()
      if(name=="") {
        return
      }
      $.ajax({
        type        : 'get',
        url         : "/search_url",
        data        : {name : name},
        success  : function(data){
          window.location.href = window.location.href + data.substring(1)
        }
      })
    })
    $(".information .prompt").keydown(function(e){ 
      var curKey = e.which; 
      if(curKey == 13){ 
        $(".search_but").click(); 
      } 
    }); 
  }

  function image_scroll() {
    var i = 0
    setInterval(function() {
      var length = $(".banner_img").css('background-image').length
      $('.banner_img_copy').fadeOut(100, function() {
        $(".banner_img_copy").css('background-image', 
            $(".banner_img_copy").css('background-image').replace('_' + i + '.jpg', '_' + ((i+1) % 4) + '.jpg'))
        $('.banner_img_copy').fadeIn(2000, function() {
          $(".banner_img").css('background-image', 
            $(".banner_img_copy").css('background-image').replace('_' + i + '.jpg', '_' + ((i+1) % 4) + '.jpg'))
          i = (i+1) % 4
        })
      })
    }, 8000)
  }

  function sc(){
    var top = $("body").scrollTop() || $("html").scrollTop()

    if(parseInt(top) > 0) {
      $('.fixed_position').show()
    } else {
      $('.fixed_position').hide()
    }
  }

  function init_click() {
    $('.fixed_position').click(function() {
      $('html,body').animate({scrollTop: '0px'}, 1000)
    })

    $('#profile_content .ellipsis_vertical').live('click', function() {
      var h = parseInt($('.segment_profile').height()) == 84 ? '200' : '100%'
      $(this).parent().siblings('.more_profile_info').animate({
        height: h},
        1000, function() {
        /* stuff to do after animation is complete */
      });
    })

    $('.more_profile_info_remove').click(function() {
      $(this).parent().parent().animate({
        height: '0'},
        1000, function() {
        /* stuff to do after animation is complete */
      });
    })
  }
})
