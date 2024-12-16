document.addEventListener('DOMContentLoaded', function () {
    const filterForm = document.getElementById('filter-form');
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const productList = document.getElementById('product-list');

    // Загружаем цену из localStorage, если она есть
    const savedPrice = localStorage.getItem('maxPrice');
    if (savedPrice) {
        priceRange.value = savedPrice;
        priceValue.textContent = savedPrice;
    }

    priceRange.addEventListener('input', function () {
        priceValue.textContent = priceRange.value;
    });

    filterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const maxPrice = parseInt(priceRange.value);

        // Сохраняем выбранную цену в localStorage
        localStorage.setItem('maxPrice', maxPrice);

        const products = productList.querySelectorAll('.product-item');
        products.forEach(function (product) {
            const price = parseInt(product.getAttribute('data-price'));
            if (price > maxPrice) {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        });
    });
});
