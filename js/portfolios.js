// $(window).load(function(){
//     // $('.loading').delay('5000').fadeOut();
// });

function slide(){
    $(".daon-img .slider").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000
    
    });
}
slide();
// const Circle = document.querySelectorAll(".circle");
// for(let i = 0; i<Circle.length; i++){
//     Circle[i].addEventListener('mousemove', function(){
//         Circle[i].classList.toggle('active')
//     })
// }