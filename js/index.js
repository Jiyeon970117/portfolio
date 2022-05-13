
const onLoad = () => {
		const mouseCursor = document.querySelector('.cursor');
		const Menu = document.querySelector('.navbar ul');
		const navBar = document.querySelectorAll('.navbar ul li');
		const text = document.querySelector(".text p");
		const content = document.querySelector(".content");
		const arrowUP = document.querySelectorAll('.arrow-up');
		const portFolio = document.querySelector('.portfolio');
		const content1 = document.querySelector('.content1');
		const Contact = document.querySelector('.contact1')
		const Envelope = document.querySelector('.envelope');
		

		//마우스 이벤트
		const mouseEffect = () => {
			navBar.forEach( (link) => {
				link.addEventListener('mouseleave',() => {
						mouseCursor.classList.remove('navbar-grow');
						link.classList.remove('hover');        
				});
	
				link.addEventListener('mouseover',() => {
						mouseCursor.classList.add('navbar-grow');
						link.classList.add('hover');
				});
			});	
		};
		mouseEffect();

		const movePosition = (e) => {
			if(e.target.nodeName === 'LI'){
				let id_value = document.querySelector(e.target.dataset.link);
				id_value.scrollIntoView({behavior : 'smooth'});
			}
		};

		Menu.addEventListener('click', movePosition)

		//텍스트 타이핑 이벤트
		const texts = ["끊임없이 노력하는  ", "발전하기 위해 노력하는  ","최신 트렌드를 중요시하는  " ];

		const change = document.querySelector('.home p strong');
		let count = 0;
		let index = 0;
		let currentText = '';  //현재 텍스트
		let letter = '';

		function type(){
			if(count === texts.length) count = 0;

			currentText = texts[count];
			letter = currentText.slice(0, ++index);

			change.textContent = letter;
			if(letter.length === currentText.length){
				count++;
				index = 0;
			}
				setTimeout(type, 300);
		}

		type();

		// rotate 이벤트
		text.innerHTML = text.innerText.split("").map(
			(char, i) => `<span style="transform:rotate(${i * 13.5}deg)">${char}</span>`
		).join("")


		// 스크롤 이벤트
		window.addEventListener('scroll', () => {
			window.scrollY > 1100 ? content.classList.add("visible") : '';
			window.scrollY >= portFolio.offsetTop - 200 ? content1.classList.add('active'): '';
			window.scrollY >= Contact.offsetTop - 100 ? Envelope.classList.add('visible') : '';
		})


		const ClickOutcome = e => e.target.parentNode.closest('div').classList.toggle('show');

		// arrow클릭 이벤트
		arrowUP.forEach( arrow => arrow.addEventListener('click',ClickOutcome));


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

		// envelope Click
		Envelope.addEventListener('click', () => Envelope.classList.toggle("active") );


		setTimeout( () => scrollTo(0, 0), 100)

};

window.addEventListener('DOMContentLoaded',onLoad)



