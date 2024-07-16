
// 1////////////////////////
function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";
      const constVariable = "I am const";
    }
    // console.log(varVariable);
    // console.log(letVariable);
    // console.log(constVariable);
  }
  scopeTest();
//   output = I am var;


// 2//////////////////////////
function greet (name, greeting = "Hello"){
    return `${name}, ${greeting}`
}
console.log(greet("Alice"));
console.log(greet("Bob", "Good morning")); 


// 3/////////////////////
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3));
  console.log(sum(10, 20, 30, 40));
  console.log(sum(5));


// 4///////////////////
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray);

// 5//////////////////////
const name = "John";
const age = 30;

const person = {
  name,
  age,
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
};

console.log(person.greet());

// 6///////////////////////
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

// 7//////////////////////

const name2 = "Alice";
const age2 = 25;

const message = `Hi, my name is ${name2} and I am ${age2} years old.`;

console.log(message);


// 8 //////////////////////////
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (const student of students) {
    console.log(`${student.name} has a grade of ${student.grade}.`);
  }



// 9/////////////////////
const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (const innerArray of nestedArrays) {
    const sum = innerArray.reduce((acc, num) => acc + num, 0);
    console.log(`Sum of ${innerArray} is ${sum}`);
  }

// 10////////////////////////
const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);

  