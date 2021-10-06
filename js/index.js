const Img = document.querySelector('.left-col > figure > img');
const Porject = document.querySelector('.portfolio');
const Menu = document.querySelectorAll('.navbar ul li');
const Content = document.querySelectorAll('section');


//스크롤 이벤트-화면

// window.addEventListener('scroll',function(){
//     if(1200 < window.scrollY){
//         skillBox.classList.add('active')
//         for(let i = 0; i < Skills.length; i++){
//             Skills[i].classList.add('active')
//         }
//     }
//     // let sct = window.pageYOffset

//     // for(let i = 0; i < Content.length; i++){
//     //     if(Content[i].offsetTop <= sct){
//     //         let idx = Content[i].getAttribute('data-num');

//     //         for(let j = 0; j < Menu.length; j++){
//     //             Menu[j].classList.remove('active')
//     //         }
//     //         Menu[idx].classList.add('active')
//     //     }
//     // }
    
// })

// 클릭이벤트
// let num = 0;
// for(let i = 0; i < Menu.length; i++){
//     Menu[i].addEventListener('click', function(e){
//         // e.preventDefault();
//         window.scroll({
//             top: Content[i].offsetTop,
//             behavior:'smooth'
//         });
//         Menu[num].classList.remove('active');

//         Menu[i].classList.add('active');
//         num = i;
//     })
    
// }



//텍스트 타이핑 이벤트
const texts = ["끊임없이 노력하는", "사용자의 관점에서 개발하는","최신 트렌드를 중요시하는" ]
const change = document.querySelector('.home p strong')
let count = 0;
let index = 0
let currentText = '';
let letter = '';

(function type(){
	if(count === texts.length){
        count = 0;
    }

	currentText = texts[count];
	letter = currentText.slice(0, ++index);

	change.textContent = letter;
	if(letter.length === currentText.length){
		count++;
        index = 0;
	}
    setTimeout(type, 200);
}())




gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "center center", // 애니메이션 시작 지점
        end: "bottom top",    //  애니메이션 끝 지점
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".title4", {y: innerHeight * 1})
.from(".databox", {y: innerHeight * 1})
.from(".data", {y: innerHeight * 1})




