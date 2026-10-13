$(function () {
  var $hienThi = $('#filename');
  var chuMacDinh = $hienThi.text();          // "Ex:sample.jpg"

  $('#fileupload').on('change', function () {
    var file = this.files && this.files[0];

    if (!file) {                             // người dùng bấm Cancel
      $hienThi.removeClass('has-file').text(chuMacDinh);
      return;
    }

    // Tách tên file và phần mở rộng (dựa vào dấu chấm cuối cùng)
    var tenDayDu = file.name;
    var viTri = tenDayDu.lastIndexOf('.');
    var ten = viTri > 0 ? tenDayDu.substring(0, viTri) : tenDayDu;
    var moRong = viTri > 0 ? tenDayDu.substring(viTri + 1) : '';

    var $moRong = moRong
      ? $('<span class="mr"></span>').text('.' + moRong)
      : document.createTextNode('(không có)');

    $hienThi.addClass('has-file').empty()
      .append('Tên file: ')
      .append($('<span class="ten"></span>').text(ten))
      .append('<br>Phần mở rộng: ')
      .append($moRong);
  });
});
