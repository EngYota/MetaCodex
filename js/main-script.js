$(document).ready(function(){   
    window.setTimeout('fadeout();', 2000);

    // $('.banner-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     rtl:true,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         600:{
    //             items:1,
    //             nav:false
    //         },
    //         1000:{
    //             items:1,
    //             nav:true,
    //             loop:false
    //         }
    //     }
    // })
    
    /*-------  Product Slider Active ----------------------------------*/
 $('.product-slider').owlCarousel({
    smartSpeed: 1000,
    nav: true,
    margin:8,
    rtl:true,
    navText: ['<span class="fa-solid fa-angle-right"></span>', '<span class="fa-solid fa-angle-left"></span>'],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        480: {
            items: 2
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})


    /*-------  Counter ----------------------------------*/
    $('#num1').CountUpCircle({
        duration: 7000, // In ms, default: 7000
        opacity_anim: false,
        step_divider: 5
    });
    $('#num2').CountUpCircle({
        duration: 7000, // In ms, default: 7000
        opacity_anim: false,
        step_divider: 1
    });
    $('#num3').CountUpCircle({
        duration: 7000, // In ms, default: 7000
        opacity_anim: false,
        step_divider: 50
    });
    $('#num4').CountUpCircle({
        duration: 7000, // In ms, default: 7000
        opacity_anim: false,
        step_divider: 1
    });

});



function fadeout(){
    $('.loading-preloader').delay(2000).fadeOut('slow'); 
}
