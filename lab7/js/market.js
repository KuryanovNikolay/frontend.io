document.addEventListener('DOMContentLoaded', function () {
    const filterForm = document.getElementById('filter-form');
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const productList = document.getElementById('product-list');

    priceRange.addEventListener('input', function () {
        priceValue.textContent = priceRange.value;
    });

    filterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const maxPrice = parseInt(priceRange.value);

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
