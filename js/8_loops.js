console.log("For, While & Do while Loops in JavaScript | JavaScript Tutorial");

for (let index = 0; index < 5; index++) {

    console.log(index)

}
console.log("While loop")
let index = 0
while (index < 5) {
    console.log(index)
    index++;
}


let obj1 = {
    name: "Prakash",
    place: "Odisha",
    company: "Prodapt"
}

for (let key in obj1) {
    console.log(key + ":"+obj1[key]);
    console.log(`the "${key}" key has value is "${obj1[key]}"`);

}