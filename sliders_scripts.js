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


new Swiper('.category_wrapper',{
    navigation:{
        nextEl: '.right_category',
        prevEl: '.left_category'
    },
    slidesPerView: 11,
    spaceBetween: 10,
    centeredSlides: false,
    loop:false,
    loopedSlides: 2,  

    // autoplay:{
    //     delay: 10000,
    // }
});
