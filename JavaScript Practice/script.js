console.log("Checking");

/*
    ! Question:1
    * Use the forEach loop and Print Hello inFront of all the members of Array.
*/

//Solution 1:

//Creating Array with some dummy data.
var arr = [1, 2, 3, 4, 5];

//using forEach Loop.
arr.forEach(function (value) {
  console.log(value + " Hello ");
});

/*
    ! Question:2
    * Use the forEach loop and Print the values which are less than 2.
*/

//Solution 2

var arr = [1, 4, 2, 1, 0, -3, 2];

arr.forEach(function (value) {
  if (value <= 2) {
    console.log(value);
  }
});

/*
    ! Question: 3
    *Sum all the elements of the array.
*/

//Solution 3

var arr3 = [1, 2, 3, 4, 5];
var sum = 0;
//ForEach Loop to sum the elements of the array
arr3.forEach((elem) => {
  sum = sum + elem;
});

console.log(sum);

/*
 ! Question: 4
 * Sum all the elements of the array. Skip those element which are string.
 */

var arr4 = [1, 2, "4", "gopal", 5];
var sum = 0;

arr4.forEach(function (elem) {
  if (typeof elem == "number") {
    sum = sum + elem;
  }
});

console.log(sum);

/*
 ! Interview Question.
 * Find the output.
 */

var arr = [];

for (var i = 0; i < 10; i++) {
    arr.push(function(){
        setTimeout(function(){ 
            console.log(i);
        },1000)
    })
}

for(var i = 0; i < 10; i++)
{
    arr[i]();
}    

/*
 * Explanation - As setTimeout is an Asynchronous Function, the code inside it will execute after all the synchronous code is executed.
 * Here is the catch, As var is an function scope variable, the i in first loop will increment till 10. After this operation, the below for loop is iterated and function
 * at ith index is called. When arr[function()] at index i is called, the value of var i was 10 at the end of the first for loop and hence, every time the function is called
 * 10 is printed.
 * If let i is used, then index at the current iteration will be printed as let is braces scoped.
 * Example : arr[0]() -> setTimeout(function(){
 *  console.log(0);
 * })
*/
