import '../../styles/templates/accounts/password_reset.scss'

$(function() {
    init_form()

    function init_form() {
        $('.ui.form').form({
            fields: {
                email: {
                    identifier  : 'email',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your email'
                        },
                        {
                          type   : 'email',
                          prompt : 'Please enter a valid e-mail'
                        }
                    ]
                },
            }
        })
    }
})