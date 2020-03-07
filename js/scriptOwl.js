 $(document).ready(function(){
  $("#topCarousel").owlCarousel({
  	items:1,
  	autoplay:true,
  	loop:true,
  	dots:true,
  	autoplayTimeout:10000
  	 });
});

$(document).ready(function(){
  $("#mainCarousel").owlCarousel({
      items:3,
      autoplay:true,
      margin:70,
      loop:true,
      dots:false,
      nav:true,
      autoplayTimeout:5000,
      responsive : {
    
        1500 : {
            items:3,
        },
        992 : {
            items:2,
        }, 
        480 : {
            items:1,
        },
        320 : {
            items:1,
            avtoWidth:true,
        },       
      }
     });
});