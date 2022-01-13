document.getElementById('eend').addEventListener("click", play);
var test;

function play(){
    var audio = new Audio();
    audio.src = "Quack.mp3";
    audio.play();
}

