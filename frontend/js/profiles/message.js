import '../../styles/templates/profiles/message.scss'

$(function() {
    init_button()
    // init_form()

    function init_button() {
        $('.message_write_form .ui.dropdown').dropdown();
    }

    function init_form() {
        $('.ui.form.message_write_form').form({
            fields: {
                recipient: {
                    identifier  : 'recipient',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your recipient'
                        },
                    ]
                },
                subject: {
                    identifier  : 'subject',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your subject'
                        },
                    ]
                },
                body: {
                    identifier  : 'body',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your message'
                        },
                    ]
                },
            }
        })
    }
})
