ball.onclick = function() {
    console.log('ballclicked');

    ball.classList.add('animate');
};

ball.addEventListener("webkitAnimationEnd", myEndFunction);

function myEndFunction() {
    console.log('animdone');
    sball.classList.add('searchboxexpand');
}

function expandsearchfun() {
    console.log("buttonclicked");
    sball.classList.remove('searchBox');
    sball.classList.add('searchboxexpand');

}