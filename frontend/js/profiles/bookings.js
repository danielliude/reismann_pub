import '../../styles/templates/profiles/bookings.scss'
import '../../vendors/daterangepicker/daterangepicker.css'

import '../../vendors/daterangepicker/daterangepicker.js'

$(function() {
    init_button()
    init_rating()
    // init_form()

    function init_button() {
        $('.bookings_write_form .ui.dropdown').dropdown();
        $('#id_start_time, #id_end_time').daterangepicker({
            format: 'YYYY-MM-DD',
            singleDatePicker: true,
            showDropdowns: true
        }, function(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });
    }

    function init_rating() {
        $('.ui.rating').rating('disable');
        $('.ui.rating').rating();
    }

    function init_form() {
        $('.ui.form.bookings_write_form').form({
            fields: {
                service: {
                    identifier  : 'service',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your service'
                        },
                    ]
                },
                start_time: {
                    identifier  : 'start_time',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your start_time'
                        },
                    ]
                },
                end_time: {
                    identifier  : 'end_time',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your end_time'
                        },
                    ]
                },
                number_of_customers: {
                    identifier  : 'number_of_customers',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your number_of_customers'
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
                    ]
                },
                meeting_point: {
                    identifier  : 'meeting_point',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your meeting_point'
                        },
                    ]
                },
                booking_content: {
                    identifier  : 'booking_content',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your booking_content'
                        },
                    ]
                },
                booking_remark: {
                    identifier  : 'booking_remark',
                    rules: [
                        {
                          type   : 'empty',
                          prompt : 'Please enter your booking_remark'
                        },
                    ]
                },
            }
        })
    }
})
