console.log("Testing");

/*
 !Slice and Splice. 
 * Slice is used to remove a part from an array. But this will not effect the original array.It Basically create the copy of that part.
 * Splice is used to remove a part from an array. This will effect the original array.
 * Slice - immutable - doesn't have the power to make changes.
 * Splice - mutable - can have the power to make changes.
 */

 var arr = [1,2,3,4,5];

 //Syntax - array_name.slice(startIndex,endIndex);
 console.log(arr.slice(1,3)); // 3 excluded
 console.log(arr);
 
 //Syntax- array_name.splice(startIndex, NumberOfValues);
 console.log(arr.splice(2,2)); //
 console.log(arr);
 