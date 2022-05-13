function Load(){
    $(".daon-img .slider").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,

        // responsive: [ // 반응형 웹 구현 옵션
        //     {  
        //         breakpoint: 1024, //화면 사이즈 960px
        //         settings: {
        //             //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        //             slidesToShow:4
        //         } 
        //     }
        // ]
    });

    const TextElems = document.querySelectorAll('.text');
    const ImgElems = document.querySelectorAll('.scroll-content > li');
    const Home = document.querySelector('.home');
    const cursor = document.querySelector('.cursor');
    let currentItem = ImgElems[0];

    Home.addEventListener('mouseleave', () => cursor.style.display = 'block')
    Home.addEventListener('mouseover', () => cursor.style.display = 'none');

    TextElems.forEach( (text, i) => {
        text.dataset.index = i;
        ImgElems[i].dataset.index = i;
    });

    // 활성화
    const activate = () => currentItem.classList.add('visible');

    // 비활성화
    const inactivate = () => currentItem.classList.remove('visible');

    const scrolling = () => {
        let Text;
        let boundingRect;
        TextElems.forEach((text,i) => {
            Text = text;
            if(!Text) return;
            boundingRect = Text.getBoundingClientRect();

            if( boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8){
                inactivate();
                currentItem =  ImgElems[Text.dataset.index];
                activate();
            }
        })
    }
    window.addEventListener('scroll',scrolling)
}

window.addEventListener('DOMContentLoaded',Load);
