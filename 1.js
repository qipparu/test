(function () {
    'use strict';	

    Lampa.Listener.follow('app', (e) => {
        if (e.type == 'ready') {
            setTimeout(function () {
                // Создаем новый элемент для раздела аниме
                var animeSection = document.createElement('div');
                animeSection.textContent = 'Это раздел аниме';

                // Вставляем новый элемент в DOM
                document.body.appendChild(animeSection);
            }, 10);
        }
    });

})();
