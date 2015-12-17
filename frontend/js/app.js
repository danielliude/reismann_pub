import '../styles/styles.scss'

$(() => {

  $(window).scroll( () => {
    if ($(".navbar").offset().top > 30) {
      $(".navbar-fixed-top").addClass("sticky");
    } else {
      $(".navbar-fixed-top").removeClass("sticky");
    }
  });

  $('form .input-group.date').datepicker({
    format: 'yyyy-mm-dd',
    language: 'zh-CN'
  });

  $('form .select2').select2();

});