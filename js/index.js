const Img = document.querySelector('.left-col > figure > img');
const Porject = document.querySelector('.portfolio');
const Menu = document.querySelectorAll('.navbar ul li');
const Content = document.querySelectorAll('section');



//텍스트 타이핑 이벤트
const texts = ["끊임없이 노력하는  ", "사용자의 관점에서 개발하는  ","최신 트렌드를 중요시하는  " ]

const change = document.querySelector('.home p strong')
console.log(change)
let count = 0;
let index = 0;
let currentText = '';  //현재 텍스트
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
    setTimeout(type, 300);
}())







