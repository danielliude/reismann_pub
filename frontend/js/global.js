import '../semantic/dist/semantic.min.css'
import '../styles/global.scss'

import 'expose?jQuery!expose?$!jquery'
import '../semantic/dist/semantic.js'


$(document).ready(function() {
  $('.masthead .ui.dropdown')
    .dropdown({
      on: 'hover'
    })
})