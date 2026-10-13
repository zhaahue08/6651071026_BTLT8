$(function () {
  var $anh = $('#image-effect-2 img');
  var $anhToi = $anh.eq(0);    // off.png
  var $anhSang = $anh.eq(1);   // on.png

  function apDungTheme(batSang) {
    // On  -> theme nền sáng ; Off -> theme nền tối
    $anhSang.toggleClass('fadeEffect', batSang);
    $anhToi.toggleClass('fadeEffect', !batSang);
    $('body').toggleClass('theme-light', batSang).toggleClass('theme-dark', !batSang);
    $('#themeLabel').text(batSang ? 'Theme: Nền sáng' : 'Theme: Nền tối');
  }

  $('#myonoffswitch').on('change', function () {
    apDungTheme(this.checked);
  });

  apDungTheme($('#myonoffswitch').is(':checked'));
});
