// Part 1: Declaring and Invoking Functions
function greet(name = "there") {
    return "Hello " + name + "!";
}

console.log(greet("Sana"));
console.log(greet());

// Part 2: Working with Parameters and Returning Values
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(5, 7));

// Part 3: Function Scope
let x = 10;

function changeValue() {
    let x = 20;
    console.log("Inside the function, x =", x);
}

changeValue();
console.log("Outside the function, x =", x);

// Part 4: Closures
function outerFunction() {
    let count = 0;
    return function() {
        count++;
        console.log("Count is now:", count);
    }
}

const increment = outerFunction();
increment();
increment();
increment();

// Bonus Challenge
function outerFunction2() {
    let sum = 0;
    return function(num) {
        sum += num;
        console.log("Sum is now:", sum);
    }
}

const addToSum = outerFunction2();
addToSum(5);
addToSum(10);