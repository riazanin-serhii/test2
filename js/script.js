 	window.onload = function(){
		let dots = document.querySelector('#topCarousel .owl-dots');
		let startWidth = window.innerWidth;
		if(startWidth<1140){
			winDeals.style.left = "5px";
			dots.style.left = "1px";
		}else{
			let res = (startWidth - 1140)/2;
			winDeals.style.left = res + "px";
	        dots.style.left = res + "px";
	    }


		window.addEventListener("resize", function() {
	        let dinWidth = window.innerWidth;
	        res = (dinWidth - startWidth)/2;
	        if(startWidth<1140){	
	        	winDeals.style.left = "5px";
				dots.style.left = "1px";
			}else{
				winDeals.style.left = ((startWidth - 1140)/2)+res+"px";
				dots.style.left = ((startWidth - 1140)/2)+res+"px";
				if(dinWidth<1140){
					winDeals.style.left = "5px";
					dots.style.left = "1px";
				}
			}
	    }, false);
	
 	
 	let activeMenu = document.querySelectorAll('.menuCarouselH2');	
 	activeMenu[1].addEventListener("click", function(){
 		
 		activeMenu[0].classList.remove("activeMenuCarousel");
 		activeMenu[1].classList.add("activeMenuCarousel");
 		mainCarousel.style.display = "none";
 	})

 	activeMenu[0].addEventListener("click", function(){
 		activeMenu[1].classList.remove("activeMenuCarousel");
 		activeMenu[0].classList.add("activeMenuCarousel");
 		mainCarousel.style.display = "block";
 	})
 
 	form.addEventListener("click", function() {
 		formSelect.style.display='block';
 	});

 	formSelect.addEventListener("click", function(e) {
 		let activeLi = Array.from(document.querySelectorAll('.activeLi'));
 			let res = e.target.innerHTML;
 			document.querySelector('option').innerHTML = res;
 			formSelect.style.display='none';
 	});
 }
