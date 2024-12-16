(function () {
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

    // Динамическая фильтрация товаров по цене (для страницы market.html)
    if (window.location.pathname.includes('market.html')) {
        const products = [
            { id: 1, name: 'Свеча Медведь', price: 300, image: 'images/bear.jpg' },
            { id: 2, name: 'Свеча Фатима', price: 500, image: 'images/fatima.png' },
            { id: 3, name: 'Свеча Пион', price: 700, image: 'images/pivon.png' },
            { id: 4, name: 'Свеча Лаванда', price: 450, image: 'images/lavender.png' },
            { id: 5, name: 'Свеча Ваниль', price: 600, image: 'images/vanilla.png' },
        ];

        const productList = document.getElementById('product-list');
        const priceRange = document.getElementById('price-range');
        const priceValue = document.getElementById('price-value');
        const filterForm = document.getElementById('filter-form');

        // Обновление значения слайдера цены
        priceRange.addEventListener('input', () => {
            priceValue.textContent = priceRange.value;
        });

        // Функция для отображения товаров
        function displayProducts(filteredProducts) {
            productList.innerHTML = ''; // Очищаем список товаров

            filteredProducts.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price} руб.</p>
                `;
                productList.appendChild(productItem);
            });
        }

        // Изначально отображаем все товары
        displayProducts(products);

        // Фильтрация товаров по цене
        filterForm.addEventListener('submit', event => {
            event.preventDefault();

            const maxPrice = parseInt(priceRange.value, 10);
            const filteredProducts = products.filter(product => product.price <= maxPrice);

            displayProducts(filteredProducts);
        });
    }
})();