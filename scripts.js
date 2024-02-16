new Swiper('.swiper-container',{
    navigation:{
        nextEl: '.swiper-prev',
        prevEl: '.swiper-next'
    },
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop:true,
    loopedSlides: 2,
    
    
    autoplay:{
        delay: 10000,
    }

});

