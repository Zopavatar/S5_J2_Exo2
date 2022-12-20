// Exo 1

let coding = ["Coding 20", "Coding 21", "Coding 22"];

console.log(coding);

console.log(coding.length);

coding.forEach(element => console.log(element));


//Exo 2

let New_coding = coding.push("Charlotte");

console.log(coding);

//Exo 3

let newCoding = ["Coding 20", "Coding 21", "Coding 22"];
newCoding.splice(4, 0, "Coding 23");
console.log(newCoding);


//Exo 4

let erase = newCoding.pop();
console.log(newCoding);


//bonus

let array1 = ["kad", 23];
let array2 = ["flo", 44];

let concat = array1.concat(array2);
console.log(concat);




