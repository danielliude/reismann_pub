import '../../semantic/dist/components/sticky.min.css'
import '../../semantic/dist/components/sticky.min.js'
import '../../semantic/dist/components/breadcrumb.min.css'

import '../../styles/templates/core/about_us.scss'

$(function() {
    $('.ui.sticky')
      .sticky({
        context: '.about_context',
        offset: 50,   
      })
    ;
})