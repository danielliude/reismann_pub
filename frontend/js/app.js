import '../styles/styles.scss'

$(() => {

  $('form .input-group.date').datepicker({
    format: 'yyyy-mm-dd',
    language: 'zh-CN'
  });

  $('form .select2').select2();

});