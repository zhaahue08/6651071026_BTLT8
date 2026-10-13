$(function () {
  // Dùng chung cho cả 2 khối (Passport và Credit Card)
  $('.checkme').on('change', function () {
    var $khoi = $(this).closest('.checkbox-card');
    var $nhap = $khoi.find('.passport-box');     // ô nhập thông tin
    var $dangKy = $khoi.find('.apply-box');      // link "Apply For ..."

    if (this.checked) {                          // chọn "Yes" -> hiện textbox
      $dangKy.hide();
      $nhap.slideDown(200).find('input').focus();
    } else {                                     // bỏ chọn -> ẩn textbox, hiện link đăng ký
      $nhap.slideUp(200).find('input').val('');
      $dangKy.show();
    }
  }).trigger('change');                          // đồng bộ trạng thái ban đầu

  $('.apply-box a').on('click', function (e) { e.preventDefault(); });
});
