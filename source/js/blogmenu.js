// БЛОГ
$(window).on('load', function() {

    var blog_menu = (function () {

        var tabletWidth = 768,
            init = function () {
            var blog_nav = $('.blog-navigation'),
                blog_nav_scroll_pos = blog_nav.offset().top,
                blog_nav_left_offset = blog_nav.offset().left,
                blog_nav_w = blog_nav.width(),
                article_offsets = {},
                fixed_nav_top_margin = 30;

            $('.blog-post').each(function (i, t) {
                article_offsets[$(t).offset().top] = $(t).attr('id');
            });


            $(window).on('scroll', function () {
                var y_scroll_pos = window.pageYOffset;
                
                if ($(window).width() > tabletWidth) {
                    if (y_scroll_pos > blog_nav_scroll_pos - fixed_nav_top_margin) {
                        blog_nav.css({
                            position: 'fixed',
                            top: fixed_nav_top_margin,
                            left: blog_nav_left_offset,
                            width: '25%'
                        });
                    } else {
                        blog_nav.css({
                            position: 'static',
                            width: 'auto'
                        });
                    }
                }

                for (var o in article_offsets) {
                    if (y_scroll_pos < o && (y_scroll_pos + $(window).height()) > o) {
                        $('.blog-navigation__item').removeClass('blog-navigation__item_selected');
                        var rel_link = $('a[href*=#' + article_offsets[o] + ']');
                        rel_link.addClass('blog-navigation__item_selected');
                        break;
                    }
                }
            });

            if ($(window).width() <= tabletWidth) {
                _addSmallMenuBehavior();
            }

        },
        _addSmallMenuBehavior = function () {
            $('.blog-navigation').css({
                position: 'static',
                width: 'auto'
            });
            $('.small-screen-button').on('click', function () {
                if ($('.blog-sidebar').hasClass('shown')) {
                    _hideSmallMenu();
                } else {
                    _showSmallMenu();
                }
            });
            $('.blog-content').on('click', _hideSmallMenu)
        },
        _showSmallMenu = function () {
            var blog_sidebar = $('.blog-sidebar');
            blog_sidebar.animate({
                left: 0
            }, 150, 'swing', function () {
                blog_sidebar.addClass('shown');
            })
        },
        _hideSmallMenu = function () {
            var blog_sidebar = $('.blog-sidebar');
            blog_sidebar.animate({
                left: '-33.3%'
            }, 150, 'swing', function () {
                blog_sidebar.removeClass('shown');
            })
        };
        return {init: init};
    }());

    if (document.getElementsByClassName('blog-navigation').length) {
        blog_menu.init();
        $(window).on('resize', blog_menu.init);
    }

});