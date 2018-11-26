
/*$(window).on("load", function () {
 
 });*/

$(document).ready(function () {
    $.fn.andSelf = function () {
        return this.addBack.apply(this, arguments);
    };

    /*lightbox.option({
     'albumLabel': "Obrázek %1 z %2"
     });*/

    /*$('[data-toggle="tooltip"]').tooltip();*/

    /* $.stellar({
     horizontalScrolling: false,
     verticalOffset: 40
     });*/



    /*var $grid = $('.inner-gallery').isotope({
     itemSelector: '.gallery-item',
     layoutMode: 'masonry'
     });*/

    /*Scroll-to animated function using plugin */
    $('[scroll-to]').on('click', function (e) {
        var target = $(this).attr('scroll-to');

        $('body').scrollTo($(target), 1500);

        e.preventDefault();
    });


    /*
     * var carousel = $('.carousel .owl-carousel');
     carousel.owlCarousel({
     loop: true,
     margin: 0,
     nav: false,
     dots: true,
     items: 1,
     autoplay: true,
     animateOut: 'fadeOut',
     autoplayTimeout: 5000,
     autoplayHoverPause: true
     
     });
     $('.slider-wrap .left').click(function () {
     carousel.trigger('prev.owl.carousel');
     });
     $('.slider-wrap .right').click(function () {
     carousel.trigger('next.owl.carousel');
     });
     
     
     
     //click outside an element to close it
     $(document).click(function (event) {
     if (!$(event.target).closest('.tracking').length) {
     if ($('.tracking-list').is(":visible")) {
     $('.tracking-list').hide();
     }
     }
     });
     */

    /*
     //settimeout
     setTimeout(function () {
     
     }, 500);
     */


    /* $('').on('click', function () {
     });*/
});



/*
 $(window).scroll(function(){ //on window scroll function
 
 });
 */
