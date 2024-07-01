console.log("Testing");

/*
 ! Question 1 - Given a String, Reverse each word in the sentence. 
 */

//Solution
/*
 var dummy = "Gopal is a Good Boy";

var StringArr = dummy.split(" ");
var reversed = StringArr.map(function(word){
    console.log(word.split(""));
    console.log(word.split("").join(""));
    return word.split("").reverse().join("");// .reverse() can only be applied on arrays. Hence, first convert the string into an array and apply the reverse function then use the .join() function to rejoin the array into an string.
})

console.log(reversed.join(" "));
*/

/*
 !Question 2- How to check if an object is an array or not. 
 */

//Solution
/*

 function checkArray(elem){
   return Array.isArray(elem);
 }

 console.log(typeof([1,2,3]));
 console.log(typeof({
    name:"gopal"
 }));

 console.log(checkArray([1,2,3]));
 console.log(checkArray(checkArray({
    name : "Gopal"
 })))

*/

/*
 ! Question 3 - How to empty an array in JavaScript. 
 * can reset the array to [] (empty new array) and cannot pop values
 */

//solution
/*

 var arr = [1,2,3,4,5,6]
 arr.length = 0;

 console.log(arr);

*/

/*
 ! Question 4 - How Would you check if a number is an integer. 
 */

//solution
/*
var num = 11.0;

if (num % 1 != 0) { // 11 % 1 = 0 but 11.7 % 1 != 0 as 0.7 is remaining in the remainder
  console.log("Not an integer");
} else {
    console.log("Integer");
}
    //Way - 2
//  console.log(Number.isInteger(num));

*/

/*
 ! Question 5 - Make this work:
 ! duplicate([1,2,3,4,5]); -- [1,2,3,4,5,1,2,3,4,5];
 */

 //solution.
/*
 function duplicate(arr)
 {

 }

 var arr = [1,2,3,4,5];
 arr = arr.concat(arr);
 
 console.log(arr);

 */
