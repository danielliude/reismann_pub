import '../../styles/templates/profiles/contact.scss'

$(function() {
    init_form()

    function init_form() {
        $('.ui.form').form({
            fields: {
                phone: {
                    identifier  : 'phone',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your phone'
                        },
                    ]
                },
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
                weibo: {
                    identifier  : 'weibo',
                    rules: [
                    ]
                },
                wechat: {
                    identifier  : 'wechat',
                    rules: [
                    ]
                },
                qq: {
                    identifier  : 'qq',
                    rules: [
                    ]
                },
                email_notifications: {
                    identifier  : 'email_notifications',
                    rules: [
                    ]
                },
            }
        })
    }
})
