// cheacking if a number is greater than aother number:

let num1 = 5;
let num2 = 8;


/*
console.log("I am regular upper code");
if (num1 > num2) {
    console.log(" num 1 is greater than num2");    
} else{
    console.log("nope, num1 is Not greater");
}

console.log("i am a reagular bottom code");
*/
//  cheacking if a string is equal to atoher string:

let username = "chai";
let anotherUsernname = "chai";


if (username != anotherUsernname){
    // console.log("pick another username");
} else {
    //console.log ("you can pick this username");
}


// checking if a variable is number or not:

let score = "44";

if (typeof score === "number") {
    console.log ("Yep, this is a number");
} else {
    console.log ("No this is not a number");
}

// cheacking if a bollea value is true or false:

let isTeaReady = false;
if (isTeaReady) {
    console.log("Tea is Ready");
} else {
   // console.log("Tea is NOT Ready");
}

// cheacking if an array is empty or not:

let items =[];

console.log(items.length);

if (items.length){
    console.log("Array is Empty");
}   else {
    console.log("Array is NOt empty");
}