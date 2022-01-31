jQuery(document).ready(function() {

 
  jQuery(window).scroll(function(){
        

  if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
  {
      if ($(window).scrollTop() >= 50 ) {
          $('.navbar').addClass('fixed-header');
      }
      else {
          $('.navbar').removeClass('fixed-header');
      }
  }
});

});






function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 500);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

// ================slick slider=========================
jQuery(document).ready(function() {

  jQuery('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      next: false,
      prev: false,
      dots: false,
    });

  });

 // vars

//  ----------------------------testimonial-----------------------------------------
// 

