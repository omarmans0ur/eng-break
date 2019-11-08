$(document).ready(function(){
 $(".sec1").hide();
 $(".sec3").hide();
 $(".sec2").hide();


$("#img1").mouseenter(function(){
    $(".sec1").fadeIn(3000);
    $(".sec3").fadeOut(2000);
    $(".sec2").fadeOut(2000);
     $(".turn-off").fadeOut(3000);
});

$("#img2").mouseenter(function(){
    $(".sec2").fadeIn(2000);
    $(".sec1").fadeOut(2000);
    $(".sec3").fadeOut(2000);
     $(".turn-off").fadeOut(3000);
});

$("#img3").mouseenter(function(){
    $(".sec3").fadeIn(2000);
    $(".sec1").fadeOut(2000);
    $(".sec2").fadeOut(2000);
     $(".turn-off").fadeOut(3000);
});

  });