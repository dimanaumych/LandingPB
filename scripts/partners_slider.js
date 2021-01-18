$(function(){
    $('.partners-slider-wrapper').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        rows: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        draggable: true,
        dots: false,
        prevArrow: $('.partners-slider-left-button'),
        nextArrow: $('.partners-slider-right-button'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows:1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows:1
                }
            }
            ]
    });

});