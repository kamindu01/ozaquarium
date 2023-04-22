// brands carousel
var swiper = new Swiper(".kd-brands-carousel", {
    slidesPerView: 3,
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});