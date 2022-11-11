

var array = ["J&J", "Pfizer", "Sputnik"];
console.log("Original Array:".concat(array));

console.warn("---------------------------------------------------------------------------------------");
array.push("Covaxin");
console.log("After adding 'Covaxin:".concat(array));

console.warn("---------------------------------------------------------------------------------------");
console.log("Array destructuring:");
var a = array[0], b = array[1], c = array[2], d = array[3];
console.log(a, b, c, d);

console.warn("---------------------------------------------------------------------------------------");
console.log("Traversing Using for loop:");

for (var index = 0; index < array.length; index++) {
    console.log("".concat(array[index]));
}



console.warn("---------------------------------------------- *Assignment2* -------------------------------------------------");

let array1 = ["J&J","Pfizer","Sputnik"];
console.log(`Original Array:${array1}`);

console.warn("---------------------------------------------------------------------------------------");
array.push("Covaxin");
console.log(`After adding 'Covaxin:${array1}`);

console.warn("---------------------------------------------------------------------------------------");
console.log(`Array destructuring:`);

var[a,b,c,d]=  array1;
console.log(a,b,c,d);

console.warn("---------------------------------------------------------------------------------------");
console.log(`Traversing Using for loop:`);

for (let index = 0; index < array1.length; index++) {
    console.log(`${array1[index]}`);

    
}