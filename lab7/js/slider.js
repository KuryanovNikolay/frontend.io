document.addEventListener('DOMContentLoaded', function () {
    // Инициализация Swiper
    const swiper = new Swiper('.swiper-container', {
        // Параметры слайдера
        loop: true, // Зацикливание слайдов
        slidesPerView: 1, // Показывать 1 слайд за раз
        spaceBetween: 30, // Отступы между слайдами

        autoplay: {
            delay: 3000, // Автопрокрутка каждые 3 секунды
            disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии
        },

        pagination: {
            el: '.swiper-pagination', // Пагинация
            clickable: true, // Возможность клика
        },

        navigation: {
            nextEl: '.swiper-button-next', // Кнопка "Следующий"
            prevEl: '.swiper-button-prev', // Кнопка "Предыдущий"
        },

        effect: 'slide', // Анимация прокрутки (slide, fade, cube, etc.)
    });
});
