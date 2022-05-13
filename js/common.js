window.addEventListener('DOMContentLoaded', () => {
    const mouseCursor = document.querySelector('.cursor');
    const Cursor = (e) => {
        mouseCursor.style.top = e.pageY + "px"
        mouseCursor.style.left = e.pageX + "px"
    };

    // 마우스커서 만들기
    window.addEventListener('mousemove', Cursor);
});




