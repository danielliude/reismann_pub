import '../../styles/templates/accounts/password_reset_confirm.scss'

$(function() {
    init_form()

    function init_form() {
        $('.ui.form').form({
            fields: {
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