// БЛОГ
$(window).on('load', function() {
    var blog_menu = (function () {
        var init = function () {
            var article_offsets = {};
            $('.blog-post').each(function (i, t) {
                article_offsets[$(t).offset().top] = $(t).attr('id');
            });

            var blog_nav = $('.blog-navigation');
            var blog_nav_scroll_pos = blog_nav.offset().top;
            var blog_nav_left_offset = blog_nav.offset().left;
            var blog_nav_w = blog_nav.width();

            $(window).on('scroll', function () {
                var y_scroll_pos = window.pageYOffset,
                    fixed_nav_top_margin = 30;
                
                if ($(window).width() > 768) {
                    console.log(1);
                    if (y_scroll_pos > blog_nav_scroll_pos - fixed_nav_top_margin) {
                        blog_nav.css({
                            position: 'fixed',
                            top: fixed_nav_top_margin,
                            left: blog_nav_left_offset,
                            width: blog_nav_w
                        });
                    } else {
                        blog_nav.css({
                            position: 'static'
                        });
                    }
                }

                for (var o in article_offsets) {
                    if (y_scroll_pos < o && (y_scroll_pos + $(window).height()) > o) {
                        $('.blog-navigation__item').removeClass('blog-navigation__item_selected');
                        var rel_link = $('a[href*=#' + article_offsets[o] + ']');
                        rel_link.addClass('blog-navigation__item_selected');
                        return;
                    }
                }
            });

            if ($(window).width() <= 768) {
                _addSmallMenuBehavior();
            }

            _addListenerOnResize();
        },
        _addListenerOnResize = function () {
            $(window).on('resize', function () {
                if ($(window).width() <= 768) {
                    _addSmallMenuBehavior();
                }
            })
        },
        _addSmallMenuBehavior = function () {
            var blog_sidebar = $('.blog-sidebar');
            $('.small-screen-button').on('click', function () {
                if (blog_sidebar.hasClass('shown')) {
                    blog_sidebar.animate({
                        left: '-33.3%'
                    }, 150);
                    blog_sidebar.removeClass('shown');
                } else {
                    blog_sidebar.animate({
                        left: 0
                    }, 150);
                    blog_sidebar.addClass('shown');
                }
            })
        };

        return {init: init};
    }());

    if (window.location.href.indexOf('blog') != -1) {
        blog_menu.init();
    }
});