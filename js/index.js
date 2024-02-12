var prevScrollpos = window.pageYOffset;
var header_heigth = document.querySelector("header").offsetHeight;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = header_heigth * (-1) + "px";
  }
  prevScrollpos = currentScrollPos;
}