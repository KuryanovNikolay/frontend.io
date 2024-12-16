(function () {
    window.addEventListener('load', function () {
        const startTime = performance.timing.navigationStart;
        const endTime = performance.timing.loadEventEnd;
        const loadTime = (endTime - startTime) / 1000;

        const loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            loadTimeElement.textContent = `Страница загружена за ${loadTime.toFixed(2)} секунд.`;
        }
    });

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

    document.addEventListener('DOMContentLoaded', function () {
        const currentPage = window.location.pathname.split('/').pop();
        const menuItems = document.querySelectorAll('.navbar a');

        menuItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage) {
                item.classList.add('active');
            }
        });
    });
})();
