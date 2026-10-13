$(function () {
  var $tabs = $('.tab li');
  var $links = $('.tab li a');

  function chuyenTab(idDich, coHieuUng) {
    var $dich = $(idDich);
    var $hienTai = $('.tab-item:visible');

    $tabs.removeClass('active');
    $links.filter('[href="' + idDich + '"]').parent().addClass('active');

    if (!coHieuUng) { $('.tab-item').hide(); $dich.show(); return; }

    if ($hienTai.length === 0) { $dich.fadeIn(250); return; }
    $hienTai.stop(true, true).fadeOut(150, function () {
      $dich.stop(true, true).fadeIn(250);
    });
  }

  // Click vào cả thẻ li (hoặc link) đều chuyển tab
  $tabs.on('click', function (e) {
    e.preventDefault();
    var idDich = $(this).find('a').attr('href');
    if ($(this).hasClass('active')) return;
    chuyenTab(idDich, true);
  });

  // Tab đầu tiên được mở sẵn
  chuyenTab($links.first().attr('href'), false);
});
