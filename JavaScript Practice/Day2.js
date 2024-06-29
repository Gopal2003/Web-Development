console.log("Testing...");

/*
 !- Question 1
 * Check whether the passed value into an function is an array or not.
 */

/*
function checkArray(element) {
    // Way - 1.
    /*
  if (Array.isArray(element)) {
    return true
  }
  else{
    return false;
  }
    

    //Way 2
    var check = element instanceof Array;

    return check;
}

//Array with Dummy Data.
var arr = [1, 2, 3, 4, 5];
//Calling the function which checks whether the passed value is array or not.
var result = checkArray(arr);
console.log("Array?? " + result);
*/

/*
  ! Question 2
  * Write a JavaScript function to clone an array.
 */

//Function to Clone the Array.
function cloneArray(element) {
  var clone = [...element]; // Spread.

  return clone;
}

var arr1 = [1, 2, 3, 4, 5, [0, 2]];
var clonedArray = cloneArray(arr1);

console.log(clonedArray);

/*
! Question 3
* Write a function which takes n and array as parameters. If the value of n is passed, print the first n elements of the array else return an array which contains the first element of the passed array.
*/

//Function to return the first n elements of the array.
function getValues(arr, n = 1) {
  var ans = [];

  //   if (n == undefined) {
  //     ans.push(arr[0]);
  //     return ans;
  //   }
  for (var i = 0; i < n; i++) {
    ans.push(arr[i]);
  }

  return ans;
}

var arr = [1, 2, 3, [5, 6], 4, 5];
var result = getValues(arr);

console.log(result);

/*
 !Question 4
 * Write a simple JavaScript program to join all elements of the following array into a String.
 */

//Function to add the the values of array into string.
function joinElements(arr) {
  var ans = "";
  //   for (var i = 0; i < arr.length; i++) {
  //     ans = ans + arr[i].toString() + " , ";
  //   }

  //Direct Method
  ans = arr.join(); // Join method adds all the elements of the array with the value passed as parameter in it. If nothing is passed then by default , is placed as a separator.
  return ans;
}

var arr = ["apple", "grapes", "mango", "guava", "pineapple", 1];
var result = joinElements(arr);

console.log(result);

/*
 ! Question 5
 * Different Ways to Create an object.
 */

var a = {}; // Object literal

var ans = Object.create(null); // If null is removed, then some error is thrown
ans["Gopal"] = 4;
console.log(ans);

function abcd() {
  this.name = "Harsh"; // this refers to that imaginary object. i.e., {"name" : "Harsh"}
  this.salary = 34792856;
}

var obj = new abcd();
console.log(obj); // The movement we say new, it will create an imaginary Object.

class Abcd {
  constructor() {}
  a = 12;
}

var ans1 = new Abcd();
console.log(ans1);

/*
 ! Question 6
 *Higher Order Function.
 */

//Demonstration of the working of the below function: First, a function is returned. Then the returned function is called with its parameter and sum of inp + inp2 is calculated and returned.
//! Note: since the function inside the return statement is not called, we can't execute it.
function HOF(inp) {
  return function (inp2) {
    return inp + inp2;
  };
}

var returnedFunction = HOF(10); // Function is returned.
console.log(returnedFunction(20)); // Callind the returned function with the parameter 20;

/*
 ! Question 7
 *This Keyword.
 */

/*
 * At global scope, this = window (this prints window).
 * At function scope, this = window
 * method = object
 * function
 */

//At global scope
console.log(this);

//At Function Scope
function abcde() {
  console.log(this);
}

abcde();

//Inside Method.

var obj = {
  name: "Harsh",
  sayName: function () {
    console.log(this); // Return its own object
  },
};

obj.sayName();

var arr = [1, 2, 3, 4, 5];

var ans = arr.filter(function (val) {
  
    return this;
  
});

var ans2 = arr.map(function(val){
  if(true){
    val = val + 2;
  }
  return this;
})

console.log(ans);
console.log(ans2);

/*
 * Call Apply Bind.
 */

//The default value of this inside a function is window. using .call, we can specify the value of this.

var obj1 = { name: "Gopal" };

function CAB() {
  console.log(this);
}

CAB.call(obj1); // Here, this = obj1.

/*
 *Apply - Same as call but simplifies the technique of passing the arguments.
 */

var obj1 = { name: "Gopal" };

function apply(a, b, c, d) {
  console.log(this, a, b, c, d);
}

//The only difference is that we pass the remaining arguments into an array.
apply.apply(obj1, [1, 2, 3, 4]); // Here, this = obj1.
apply.call(obj1, 1, 2, 3, 4);

/*
 *Bind- Bind is same as call but bind never calls the function i.e., it will just bind the function with the value you passed for this.
 */

var saved = apply.bind(obj1, 1, 2, 3);
saved();
