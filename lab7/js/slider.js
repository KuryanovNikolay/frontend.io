document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,

        allowTouchMove: true,
        simulateTouch: true,
        grabCursor: true,

        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
        },

        effect: 'slide',

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: false,
    });
});
