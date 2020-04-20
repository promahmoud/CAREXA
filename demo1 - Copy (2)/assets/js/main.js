$(function () {

    //Scroll
    $.scrollIt({
        upKey: 33, // key code to navigate to the next section
        downKey: 34, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 100, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,
        topOffset: -90 // function(pageIndex) that is called when page is changed
    });
    $('.slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        autoplay: true,
        // animateOut: 'fadeOut',
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });

    $('.slider').on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2; // Position of the current item
        $('.caption').removeClass('fade-in-fwd');
        $('.owl-item').not('.cloned').eq(item).find('.caption').addClass('fade-in-fwd');
    });
});