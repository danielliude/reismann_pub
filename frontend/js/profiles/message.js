import '../../styles/templates/profiles/message.scss'
import '../../semantic/dist/components/tab.min.css'
import '../../semantic/dist/components/tab.min.js'

$(function() {
    init_button()
    function init_button() {
        $('.message_write_form .ui.dropdown').dropdown();

        $('.tabular.menu .item')
          .tab()
        ;
    }
})
