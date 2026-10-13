$(function () {
  $('.password-show').on('click', function () {
    var $icon = $(this);
    var $nhap = $icon.siblings('.input-control');

    if ($nhap.attr('type') === 'password') {
      // hiện nguyên bản mật khẩu
      $nhap.attr('type', 'text');
      $icon.removeClass('fa-eye').addClass('fa-eye-slash').attr('title', 'Nhấn để ẩn mật khẩu');
    } else {
      // ẩn lại mật khẩu
      $nhap.attr('type', 'password');
      $icon.removeClass('fa-eye-slash').addClass('fa-eye').attr('title', 'Nhấn để hiện mật khẩu');
    }
  });
});
