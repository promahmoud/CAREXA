$(function () {

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