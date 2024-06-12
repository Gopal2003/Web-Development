//Checking 
console.log("hello");

//Retriving the necessary HTML elements using their IDs
var adBtn = document.querySelector("#add");
var stat = document.querySelector("#status");
var rmvBtn = document.querySelector("#remove");



//Adding the Event Listener to the Add Friend Button
adBtn.addEventListener("click",function(){
    stat.textContent = "Friend";
})

//Adding the Event Listener to the Remove Button
rmvBtn.addEventListener("click",()=>{
    stat.textContent = "Stranger";
})
