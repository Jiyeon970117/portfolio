const Envelope = document.querySelector('.envelope');
const Letter = document.querySelector('.letter');
setTimeout(function(){
    Envelope.classList.add('visible')
},1000)
Envelope.addEventListener('click', function(){
    Envelope.classList.toggle("active")
})