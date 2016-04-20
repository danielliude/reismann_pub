import '../../styles/templates/profiles/detail.scss'
import '../../vendors/daterangepicker/daterangepicker.css'

import '../../vendors/daterangepicker/daterangepicker.js'

$(function() {
    init_button()
    init_form()

    function init_button() {
        $('.profile_form .ui.dropdown').dropdown();
        $('#id_birthday').daterangepicker({
            format: 'YYYY-MM-DD',
            singleDatePicker: true,
            showDropdowns: true
        }, function(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

        // $('#id_birthday').calendar({
        //   type: 'date'
        // });
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
                short_description: {
                    identifier  : 'short_description',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your short_description'
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
})
