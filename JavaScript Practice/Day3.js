console.log("Testing");

/*
 * Map - We use Map when we want to perform some operation on the elements of the array and stored them into a new array.
 */

var arr = [1, 2, 3, 4, 5];
var arr2 = [];

// The below Code is the functionality of Map.
// arr.forEach(function(val){
//     arr2.push(val * 2);
// })

var ans = arr.map(function (val) {
  return val * 2; // Return is important and here we are returning those value which we want to store into the new array. Now this array is imaginary. At the end, when the map perform all the operation on the value of arr then it will return that array.
});

console.log(ans);

/*
 ! Question 1
 * Create an array from an array in which if the word length is greater than 5, then add that word in p tag else add in span tag. Store that tag in the new array. 
 */

var arr = ["Gopal", "Agarwal", "He", "Is", "good", "boyyy"];

var ans = arr.map(function (val) {
  var length = val.length;

  if (length >= 5) {
    var tag = `<p>${val}</p>`;
    return tag;
  }
  else {
    var tag = `<span>${val}</span>`;
    return tag;
  }
});


console.log(ans);


/*
 !Question 2
 * We have an array of objects. Store the value of objects which have name are its property. 
 */

var object = [

    {name : "Gopal",Age: "21"},
    {name : "Ram",Age: "22",func : function(){console.log("hi")}},
    {name : "Krishna",Age: "23"},

    
]
 var ans2 = object.map(function(val){
    var name = {name : val["name"]}; // Alternative - val.name;
    return name;
 });


 console.log(ans2);


 /*
  *Filter.
  * The Structure of Filter is same as the map, just replace the map word with filter. In filter, the returned value must be a boolean i.e.,either true or false. In map, the returned values are stored in a imaginary array, here as we are returning a boolean, instead of saving boolean in array, the current value upon which the loop was running will be stored.
  ! Note: Only those values are stored where true is returned. 
  */

  var filterr = [1,2,3,4,5];

  var ans = filterr.filter(function(val){
        return val % 2 == 0; // In the end of the day, either true or false is returned through this expression and hence the value is stored accordingly..
  })

  console.log(ans);