//Targeting the container and icon using id and tag and declaring the necessary variables.
var con = document.querySelector("#container");
var love = document.querySelector("i");

function removeHeart()
{
    setTimeout(function(){
        love.style.opacity = 0;
        love.style.transform = "translate(-50%,-50%) scale(0)";
        
    },450)
}
con.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 2.8;
    removeHeart();
});


