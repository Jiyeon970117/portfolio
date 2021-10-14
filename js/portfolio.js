const content1 = document.querySelector('.content1');
const Project = document.querySelector('.prj-1');
const Project2 = document.querySelector('.prj-2');
const Project3 = document.querySelector('.prj-3');

    setTimeout(function(){
        content1.classList.add('active')
    },1000)

    setTimeout(function(){
        Project.classList.add('active')
    },1000)
// let timer1 = setInterval(function(){
// }, 1000)


// 클릭시 html 이동
Project.addEventListener('click', function(){
  location.href='portfolio01.html'
})
Project2.addEventListener('click', function(){
  location.href='portfolio02.html'
})
Project3.addEventListener('click', function(){
  location.href='portfolio03.html'
})

// 큐브 이벤트
new Swiper( '.myswiper', {

    // 큐브 효과 사용
    effect : 'cube',
    
    cubeEffect : {
		slideShadows : true, // 슬라이더를 돌릴때 흐릿해 지는 그림자 표시 여부
		shadow : true, // 슬라이더 밑의 그림자 표시 여부
		shadowOffset : 20, // 그림자 위치, 수치가 클수록 아래로 내려감
		shadowScale : 0.94, // 그림자 크기, 수치가 클수록 그림자 커짐
	},


    // 슬라이드 반복
    loop : true,

    // 페이징 설정
    pagination : {

        // 페이징 요소의 클래스명
        el : '.swiper-pagination',

        // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        clickable : true,

    },

});






// scrolltrigger 이벤트
gsap.timeline({
    scrollTrigger: {
        trigger: ".content2",
        start: "center center", // 애니메이션 시작 지점
        end: "bottom top",    //  애니메이션 끝 지점
        markers: false,
        scrub: true,          //되감기
        pin: true

    }
})
.from(".text4", {x: innerWidth * 1})
.from(".text5", {x: innerWidth * -1})
.from(".text6", {x: innerWidth * 1})
.from(".prj-2", {
    y: innerHeight * 1,
    rotate: 360
})


gsap.timeline({
    scrollTrigger: {
        trigger: ".content3",
        start: "center center", // 애니메이션 시작 지점
        end: "bottom top",    //  애니메이션 끝 지점
        markers: false,
        scrub: true,
        pin: true

    }
})
.from(".text7", {y: innerHeight * 1})
.from(".text8", {y: innerHeight * 1})
.from(".text9", {y: innerHeight * 1})
.from(".prj-3", {
    y: innerHeight * 1,
    rotate: 360
})
