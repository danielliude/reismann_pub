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

    $('.filter_map').mouseenter(function(){
      $(this).animate({opacity:0.2},200);
    });
    $('.filter_map').mouseout(function(){
      $(this).animate({opacity:0},200);
    });
    $('.title_map').mouseenter(function(){
      $(this).prev().animate({opacity:0.2},200);
    });
    $('.title_map').mouseout(function(){
      $(this).prev().animate({opacity:0},200);
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
    var i = 1

    setInterval(function() {
      var length = $(".banner_img").css('background-image').length
      $('.banner_img')
        .transition({
          animation  : 'fade',
          duration   : '0.8s',
          onComplete : function() {
            $(".banner_img").css('background-image', 
              $(".banner_img").css('background-image').substring(0, length-7) + i + ".jpg\")")
              $('.banner_img').transition({
                animation  : 'fade',
                duration   : '0.5s',
              })
              i = (i+1) % 4
          }
        })
      ;
    }, 10000)
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
  }
})
