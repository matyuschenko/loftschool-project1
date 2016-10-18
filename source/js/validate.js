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
                var data = {content: {}};
                $form.find('input, textarea').each(function () {
                    if (this.classList.contains('contact-me-form__button') || this.classList.contains('welcome-button)')) {
                        return;
                    }
                    if (this.type == 'radio' || this.type == 'checkbox') {
                        data.content[$(this).data('name')] = $(this).is(':checked');
                    } else {
                        data.content[$(this).data('name')] = this.value;
                    }
                });
                data.content.datetime = new Date();
                console.log(data);
                $.get('/submitform', data, function(data) {
                    alert('Сообщение отправлено!');
                    document.querySelector('form').reset();
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