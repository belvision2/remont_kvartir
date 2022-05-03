(function ($, w) {
setTimeout(() => {
        ym(39861120, 'reachGoal', 'timeOnSite')
    }, 70000);


    $(function () {
        var $link = $('.ya-link');
        var $submit = $('.ya-submit');
        var _debug = 1;
        var methods = {
            reach: function (counter, goal) {
                w['yaCounter' + counter].reachGoal(goal);
            },
            sendTag(type, id) {
                // Событие / название события / параметры
                gtag('event', 'event', {'event_category': type, 'event_action': id,})
            }
        };
        try {
            if (appGlobalsVarible === undefined && appGlobalsVarible.yametrika === undefined) {
                if (_debug) console.log('[YA METRIKA] ID не найден')
                return
            }
        } catch (e) {
            console.warn(e);
            return;
        }

        $('form').each(function () {
            var $form = $(this);
            var $goalInput = $form.find('[name=goal]');
            if ($goalInput.length == 0) return;
            $form.attr('data-goal', $goalInput.val());
            $form.on('submit', goalHandler);
        });


        $link.on('click', goalHandler);
        $submit.on('submit', goalHandler);

        function goalHandler(e) {
            var $this = $(this);
            var id = $this.attr('data-goal');
            console.log(e.type);
            if (id !== undefined) {
                methods.reach(appGlobalsVarible.yametrika.id, id);
                methods.sendTag(e.type, id);
            }
        }
    })
})(jQuery, window);