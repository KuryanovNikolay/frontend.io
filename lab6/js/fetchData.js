document.addEventListener('DOMContentLoaded', function () {
    // Элемент для загрузки (preloader)
    const preloader = document.getElementById('preloader');
    const gallery = document.getElementById('gallery');

    // Псевдо-случайная фильтрация
    const randomId = Math.random() > 0.5 ? 100 : 200;

    // Функция для загрузки данных
    function fetchData() {
        // Показать прелоадер
        preloader.style.display = 'block';

        // Выполнение запроса через Fetch API
        fetch(`https://jsonplaceholder.typicode.com/photos?_start=${randomId}&_limit=5`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Что-то пошло не так');
                }
                return response.json();
            })
            .then(data => {
                // Скрыть прелоадер после получения данных
                preloader.style.display = 'none';

                // Очистить существующие данные
                gallery.innerHTML = '';

                // Отобразить новые данные
                data.forEach(item => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    galleryItem.innerHTML = `
                        <img src="${item.thumbnailUrl}" alt="${item.title}">
                        <p>${item.title}</p>
                    `;
                    gallery.appendChild(galleryItem);
                });
            })
            .catch(error => {
                // Обработка ошибок
                preloader.style.display = 'none';
                const errorMessage = document.createElement('p');
                errorMessage.textContent = '⚠ Что-то пошло не так';
                errorMessage.style.color = 'red';
                gallery.appendChild(errorMessage);
            });
    }

    // Инициализация загрузки данных
    fetchData();
});
