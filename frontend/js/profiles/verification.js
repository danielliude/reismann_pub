import '../../styles/templates/profiles/verification.scss'

$(function() {
    // init_form()

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
})
