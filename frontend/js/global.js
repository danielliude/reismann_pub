import '../semantic/dist/semantic.min.css'
import '../styles/global.scss'

import 'expose?jQuery!expose?$!jquery'
import '../semantic/dist/semantic.min.js'


$(document).ready(function() {
  $('.ui.dropdown')
    .dropdown({
      on: 'hover'
    })
  ;
  $('.banner .information')
      .transition('scale in', 1000)
    ;
  // $('.city_map').mouseover(function() {
   //  $(this).transition('tada');
  // })
  $('.information .ui.dropdown').dropdown({
    forceSelection : false,
  });
  $('.search_but').click(function() {
    var name = $(".information [tabindex='0']").val() || $(".information [name='name']").val() || 'all_city'
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
  $(".information [tabindex='0']").keydown(function(e){ 
    var curKey = e.which; 
    if(curKey == 13){ 
      $(".search_but").click(); 
    } 
  }); 
})
