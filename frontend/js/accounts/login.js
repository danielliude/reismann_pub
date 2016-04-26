import '../../styles/templates/accounts/login.scss'

$(function() {
    // init_form()

    function init_form() {
        $('.ui.form').form({
            fields: {
                email: {
                    identifier  : 'identification',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your email or username'
                        },
                    ]
                },
                password: {
                    identifier  : 'password',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your password'
                        },
                        {
                          type   : 'length[6]',
                          prompt : 'Your password must be at least 6 characters'
                        }
                    ]
                }
            }
        })
    }
})