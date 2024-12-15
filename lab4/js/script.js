(function () {
    // Все ваши скрипты здесь

    // Время загрузки страницы
    window.addEventListener('load', function () {
        const startTime = performance.timing.navigationStart;
        const endTime = performance.timing.loadEventEnd;
        const loadTime = (endTime - startTime) / 1000; // Время в секундах

        const loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            loadTimeElement.textContent = `Страница загружена за ${loadTime.toFixed(2)} секунд.`;
        }
    });

    // Интерактивность меню (наведение мыши на пункты меню)
    document.addEventListener('DOMContentLoaded', function () {
        const menuItems = document.querySelectorAll('.navbar a');

        menuItems.forEach(item => {
            item.addEventListener('mouseover', function () {
                item.style.color = '#e91e63'; // Цвет при наведении
            });

            item.addEventListener('mouseout', function () {
                item.style.color = ''; // Восстановить исходный цвет
            });
        });
    });

    // Установка активного класса на пункт меню в зависимости от текущей страницы
    document.addEventListener('DOMContentLoaded', function () {
        const currentPage = window.location.pathname.split('/').pop(); // Получаем имя текущей страницы
        const menuItems = document.querySelectorAll('.navbar a');

        menuItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage) {
                item.classList.add('active'); // Добавляем класс 'active' для текущей страницы
            }
        });
    });
})();
