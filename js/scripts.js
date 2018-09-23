$(document).ready(function() {

    /***************** Like Counter ******************/

    $('.count').each(function() {
        var clicks = Math.floor((Math.random() * 100) + 1);
        $(this).text(clicks);
    });

    $(".like_button").one("click", function() {
        var $count = $(this).parent().find('.count');
        $count.html($count.html() * 1 + 1);
        var $icon = $(this).parent().find('.like-counter');
        $($icon).removeClass("fa-heart-o");
        $($icon).addClass("fa-heart");
    });

    $(".like_button").on("click", function() {
        event.preventDefault();
    });

    /***************** Share Dropdown ******************/

    $("li a.share-trigger").on("click", function() {
        $('.share-dropdown').toggleClass("is-open");
        event.preventDefault();
    });

    /***************** Smooth Scroll ******************/

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    /***************** Responsive Nav ******************/

    $('.nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.navicon').toggleClass('fixed');
        $('.primary-nav-wrapper').toggleClass('open');
        event.preventDefault();
    });
    $('.primary-nav-wrapper li a').click(function() {
        $('.nav-toggle').toggleClass('active');
        $('.navicon').toggleClass('fixed');
        $('.primary-nav-wrapper').toggleClass('open');
    });

    /***************** Overlay touch/hover events ******************/

    if (Modernizr.touch) {
        $('figure').bind('touchstart touchend', function(e) {
            $(this).toggleClass('hover');
        });
    }

    $( '#cbp-contentslider' ).cbpContentSlider();
});
