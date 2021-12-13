/*start of header magic*/
const head = document.querySelector("#header");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 5) {
    head.classList.add("active");
  } else {
    head.classList.remove("active");
  }
};
/*end of header magic*/

/*start of navtext color change on scroll*/
window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY> 0);
      });
/*end of navtext color change on scroll*/

/*start of scrollTop*/
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active" , window.scrollY > 500)
  })
  
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
/*end of scrollTop*/