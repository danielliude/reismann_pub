import '../../styles/templates/profiles/album.scss'

$(function() {
    init_form()
    init()

    function init() {
        $('#id_image').attr('multiple', ' ')
    }

    function init_form() {
        $('.ui.form').form({
            fields: {
                image: {
                    identifier  : 'image',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please upload an image'
                        },
                    ]
                }
            }
        })
    }
})
