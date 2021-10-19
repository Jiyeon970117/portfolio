const section = document.querySelector(".me")
const text = document.querySelector(".text p")
const content = document.querySelector(".content")
const Skills = document.querySelectorAll(".skills-box")
const arrowUP = document.querySelectorAll('.arrow-up')
console.log(content)
let innerWidth = window.innerWidth;

// rotate 이벤트
text.innerHTML = text.innerText.split("").map(
  (char, i) => `<span style="transform:rotate(${i * 13.5}deg)">${char}</span>`
).join("")

// 스크롤 이벤트

window.addEventListener('scroll', function(){
    if(window.scrollY > 300){
      content.classList.add("visible")
    }  
  // if(window.scrollY + window.innerHeight >= document.body.offsetHeight){
  // }
})

for(let i = 0; i<arrowUP.length; i++){
  arrowUP[i].addEventListener('click', function(){
    arrowUP[i].classList.toggle('rotate')
    Skills[i].classList.toggle('active')
  })
}

