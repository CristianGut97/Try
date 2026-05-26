let numeros = [5,8,6,3];
let res = 0;

for (let i = 0; i < numeros.length; i++) {
    res += numeros[i];
}
console.log(res);

/--

let ingreso = 0;

while(ingreso>=0){
    
    while(true){
        ingreso = parseInt(prompt("Ingresa un numero "));
        if (!isNaN(ingreso)){
            break
        }console.log("Ingresa un numero...");
    }
    
    if (ingreso<0){
        console.log("El numero es: ", ingreso, "Sale del bucle");
        break;
    }console.log("El numero es: ", ingreso, "Sigue en el bucle");
}

/--

let password = "Cga2025*";
let entrada = "";
do {
    entrada = prompt("Ingresa contraseña: ");
} while (entrada !== password);

console.log("Contraseña correcta");