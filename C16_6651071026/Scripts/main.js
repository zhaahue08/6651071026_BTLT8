$(function () {
  // Datepicker của jQuery UI (nếu tải được); định dạng dd/mm/yy = dd/mm/yyyy
  if ($.fn.datepicker) {
    $('#datepicker').datepicker({ dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true, maxDate: 0, yearRange: '1950:+0' });
  }

  var $tbody = $('table tbody');
  var $msg = $('#msg');

  function hienThongBao(noiDung, loai) {
    $msg.text(noiDung).removeClass('err ok').addClass(loai);
  }

  function capNhatBangRong() {
    if ($tbody.find('tr.data').length === 0) {
      if ($tbody.find('tr.none').length === 0) {
        $tbody.append('<tr class="none"><td colspan="4" class="empty">Chưa có dữ liệu</td></tr>');
      }
    } else {
      $tbody.find('tr.none').remove();
    }
  }

  // Kiểm tra email: có đúng 1 @, có tên account và domain có ít nhất 1 dấu chấm
  function emailHopLe(email) {
    return /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9\-]+(\.[A-Za-z0-9\-]+)+$/.test(email);
  }

  // Kiểm tra ngày sinh dd/mm/yyyy (hoặc dd-mm-yyyy), phải là ngày có thật và không ở tương lai
  function ngayHopLe(chuoi) {
    var m = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/.exec(chuoi);
    if (!m) return false;
    var d = +m[1], t = +m[2], n = +m[3];
    var date = new Date(n, t - 1, d);
    if (date.getFullYear() !== n || date.getMonth() !== t - 1 || date.getDate() !== d) return false;
    return date <= new Date() && n >= 1900;
  }

  function chuanHoaNgay(chuoi) {
    var m = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/.exec(chuoi);
    return ('0' + m[1]).slice(-2) + '/' + ('0' + m[2]).slice(-2) + '/' + m[3];
  }

  $('.add-row').on('click', function () {
    var ten = $.trim($('#name').val());
    var email = $.trim($('#email').val());
    var ngay = $.trim($('#datepicker').val());
    var loi = [];

    $('form input[type=text]').removeClass('invalid');
    if (ten === '')            { loi.push('Vui lòng nhập Name.');                       $('#name').addClass('invalid'); }
    if (!emailHopLe(email))    { loi.push('Email không đúng định dạng (vd: ex@mail.com).'); $('#email').addClass('invalid'); }
    if (!ngayHopLe(ngay))      { loi.push('Birthdate phải đúng dạng dd/mm/yyyy và là ngày hợp lệ.'); $('#datepicker').addClass('invalid'); }

    if (loi.length) { hienThongBao(loi.join(' '), 'err'); return; }

    var $tr = $('<tr class="data"></tr>')
      .append('<td><input type="checkbox" class="chk"></td>')
      .append($('<td></td>').text(ten))
      .append($('<td></td>').text(email))
      .append($('<td></td>').text(chuanHoaNgay(ngay)));
    $tbody.append($tr);
    capNhatBangRong();

    $('form input[type=text]').val('');
    $('#name').focus();
    hienThongBao('Đã thêm hàng mới.', 'ok');
  });

  // Tô sáng hàng được chọn
  $tbody.on('change', '.chk', function () {
    $(this).closest('tr').toggleClass('selected', this.checked);
  });

  $('.delete-row').on('click', function () {
    var $chon = $tbody.find('.chk:checked').closest('tr');
    if ($chon.length === 0) {
      hienThongBao('Vui lòng tích chọn ít nhất một hàng để xóa.', 'err');
      return;
    }
    $chon.remove();
    capNhatBangRong();
    hienThongBao('Đã xóa ' + $chon.length + ' hàng.', 'ok');
  });

  $('form input[type=text]').on('input', function () { $(this).removeClass('invalid'); });
  capNhatBangRong();
});
