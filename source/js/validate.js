// VALIDATE AND SEND FORM
$(window).on('load', function () {
    var validation = (function () {
        var init = function () {
                _setupEventListeners();
            },
            _setupEventListeners = function () {
                $form = $('form');
                $form.find('input, textarea').on('focus', function () {
                    if (['Логин', 'Пароль', 'Имя', 'Почта', 'Сообщение'].indexOf(this.value) != -1) {
                        this.value = '';
                    }
                });
                $form.on('submit', _validateForm);
            },
            _validateForm = function (e) {
                e.preventDefault();
                var $form = $(this),
                    valid = true;
                $form.find('input, textarea').each(function () {
                    if (
                        this.value.length === 0 ||
                        ['Логин', 'Пароль', 'Имя', 'Почта', 'Сообщение'].indexOf(this.value) != -1
                    ) {
                        valid = false;
                    }
                });
                if (valid) {
                    _submitForm();
                } else {
                    alert('Вы заполнили не все поля формы!');
                }
            },
            _submitForm = function () {
                var $form = $(this),
                    url = 'processForms.php',
                    data = '';
                $form.find('input, textarea').each(function () {
                    data += this.value + '\t';   // separator
                });
                $.post(
                    url,
                    data,
                    function() { alert('Сообщение отправлено!'); }    // callback function for success
                );
            }
            ;


        return {
            init: init
        }
    })();

    if (document.querySelector('form')) {
        validation.init();
    }
});