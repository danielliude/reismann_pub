import '../../styles/templates/profiles/bookings.scss'
import '../../semantic/dist/components/tab.min.css'
import '../../semantic/dist/components/tab.min.js'

import '../../vendors/daterangepicker/daterangepicker.css'
import '../../vendors/daterangepicker/daterangepicker.js'

$(function() {
    init_button()
    init_rating()

    function init_button() {
        $('.bookings_write_form .ui.dropdown').dropdown();

        $('#id_start_time, #id_end_time').daterangepicker({
            format: 'YYYY-MM-DD',
            singleDatePicker: true,
            showDropdowns: true
        }, function(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

        $('.tabular.menu .item')
          .tab()
        ;
    }

    function init_rating() {
        $('.ui.rating').rating('disable');
    }
})
