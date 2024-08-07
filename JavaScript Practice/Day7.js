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
console.log(addNumbers([34, "gopal", "a", 4, "a", "5", 45]));

console.log("a ".split(""));
console.log("a ".split(""));

/*
 ! Question - loop an array of objects and remove all objects which don't have gender's value male. 
 */

function removeOddGender(arr) {
  //Approach 1
  // var ans = arr.filter(function(val){
  //   return val['gender'] == "male";
  // })

  // return ans;

  //Approach 2
  // var index = 0;
  // arr.forEach(function(val){
  //   if(val['gender'] != "male")
  //     {
  //       arr.splice(index,1);//(index, number of values).
  //     }
  //     index++;
  // });

  // return arr;

  //Approach 3 (modification)
  //1. First, find the total non-male counts.

  var count = 0;
  arr.forEach(function (elem) {
    if (elem.gender != "male") count++;
  });

  for (var i = 0; i < count; i++) {
    // The strategy is to remove one non-male object per iteration. Hence, the outer for loop is to tell how many non-male genders are needed to be
    //removed and the inner for loop used to iterate over the array and remove the first non-male gender every time so that the pattern of array will not be
    //disturbed and we will not miss the element as we were in Approach 2

    for (var j = 0; j < arr.length; j++) {
      if (arr[j].gender != "male") {
        arr.splice(j, 1);
        break;
      }
    }
  }

  return arr;
}

var arr = [
  { name: "harsh", gender: "male" },
  { name: "gopal", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "ishika", gender: "female" },
  { name: "kaliya", gender: "female" },
  { name: "ram", gender: "male" },
];

console.log(removeOddGender(arr));
// Didn't got the expected ans using approach 2. Why?
// lets consider we have values [1,2,3,4,5] in the array.
//you want to remove the even numbers from it.
// first, we encounter 2 as out first target. when we remove element,
// the behavior of the cursor changes as shown below:
// [1,2,3,4,5]  [1,3,4,5]
//    |            |

// In the next iteration, the cursor will move towards the next index,
//but the 3 was not checked at all. This happens because as 2 is removed,
//the remaining values are shifted towards its left and hence the value
//next to the 2 will come on the place of 2 and remains unchecked.

//TO solve this issue, the Approach is
//1. First, find the total non-male counts.
//2. Write a code to remove the non-male.
//3. Add a outer loop in 2 and loop till the count finishes.

/*
 ! Clone the array 
 */

function cloneArray(arr) {
  // way - 1
  // var clonedArr = [...arr];
  // return clonedArr;

  //way - 2

  var clonedArr = arr.map(function (val) {
    return val;
  });

  return clonedArr;
}
var arr = [1, 2, 3, 4, 5];

console.log(cloneArray(arr));

/*
 ! Return the type of the passed argument.
 */

function typeTeller(args) {
  return typeof args;
}

console.log(typeTeller([]));
console.log(typeTeller(function () {}));
console.log(typeTeller(true));
console.log(typeTeller(12));
console.log(typeTeller("String"));
console.log(typeTeller(undefined));
console.log(typeTeller(null));

/*
 ! Write a JavaScript Function to get the last element of an array. Passing a parameter n will return the last n elements of the array. 
 */

function getLastElements(arr, n = 1) {
  var length = arr.length;

  //way 1
  // var ans= [];
  // for(var i = length - 1; n != 0; i--,n--)
  // {
  //   ans.push(arr[i]);
  // }

  // return ans;

  return arr.slice(length - 3, length - 1);
}

var arr = [1, 2, 3, 4, 5];

console.log(getLastElements(arr, 4));

/*
  ! Write a JavaScript program to find the most frequent item of an array. 
  */

function mostFreq(arr) {
  var freq = {};
  arr.forEach(function (elem) {
    if (freq.hasOwnProperty(elem)) {
      freq[elem]++;
    } else {
      freq[elem] = 1;
    }
  });

  // Object.keys(freq) --> returns an array which contains all the keys of the object.
  var ans = Object.keys(freq).reduce(function (acc, next) {
    return freq[acc] > freq[next] ? acc : next;
  });
  // acc is like max variable which is generally used while finding the max value from the array. Once got the larger value than its own, it change its value to the larger value.

  // Working of .reduce : there are two parameters in reduce and it is a higher order function. The first parameter posses its value and the second parameter changes its value one after another. Based on some condition, the value is returned and the returned value is stored in the first parameter of the reduce function. Hence after the value changes it start possessing the new value. At last the first parameter is returned by the function after the iteration through the array completes.
  return ans;
}

console.log(mostFreq([1, 2, 3, 1, 3, 4, 5, 3, 2, 3, 5, 0]));

/*
   ! Write a JavaScript Program to shuffle an array. 
   */

function shuffle(arr) {
  var shuffleAreaLeft = arr.length;
  while(shuffleAreaLeft != 0)
  {
    var randNum = Math.floor(Math.random() * shuffleAreaLeft);
    shuffleAreaLeft--;


    //Swap the randNumth index with last index.
    var temp = arr[randNum];
    arr[randNum] = arr[shuffleAreaLeft];
    arr[shuffleAreaLeft] = temp;
  }


  return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(shuffle(arr));


/*
 ! Write a JavaScript Program to compute the union of two arrays 
 */

 function union(arr1,arr2){
     return [...new Set(arr1.concat(arr2))];
     //Explanation:
     /*
      * 1. Concatenate the arr2 in arr1.
      * 2. With the help of set, remove the repeating values from concatenated array.
      * 3. use spread operator to copy the set and indirectly convert it into an array.  
      */
 }

 console.log(union([1,2,3,4],[2,3,4,5,3]));
