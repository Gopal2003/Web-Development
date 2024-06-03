
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
*/

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








