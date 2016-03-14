import '../../styles/templates/core/index.scss'

$(document).ready(function() {
  $('.masthead .ui.dropdown')
    .dropdown({
      on: 'hover'
    })
  // ;
  $('.banner .information')
      .transition('fly up', 2000)
    ;
  // $('.city_map').mouseover(function() {
   //  $(this).transition('tada');
  // })
  $('.information .ui.dropdown').dropdown({
    forceSelection : false,
  });
  $('.search_but').click(function() {
    // var name = $(".information [tabindex='0']").val() || $(".information [name='name']").val() 
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
  $('.ui.search').search({
    source: content
  });
})
