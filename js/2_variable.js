console.log("Variables in js");

/*
var,let,const
*/


// var ==>Its globalize the variable,can change the variable by using variable name
console.log("var keyword Variables");

var stringName="Prakash"
stringName="Rakesh"
console.log(stringName);

var intNumber=23
console.log(intNumber);

var arrData=["Prakash","Rakesh",3,4]
console.log(arrData);



// let ==>Its localized the variable,can change the variable by using variable name only within the block(local block)
console.log("let keyword Variables");

{

let stringName="Prakash"
stringName="Rakesh local"

console.log(stringName);

let intNumber=23
console.log(intNumber);

let arrData=["Prakash local","Rakesh local",3,4]
console.log(arrData);
}
console.log("it will change global variable 'stringName'")
stringName="Rakesh global"
console.log(stringName);


// let ==>constant the value.u cannt change
console.log("const keyword Variables");
const constName="rashmi"
// constName="rashmi2"   //connt do this
console.log(constName);



/* 
Most Common Programming Case Type

1.camelCase
2.kabab-case
3.snake_case
4.PascalCase

*/