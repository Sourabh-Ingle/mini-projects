let smallOne = document.querySelector(".smallCursor");
let bigCursor = document.querySelector(".bigCursor");

let mouseX = 0;
let mouseY = 0;
let animatedId = null;
let timer = null

document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    smallOne.style.left = mouseX + 'px';
    smallOne.style.top = mouseY + 'px';

    if (!animatedId) {
        animateCursor()
    }

    clearTimeout(timer);

     timer= setTimeout(()=>{
        cancelAnimationFrame(animatedId);
        animatedId=null
    },1000)

})

function animateCursor() {
    let shadowCursorX = parseFloat(bigCursor.style.left) || 0;
    let shadowCursorY = parseFloat(bigCursor.style.top) || 0;

    console.log(shadowCursorX, shadowCursorY);

    let distanceX = mouseX - shadowCursorX;
    let distanceY = mouseY - shadowCursorY;

    bigCursor.style.left = shadowCursorX + distanceX * 0.05 + "px";
    bigCursor.style.top = shadowCursorY + distanceY * 0.05 + "px";

       animatedId=requestAnimationFrame(animateCursor)


}
