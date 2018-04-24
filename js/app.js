/* Trigger the active state by appending class name is-active */
$(document).ready(function(){
    $("#header-toggler").click(function(){
        $(this).toggleClass("is-active");       
    });
});

/* Hide logo while scrolling down */
//When the user scrolls down 70px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar-scroll").style.top = "-80px";
    } else {
        document.getElementById("navbar-scroll").style.top = "0";
    }
};

/* ScrollReveal animations */
window.sr = ScrollReveal({mobile: false});

sr.reveal('.btn-outline-success', { 
  origin: 'left',
  distance: '200px', 
  duration: 2500 
});

sr.reveal('.btn-outline-danger', { 
  origin: 'right', 
  distance: '200px',
  duration: 2500 
});

sr.reveal('#prof figure',{ 
  duration: 3000
});

sr.reveal('.administration figure',{   
  duration: 3000
});

sr.reveal('.leftfield', { 
  origin: 'left', 
  distance: '200px',
  duration: 2500 
});

sr.reveal('.rightfield', { 
  origin: 'right', 
  distance: '200px',
  duration: 2500 
});

sr.reveal('.textfield', { 
  origin: 'bottom', 
  distance: '250px',
  duration: 2500 
});

sr.reveal('.row .btn', { 
  origin: 'bottom', 
  distance: '200px',
  duration: 3000 
});