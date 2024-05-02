// HEADER ANIMATION
window.onscroll = function () { scrollFunction() };
var element = document.getElementById("body");


// AOS
AOS.init({
  offset: 120,
  delay: 0,
  duration: 1200,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
  disable: "mobile"
});

//SIDEBAR-OPEN
$('#navbarSupportedContent').on('hidden.bs.collapse', function () {
  $("body").removeClass("sidebar-open");
})

$('#navbarSupportedContent').on('shown.bs.collapse', function () {
  $("body").addClass("sidebar-open");
})


window.onresize = function () {
  var w = window.innerWidth;
  if (w >= 992) {
    $('body').removeClass('sidebar-open');
    $('#navbarSupportedContent').removeClass('show');
  }
}