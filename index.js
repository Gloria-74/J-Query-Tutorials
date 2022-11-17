"use strict"
/*
$(document).ready(function(){
    $("#btn").click(function(){
        $("div.text").toggleClass("blue");
    });
});
*/

$('.carousel').carousel({
    interval: 500
});

$('#BootstrapCarousel').on('slide.bs.carousel', function () {
    $("p").toggleClass("hide");
});
