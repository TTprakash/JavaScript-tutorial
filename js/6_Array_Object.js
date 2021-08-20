console.log("Arrays and Objects In JavaScript | JavaScript Tutorial");


let arr = ["Prakash", 4, 5, "Rakesh"];
console.log(arr);
arr.push("mk", 6)
console.log("PUSH--> Will add in end");
console.log(arr);

arr.unshift("mk", 6)
console.log("unshift --> Will add in front");
console.log(arr);

arr.pop()
console.log("pop --> Will delete from end");
console.log(arr);

arr.shift()
console.log("shift --> Will delete from front");
console.log(arr);


let indexOfValue=arr.indexOf("Rakesh")
console.log("indexOf --> Will give index value");
console.log(indexOfValue);

arr.splice(2,2)
console.log("splice(index,no of elements) --> delete from given index to no of  ");
console.log(arr);

arr.reverse();
console.log("reverse --> reverse the element  ");
console.log(arr);


let obj={
    name:"Prakash",
    lastName:"Barik"
}
console.log("Object ");

console.log(obj);
