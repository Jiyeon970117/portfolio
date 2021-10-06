const mouseCursor = document.querySelector('.cursor');


$(function(){
    $('header').load('inc.html header > nav',head)
});

function head(){
    // // //마우스 이벤트
    const navBar = document.querySelectorAll('.navbar ul li a');
    navBar.forEach(link => {
        link.addEventListener('mouseleave',() => {
            mouseCursor.classList.remove('navbar-grow');
            link.classList.remove('hover');        
        });

        link.addEventListener('mouseover',() => {
            mouseCursor.classList.add('navbar-grow');
            link.classList.add('hover');
        });
    })    

}


// // // 마우스커서 만들기
window.addEventListener('mousemove',function(e){
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
})






