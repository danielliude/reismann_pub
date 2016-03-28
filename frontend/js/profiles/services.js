import '../../styles/templates/profiles/services.scss'

$(function() {
    init_button()
    init_form()

    function init_button() {
        $('.service_show .ui.dropdown').dropdown();
    }

    function init_form() {
        $('.ui.form.service_form').form({
            fields: {
                title: {
                    identifier  : 'title',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your title'
                        },
                        // {
                        //   type   : 'minLength[3]',
                        //   prompt : 'Username should have at least 3 letters'
                        // },
                    ]
                },
                content: {
                    identifier  : 'content',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your content'
                        },
                    ]
                },
                price: {
                    identifier  : 'price',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your price'
                        },
                        {
                            type   : 'integer[1..1000]',
                            prompt : 'Please enter an integer value, 1 to 1000'
                          }
                    ]
                },
                type: {
                    identifier  : 'type',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your type'
                        },
                    ]
                },
                cities: {
                    identifier  : 'cities',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your cities'
                        },
                    ]
                },
                categories: {
                    identifier  : 'categories',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your categories'
                        },
                    ]
                },
                languages: {
                    identifier  : 'languages',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your languages'
                        },
                    ]
                },
                tags: {
                    identifier  : 'tags',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your tags'
                        },
                    ]
                },
            }
        })
    }
})
