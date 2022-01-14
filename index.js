var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){
    cursor2.style.cssText = cursor.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;";
})