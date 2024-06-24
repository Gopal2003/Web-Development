console.log("Checking");

/*
    ! Question:1
    * Use the forEach loop and Print Hello inFront of all the members of Array.
*/

//Solution 1:

//Creating Array with some dummy data.
var arr = [1,2,3,4,5];

//using forEach Loop.
arr.forEach(function(value){
    console.log(value + " Hello ");
})



/*
    ! Question:2
    * Use the forEach loop and Print the values which are less than 2.
*/

//Solution 2

var arr = [1,4,2,1,0,-3,2];

arr.forEach(function(value){
    if(value <= 2)
    {
        console.log(value);
    }
})

