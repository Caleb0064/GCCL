$(".carousel2").owlCarousel({
margin:30,
loop: true,
autoplay: true,
autoplayTimeout: 3000, //3000 ms = 2 sec
autoplayHoverpause: false,
responsive: {
    0:{
        items: 1,
        nav: false
    },
    600:{
        items: 1,
        nav: false
    },
    1000:{
        items: 2,
        nav: false
    }    
}

});
