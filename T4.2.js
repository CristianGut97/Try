let numero;

while (true) {
  numero = parseFloat(prompt("Escribe una calificación entre 0 y 100:"));
  

 if (!isNaN(numero) && numero >= 0 && numero <= 100) {console.log("numero ingresado:",numero); break;}

console.log("Ingrese un número válido entre 0 y 100.");
}

const mensaje = numero >= 90 ? "Aprobado con honores" :
                numero >= 70 ? "Aprobado" : "Reprobado";

console.log(mensaje);

//--

let numeroPar;

while(true){
    numeroPar = parseInt(prompt("Ingresa un numero: "));
    
    if (!isNaN(numeroPar)) break;

console.log("Ingrese un número");
}



const esPar = numeroPar % 2 == 0 ? "Es par" : "No es par";

console.log(esPar);

/--

let monto;

while(true){
    monto = parseFloat(prompt("Ingresa el monto "));
    
    if (!isNaN(monto))
        break;
        console.log("Ingresa un monto valido.");
    }
    
    const descuento = monto>= 100 ? 10 : 