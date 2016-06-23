import '../../styles/templates/profiles/detail.scss'
import '../../vendors/daterangepicker/daterangepicker.css'

import '../../vendors/daterangepicker/daterangepicker.js'

import '../../semantic/dist/components/dimmer.min.css'
import '../../semantic/dist/components/dimmer.min.js'
import '../../semantic/dist/components/modal.min.js'
import '../../semantic/dist/components/modal.min.css'
import '../../semantic/dist/components/tab.min.css'
import '../../semantic/dist/components/tab.min.js'

$(function() {
  init_button()
  init_album()
  country_city()

  function init_button() {
    $('.detail_grid .ui.dropdown').dropdown();

    $('#id_birthday').daterangepicker({
      format: 'YYYY-MM-DD',
      singleDatePicker: true,
      showDropdowns: true
    }, function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
    });

    $('.tabular.menu .item')
        .tab()
      ;
  }

  function init_album() {
    $('.change_avatar, .change_card_image').click(function(){
      $(this).addClass('clicked');
      $('.ui.modal').modal('show');
    });

    $('.album-image').click(function(){
      var is_avatar = '0';
      if( $('.clicked').length && $('.clicked').hasClass('change_avatar') ) is_avatar = '1';
      var img_id = $(this).data('img_id');
      $.get(set_album_image_url, {'is_avatar': is_avatar, 'img_id': img_id}, function(data){
        if ( is_avatar == '1' )
          $('.avatar').find('img').remove().end().append( '<img src="' + data + '" />' );
        else
          $('.card_image').find('img').remove().end().append( '<img src="' + data + '" />' );
        $('.clicked').removeClass('clicked');
        $('.ui.modal').modal('hide');
      });
    });
  }

  function country_city() {
    var province_data = ''
    var city_data = ''

    $.get('/cities/get_provinces', function(p_data) {
      province_data = p_data
      refresh_province(p_data, $("#id_country").val(), $("#id_province").val())

      $.get('/cities/get_cities', function(c_data) {
        city_data = c_data
        refresh_location(c_data, $("#id_province").val(), $("#id_location").val())

        change_event()
      });
    });
    
    function change_event() {
      $('#id_country').parent().dropdown({
        onChange: function(value, text, $selectedItem) {
          console.log(value, text, $selectedItem)
          if(!value) {
            $("#id_province").empty().siblings('.text').text('')
            return;
          }

          refresh_province(province_data, value, null, function() {
            refresh_location(city_data, $("#id_province").val())
          })
        }
      })

      $('#id_province').parent().dropdown({
        onChange: function(value, text, $selectedItem) {
          console.log(value, text, $selectedItem)
          if(!value) {
            $("#id_location").empty().siblings('.text').text('')
            return;
          }

          refresh_location(city_data, value)
        }
      })
    }
  }


  function refresh_province(data, value, province_value, cb) {
    var html = ''
    for(var i=0; i<data.length; i++) {
      if(data[i].country == value) {
        if(province_value) {
          if(data[i].id == province_value) {
            html += '<option value="' + data[i].id + '" selected="selected">' + data[i].name + '</option>'
            $("#id_province").siblings('.text').text(data[i].name)
          } else {
            html += '<option value="' + data[i].id + '">' + data[i].name + '</option>'
          }
        } else {
          if(html) {
            html += '<option value="' + data[i].id + '">' + data[i].name + '</option>'
          } else {
            html += '<option value="' + data[i].id + '" selected="selected">' + data[i].name + '</option>'
            $("#id_province").siblings('.text').text(data[i].name)
          }
        }
      }
    }

    $("#id_province").empty().append(html).parent().dropdown('refresh')
    cb && cb()
  } 

  function refresh_location(data, value, location_value, cb) {
    var html = ''
    for(var i=0; i<data.length; i++) {
      if(data[i].province == value) {
        if(location_value) {
          if(location_value == data[i].id) {
            html += '<option value="' + data[i].id + '" selected="selected">' + data[i].name + '</option>'
           $("#id_location").siblings('.text').text(data[i].name)
          } else {
            html += '<option value="' + data[i].id + '">' + data[i].name + '</option>'
          }
        } else {
          if(html) {
            html += '<option value="' + data[i].id + '">' + data[i].name + '</option>'
          } else {
            html += '<option value="' + data[i].id + '" selected="selected">' + data[i].name + '</option>'
           $("#id_location").siblings('.text').text(data[i].name)
          }
        }
      }
    }

    $("#id_location").empty().append(html).parent().dropdown('refresh')
    cb && cb()
  } 

})
