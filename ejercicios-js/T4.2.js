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
let descuento = 0;

while(true){
    monto = parseFloat(prompt("Ingresa el monto "));
    
    if (!isNaN(monto))
        break;
        console.log("Ingresa un monto valido.");
    }
    
    if (monto >= 100){
        descuento = 0.1;
        console.log("Se te aplica un ", descuento*100, "% de descuento");
    }else console.log("no se aplica descuento");
    
    
    
    console.log("El monto final es: ", monto-(monto*descuento));

    /--

while(true){
    let ingresado;
    let numeroRandom = Math.floor(Math.random() * 10)+1;
    while(true){
    ingresado = parseInt(prompt("Ingresa un numero del 1 al 10: "));
    if (!isNaN(ingresado) && ingresado >=1 && ingresado <=10){
        break;
    } console.log("Solo se puede ingresar un numero del 1 al 10");
    }
if (numeroRandom === ingresado) {
    console.log("Felicidades! El numero era: ", numeroRandom);
    break;
} console.log("Lo siento, el numero era ", numeroRandom);
}

