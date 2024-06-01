console.log("hello world");

//npm install <packagename>
//npm i <packagename>
//npm install <packagename1> <packagename2> <packagename3>

import generateName from "sillyname";
//var generateName = require("sillyname");

var name1 = generateName();
var name2 = generateName();

console.log(name1);
console.log(name2);

console.log("my name is " + name1);
console.log("my name is " + name2);