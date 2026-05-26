//funciones

function saludo (){
    console.log("Hola mundo");
} 

saludo();

console.log("------------");

function saludaPersona (nombre){
    console.log(`Hola mundo: ${nombre}`);
}

let x = "Cris";

saludaPersona(x);

console.log("-------------------------")

let frutas = ["manzana","pera","fresa","sandia"];
let valorFruta = [10,12,8,9];
let verduras = ["papa","yuca","tomate","zanahoria"];
let valorVerdura = [5,80,4,65];

function descriptor(nombreProducto,valorProducto){
    for(let index = 0; index<4; index++){
        console.log(`Producto: ${nombreProducto[index]}, valor: ${valorProducto[index]}`);
    }
}
 
descriptor(frutas,valorFruta);
descriptor(verduras,valorVerdura);