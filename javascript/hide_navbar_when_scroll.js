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
