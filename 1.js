(function () {
    'use strict';

    Lampa.Listener.follow('app', (e) => {
        if (e.type == 'ready') {
            // Вместо удаления элемента, добавим содержимое в него или покажем его
            $("[data-action=anime]").eq(0).show(); // Показать элемент с атрибутом data-action="anime"
        }
    });

})();
