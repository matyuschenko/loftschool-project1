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
                    _submitForm($form);
                } else {
                    alert('Вы заполнили не все поля формы!');
                }
            },
            _submitForm = function (form) {
                var data = {content: ''};
                $form.find('input, textarea').each(function () {
                    data.content += this.value + '\t';   // separator
                });
                $.get('/submitform', data, function(data) {
                   console.log('clientside success callback: ', data);
                });
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