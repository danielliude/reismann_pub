import '../../styles/templates/core/index.scss'

$(document).ready(function() {
  init_component()
  init_search()

  function init_component() {
    $('.information .ui.dropdown').dropdown({
      forceSelection : false,
    });

    $('.banner .information').transition('fly up', 2000);

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
    // $(".information .prompt").keydown(function(e){ 
    //   var curKey = e.which; 
    //   if(curKey == 13){ 
    //     $(".search_but").click(); 
    //   } 
    // }); 
  }
})
