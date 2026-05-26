let a = parseFloat(prompt("Ingresa primer numero: "));
let b = parseFloat(prompt("Ingresa segundo numero: "));

function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function multiplicacion(a,b){
    return a*b;
}

function divicion(a,b){
    return a/b;
}

console.log("la suma de",a,"y",b,"es",suma(a,b));
console.log("la resta de",a,"y",b,"es",resta(a,b));
console.log("la multiplicacion entre",a,"y",b,"es",multiplicacion(a,b));
console.log("la divicion entre",a,"y",b,"es",divicion(a,b));

let operacion = prompt("Ingresa la operacion: ");

//Calculadora
function calculadora (a,b,operacion){
    switch (operacion){
        case 'sumar':
            return suma(a,b);
        case 'restar':
            return resta(a,b);
        case 'multiplicacion':
            return multiplicacion(a,b);
        case 'divicion':
            return divicion(a,b);
        default:
            return "operacion no valida"
    }
        
}

console.log("calculadora entrega ",calculadora(a,b,operacion));