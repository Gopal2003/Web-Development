const obj = {
    name : "Gopal",
    Age : 12,
    "Rashi kya hai": "patanahi",
    printHello(){
        console.log("Hellliyo");
    },
    // key: "Value" ! explanation is in notes. First try to recall it yourself.

};

for(var key in obj)
{
    console.log(key,obj.key);
}    
// console.log(obj.name);
/*
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


