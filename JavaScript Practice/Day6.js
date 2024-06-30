console.log("Testing");

/*
 ! Lambda Functions.
 *  Lambda functions is same as arrow function which is named as fat arrow function.
 * syntax ()=>{}
 * We use lambda function to reduce out time of code.It is consice and much readable.
 */

 /*
  ! Temporal dead zone 
  * Using var we use to create variables. Now, we have let and const. With the introduction of let and const we have another concept called Temporal Dead Zone.

  * Temporal dead zone is a stat or phase where let and const variables are not defined and declared. When we access the var before its declaration, we get answer as undefined because of hoisting. If we perform the same with let and const, then we get an ReferenceError. This error is because of Temporal dead zone where the variables created using let and const are not declared and defined.
  */

  /*
   ! Currying
   *  Converting a function with more than one parameter into a function which returns a function. These function perform the same operation as the function with two parameters does.
   */

   function abcd(a,b)
   {
    return a+b;
   }

   //Function inside a function. This is called currying.
    function currying(a)
    {
        return function(b)
        {
            return a + b;
        }
    }
   console.log(abcd(4,5));

   console.log(currying(4)(5));


   /*
    ! Pure Function  
    Conditions are given in notes
    Example for condition 1.
    function abcd(a)
    {
        console.log(a + 3);
    }

    If we pass 12 every time, we get the output 15. But if we add Math.random() then we may not get the same output. Hence, in this case the function is impure function.

    Example for condition 2.

    var global = 12;

    function abcd()
    {
        global++;
    }
    
    the global value is incremented, hence the function is called impure function.

    */