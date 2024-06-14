console.log("Hello");

//Selecting the Necessary Elements.
var main = document.querySelector("#main");
var cursor = document.querySelector(".cursor");


main.addEventListener("mousemove",function(Details){
        cursor.style.left = Details.x - 6 + "px";
        cursor.style.top = Details.y - 2 + "px";

})