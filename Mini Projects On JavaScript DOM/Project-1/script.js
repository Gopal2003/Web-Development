//Checking
console.log("hello");

//Retriving the necessary HTML elements using their IDs
var adBtn = document.querySelector("#add");
var stat = document.querySelector("#status");
var rmvBtn = document.querySelector("#remove");

//Flag to handle the cases
var flag = 0;

//Adding the Event Listener to the Add Friend Button
adBtn.addEventListener("click", function () {
  if (flag == 0) {
    stat.textContent = "Friend";
    stat.style.color = "green";
    adBtn.textContent = "Remove Friend";
    flag = 1;
  } else {
    stat.textContent = "Stranger";
    stat.style.color = "red";
    adBtn.textContent = "Add Friend";
    flag = 0;
  }
});
