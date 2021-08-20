console.log("If Else Conditionals & Switches in JavaScript | JavaScript Tutorial");
let name = "Prakash";
let age = 34;

if (name.includes("aaf")) {
    console.log("Includes")

}
else {
    console.log("Not Includes")
}


if (age == 34) {
    console.log("age is " + age)

}
if (age > 20) {
    console.log("age is greater Than 20")
}
else {
    console.log("age is less Than 20")
}


switch (age) {
    case 20:
        console.log("you are 20")
        break;
    case 34:
        console.log("you are 34")
        break;
    default:
        console.log("you are unknwn")
        break;
}