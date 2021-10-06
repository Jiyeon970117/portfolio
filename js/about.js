// const skillBox = document.querySelector('.skills-box h2')
const skillBox = document.querySelector('.skills')
const Skills = document.querySelectorAll('.skill-value')
const arrowUP = document.querySelectorAll('.arrow-up')
const Skill = document.querySelectorAll('.my-skill')

for(let i =0; i<arrowUP.length; i++){
  arrowUP[i].addEventListener('click',function(){
    arrowUP[i].classList.toggle('rotate')
    Skill[i].classList.toggle('active')
  })
}
