$(function(){
    $('.license-slider').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        rows: 1,

        prevArrow: $('.license-left-arrow'),
        nextArrow: $('.license-right-arrow'),
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
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            ]
    });

});

let license_slides = document.querySelectorAll('.license-slide');
console.log(license_slides)

for (let i =0; i < license_slides.length; i++){
    license_slides[i].addEventListener('click',()=>{
        let image_src = license_slides[i].querySelector('.license-slider-image').src;
        $('.popup').css('display','flex');
        $('.popup-content').attr('src',image_src);

    })
    $('.popup-close').click(()=>{
        $('.popup').css('display','none');
    })
}
