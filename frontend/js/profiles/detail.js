import '../../styles/templates/profiles/detail.scss'
import '../../vendors/daterangepicker/daterangepicker.css'


import '../../vendors/daterangepicker/moment.js'
import '../../vendors/daterangepicker/daterangepicker.min.js'

$(function() {
    init_button()
    // init_form()

    function init_button() {
        $('.profile_form .ui.dropdown').dropdown();
        $('#id_birthday').daterangepicker({
            format: 'YYYY-MM-DD',
            singleDatePicker: true
        }, function(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });
    }
    function init_form() {
        $('.ui.form').form({
            fields: {
                phone: {
                    identifier  : 'phone',
                    rules: [
                        // {
                        //   type   : 'empty',
                        //   prompt : 'Please enter your username'
                        // },
                        // {
                        //   type   : 'minLength[3]',
                        //   prompt : 'Username should have at least 3 letters'
                        // },
                    ]
                },
                email: {
                    identifier  : 'email',
                    rules: [
                        // {
                        //   type   : 'empty',
                        //   prompt : 'Please enter your email'
                        // },
                        {
                          type   : 'email',
                          prompt : 'Please enter a valid e-mail'
                        }
                    ]
                },
                weibo: {
                    identifier  : 'weibo',
                    rules: [
                        // {
                        //   type   : 'empty',
                        //   prompt : 'Please enter your first_name'
                        // },
                    ]
                },
                wechat: {
                    identifier  : 'wechat',
                    rules: [
                        // {
                        //   type   : 'empty',
                        //   prompt : 'Please enter your last_name'
                        // },
                    ]
                },
                qq: {
                    identifier  : 'qq',
                    rules: [
                        // {
                        //   type   : 'empty',
                        //   prompt : 'Please enter your password'
                        // },
                        // {
                        //   type   : 'minLength[8]',
                        //   prompt : 'Password should be more then 8 letters'
                        // },
                    ]
                },
                email_notifications: {
                    identifier  : 'email_notifications',
                    rules: [
                        // {
                        //   type   : 'checked',
                        //   prompt : 'You must agree to the terms to register'
                        // },
                    ]
                },
            }
        })
    }
})
