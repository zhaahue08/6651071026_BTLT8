$(function () {
  $('h3').on('click', function () {
    var $tieuDe = $(this);
    var $noiDung = $tieuDe.next('.box');

    // ẩn các nội dung khác, mỗi lần chỉ mở một nội dung
    $('.box').not($noiDung).slideUp(250);
    $('h3').not($tieuDe).removeClass('active');

    // hiện nội dung ngay sau tiêu đề vừa click (click lại sẽ đóng)
    $noiDung.slideToggle(250);
    $tieuDe.toggleClass('active');
  });
});
