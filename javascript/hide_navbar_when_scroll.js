var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarbottom").style.bottom = "0";
  } else {
    document.getElementById("navbarbottom").style.bottom = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

$('.nav li a').on('click', function(){
if(!$( this ).hasClass('dropdown-toggle')){
$('.navbar-collapse').collapse('hide');
event.preventDefault();
$('html, body').animate({ scrollTop: 0 });
}
else {$('.nav').animate({ scrollTop: $("#scroll-item").offset().top }, 1500);
}
})
