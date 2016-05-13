import '../../styles/templates/profiles/detail.scss'
import '../../vendors/daterangepicker/daterangepicker.css'

import '../../vendors/daterangepicker/daterangepicker.js'

import '../../semantic/dist/components/dimmer.min.css'
import '../../semantic/dist/components/dimmer.min.js'
import '../../semantic/dist/components/modal.min.js'
import '../../semantic/dist/components/modal.min.css'

$(function() {
  init_button()
  // init_form()
  init_album()

  function init_button() {
    $('.profile_form .ui.dropdown').dropdown();
    $('#id_birthday').daterangepicker({
      format: 'YYYY-MM-DD',
      singleDatePicker: true,
      showDropdowns: true
    }, function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
    });
  }
  
  function init_form() {
    $('.ui.form').form({
        fields: {
            first_name: {
                identifier  : 'first_name',
                rules: [
                    {
                      type   : 'empty',
                      prompt : 'Please enter your first_name'
                    },
                ]
            },
            last_name: {
                identifier  : 'last_name',
                rules: [
                    {
                      type   : 'empty',
                      prompt : 'Please enter your last_name'
                    },
                ]
            },
            gender: {
                identifier  : 'gender',
                rules: [
                    {
                      type   : 'empty',
                      prompt : 'Please enter your gender'
                    },
                ]
            },
            profession: {
                identifier  : 'profession',
                rules: [
                    {
                      type   : 'empty',
                      prompt : 'Please enter your profession'
                    },
                ]
            },
            birthday: {
                identifier  : 'birthday',
                rules: [
                    {
                      type   : 'empty',
                      prompt : 'Please enter your birthday'
                    },
                ]
            },
            location: {
                identifier  : 'location',
                rules: [
                    {
                      type   : 'empty',
                      prompt : 'Please enter your location'
                    },
                ]
            },
            bio: {
                identifier  : 'bio',
                rules: [
                    {
                      type   : 'empty',
                      prompt : 'Please enter your bio'
                    },
                ]
            },
        }
    })
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
})
