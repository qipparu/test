(function () {
    'use strict';

    Lampa.Listener.follow('app', (e) => {
        if (e.type == 'ready') {
            setTimeout(function () {
                var sections = [
                    { action: "anime", text: "Аниме" },
                    { action: "relise", text: "Relise" },
                    { action: "mytorrents", text: "My Torrents" },
                    { action: "about", text: "About" },
                    { action: "console", text: "Console" },
                    { action: "feed", text: "Feed" },
                    { action: "subscribes", text: "Subscribes" }
                ];

                sections.forEach(function (section) {
                    var existingItem = $('[data-action="' + section.action + '"]');
                    if (existingItem.length === 0) {
                        var sectionMenuItem = `
                            <li class="menu__item selector binded" data-action="${section.action}">
                                <div class="menu__ico">
                                    <!-- Your SVG code here -->
                                </div>
                                <div class="menu__text">${section.text}</div>
                            </li>
                        `;
                        $(".menu").append(sectionMenuItem);
                    }
                });
            }, 10);
        }
    });

})();
