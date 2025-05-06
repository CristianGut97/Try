let nombre = "Ethan";
let edad = 10;
let esEstudiante = true;

console.log(nombre);
console.log(edad);
console.log(esEstudiante);

nombre = "Gaby";
edad = 5;
esEstudiante = false;

//--

let a = 6;
let b = 12;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//--

let esMayorDeEdad = true;
let tieneLicencia = false;

console.log("la persona", nombre, "es mayor de edad? ", esMayorDeEdad);
console.log("la persona", nombre, "tiene licencia? ", tieneLicencia);

console.log("la persona", nombre, "es mayor de edad y tiene licencia?", esMayorDeEdad && tieneLicencia);
console.log("la persona", nombre, "es mayor de edad ó tiene licencia?", esMayorDeEdad || tieneLicencia);