document.addEventListener('DOMContentLoaded', function() {
$('.nav li a').on('click', function(){
if(!$( this ).hasClass('dropdown-toggle')){
$('.navbar-collapse').collapse('hide');
event.preventDefault();
$('html, body').animate({ scrollTop: 0 });
}
else {$('.nav').animate({ scrollTop: $("#scroll-item").offset().top }, 1500);
}
})
}, false);