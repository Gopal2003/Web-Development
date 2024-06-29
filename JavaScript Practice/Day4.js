console.log("Hello");

/*
 * IIFE - Immediately invoked function expression is a function expression which is immediately called as it is created.
    ! When we wrap a statement into () then it becomes function expression. (function(){}) -> expression.

    * Why we are using IIFE?
    As console.log("hello") also executed immediately then what is the need to write (function(){
        console.log("hello")
    })();
    The reason is to create the private variable. the variable declared inside an IIFE becomes private by default. The reason for the private variable is that, when we normally declare a variable and print the value using console.log(), then anyone can modify that value using the console in the browser. To avoid that we are using iife whose working is same as the console.log()(which executes immediately) and also provide the additional functionality which is privacy!!. Further more concept is in notes..
 */

var ans = (function () {
  var a = 12;

  return {
    getter: function () {
      console.log(a);
    },
    setter: function (val) {
      a = val;
    },
  };
})();

ans.getter();
ans.setter(42);
ans.getter();
