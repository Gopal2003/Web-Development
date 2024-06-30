console.log("Testing");

/*
 !Slice and Splice. 
 * Slice is used to remove a part from an array. But this will not effect the original array.It Basically create the copy of that part.
 * Splice is used to remove a part from an array. This will effect the original array.
 * Slice - immutable - doesn't have the power to make changes.
 * Splice - mutable - can have the power to make changes.
 */

var arr = [1, 2, 3, 4, 5];

//Syntax - array_name.slice(startIndex,endIndex);
console.log(arr.slice(1, 3)); // 3 excluded
console.log(arr);

//Syntax- array_name.splice(startIndex, NumberOfValues);
console.log(arr.splice(2, 2)); //
console.log(arr);

/*
  ! Objects. 
  * NOTE: Arrays are not arrays, they are objects.
  !String - The word which is not known by the language is a string. Eg - GOpal is not known to js, hence, that is enclosed into "" to tell js that it is a string. 
  */

var obj = {
  name: "gopal",
  age: 20,
};

delete obj.name;
console.log(obj);

// If we don't want out object to be updated or changed, use Object.freeze(obj_name).

Object.freeze(obj);
delete obj.age;
console.log(obj);

/*
 * !!false.
 *!! symbol - !(!(false)) - false;
 * example - Array is truthy value - !![1,2,3,4,5]
 * Why to use?
 * !! symbol converts the value into its resembling boolean from.
 * basically convert the value into its boolean form.
 */

console.log(!![1, 2, 3, 4]);

/**
 * Const- const doesn't allows us to change the value once it declared. but we can update it.
 */

const value = 25;
console.log(value);
//    value = 5;// changing value;
console.log(value + 2); // updating value;

const obj2 = {
  name: "Gopal",
  age: "13",
};

obj2.name = "gopi"; //updated.

console.log(obj2);


/*
 *Set - Stores unique values 
 */

 var arr = [1,2,3,4,5,1,3,1,2,3,5];

 console.log(new Set(arr)); // This is still a set
 arr = new Set(arr);//still a set
 console.log(arr);

 arr = [...new Set(arr)];
 console.log(arr);//becomes array.
