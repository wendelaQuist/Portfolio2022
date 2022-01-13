var duck = document.querySelector('.duck');

let move = 20;

var img = document.querySelector('#eend');
var mywidth = img.clientWidth;
var myheight = img.clientHeight;

let x = innerWidth - mywidth;
let y = innerHeight - myheight;



window.addEventListener("load", () => {
    duck.style.position = "relative";
    duck.style.left = 0;
    duck.style.top = 0;
    duck.style.padding = "5vh";
});

document.addEventListener('keydown', function(event) {
    if(event.key === 'a' ){
        if(parseInt(duck.style.left)  >= 0 ){
            duck.style.left = parseInt(duck.style.left) - move + "px";
            document.getElementById("eend").src="./left duck.png";
        }
            
    }

    if(event.key === 'd' ){
        if(parseInt(duck.style.left) < x ){
            duck.style.left = parseInt(duck.style.left) + move + "px";
            document.getElementById("eend").src="./duck.png";
        }
    }

    if(event.key === 'w' ){
        if(parseInt(duck.style.top) >= 20){
            duck.style.top = parseInt(duck.style.top) - move + "px";
        }

    }

    if(event.key === 's' ){
        if(parseInt(duck.style.top) <= y){
        duck.style.top = parseInt(duck.style.top) + move + "px";
        }
    }  

})