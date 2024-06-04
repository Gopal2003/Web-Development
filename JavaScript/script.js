/*

const obj = {
    name : "Gopal",
    Age : 12,
    "Rashi kya hai": "patanahi",
    printHello(){
        console.log("Hellliyo");
    },
    // key: "Value" ! explanation is in notes. First try to recall it yourself.

};
/*
for(var key in obj)
{
    console.log(key,obj.key);
}    
// console.log(obj.name);

// obj.printHello();

obj.name = "Agarwal";
console.log(obj.name);

console.log(obj["Rashi kya hai"]);
// console.log(obj.Rashi kya hai); ! Wrong.

obj["Rashi kya hai"] = "Kumb";
console.log(obj["Rashi kya hai"]);

obj["name"] = "Gopala";
console.log(obj["name"]);
console.log(obj.name);
// console.log(obj[name]); deprecated.


function abcd( a)
{
    // a();
    console.log(a);
}

// abcd(function(){console.log("Heelllo");}); // first classs function..
// var a = 12;

// abcd(a);

var a =[1.12,2,"gopal",4,5];
console.log(typeof(a));
console.log(Array.isArray(a))
console.log(Array.isArray(obj))


a[-1] = 12;
console.log(a)

delete obj.name;
*/

//IIFE Immediate Invoke Function Expression

/*
var a = (function(){
        var privateVal = 12;

        return {
            getter: function()
            {
                console.log(privateVal);
            },

            setter : function(val)
            {
                privateVal = val;
            }
        }
})()
*/

/*
var a = (function(){
    var privateVal = 14;

    // return privateVal;

    return {
        getter: privateVal
    }

})()
*/

/*
var human ={
    canFly : false,
    canTalk : true,
    canWalk : true
}


var student = {
    isEducated : false,
    canCode : false
}

student.__prototype__ = human; 
*/

console.log(this);

function abcd()
{
    console.log(this);
}

abcd();

var obj = {
    name : "Gopal",
    dummyFunc : function(){
        console.log(this);
    }
}

obj.dummyFunc(); 










