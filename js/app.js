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