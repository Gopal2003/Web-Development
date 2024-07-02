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

/*
  !Q - Function to reverse a number. 
  */

function reverseKaro(num) {
  // return Number(num.toString().split("").reverse().join(""))
  //way 2
  // var reverseNum = 0;
  // while (num > 0) {
  //   var digit = num % 10;
  //   reverseNum = reverseNum * 10 + digit;
  //   num = Math.floor(num / 10);
  // }
  // return reverseNum;
}

// console.log(reverseKaro(1256346));

/*
   ! Write a JS func that checks whether a passed string is palindrome or not
*/

function isPalindrome(str) {
  // if(str.split("").reverse().join("") == str)
  //   {
  //     return true;
  //   }

  //   return false;

  return str.split("").reverse().join("") == str;
}

console.log(isPalindrome("noon"));

/*
 ! Write a JS func that returns a passed string with letters in alphabetical order. 
 */

function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}

console.log(alphabeticalOrder("gopal"));

/*
  ! Write a JS func that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
  */

function convert(str) {
  var arr = str.split(" ");

  var ans = arr.map((val) => {
    return val.split("")[0].toUpperCase() + val.substr(1);
  });

  // var ans = "";
  // arr.forEach((val)=>{
  //   ans = ans + val.split("")[0].toUpperCase() + val.substr(1) + " ";
  // })

  return ans.join(" ");
}

console.log(convert("hello this is the sample sentence to check the function"));

/*
 ! Write a JS func to get the number occurrences of each letter in specified string. 
 */

function getOcc(str) {
  var occurrences = {};
  str.split("").forEach(function (elem) {
    // as str.split("") return an character array, by default elem act as character and hence doesn't required to specify '' in obj[elem]. For eg:  obj['elem'] - wrong.
    if (occurrences.hasOwnProperty(elem)) {
      occurrences[elem]++;
    } else {
      occurrences[elem] = 1;
    }
  });

  return occurrences;
}

var ans = getOcc("appleeeaaa");

console.log(ans);

/*
 ! loop an array and add all the elements of it 
 */

function sum(arr) {
  var sum = 0;
  arr.forEach((elem) => {
    sum = sum + elem;
  });

  return sum;
}

console.log(sum([2, 3, 4, 5, 6, 7]));

/*
 ! In an arrays of numbers and strings, add the numbers and return.
 */

function addNumbers(arr) {
  var sum = 0;
  arr.forEach((elem) => {
    if (typeof elem == "number") {
      sum = sum + elem;
    }
  });

  return sum;
}

//In JS, "" and '' are same. Both interpret strings.
console.log(addNumbers([34,"gopal",'a',4,"a","5",45]));

console.log("a ".split(""));
console.log('a '.split(""));