var arr = [
    {"dp" : "https://images.unsplash.com/photo-1577912931989-cf038df56a56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","story" : "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {"dp" : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","story" : "https://images.unsplash.com/photo-1534008757030-27299c4371b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {"dp" : "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","story" : "https://images.unsplash.com/photo-1613763968264-444a4909b1fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {"dp" : "https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","story" : "https://images.unsplash.com/photo-1523264766116-1e09b3145b84?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

var storiyan = document.querySelector("#storiyan");
var clutter = ""; // If leaved Empty then undefined is added to the result.
var fullScreen = document.querySelector("#full-screen");
arr.forEach(function(items,idx){
    clutter = clutter + `<div class="story">
        <img id = "${idx}"src="${items.dp}" alt="">
     </div>`;
})

storiyan.innerHTML = clutter;
storiyan.addEventListener("click",function(dets){
    // The below Displayes pointerEvent. PointerEvent are those which tells us what were the incidents occured when we perform 
    //action on the targeted element.
    // console.log(dets);
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
})