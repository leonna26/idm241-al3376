ball.onclick = function() {
    console.log('ballclicked');

    ball.classList.add('animate');
};

ball.addEventListener("webkitAnimationEnd", myEndFunction);

function myEndFunction() {
    console.log('animdone');
}