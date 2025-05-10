//-- bucle anidado 

//1 2 3 4 5
//6 7 8 9 10
//11 12 13 14 15

let img =[ 
    [
     [1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15]
    ],
    [
     [16,17,18,19,20],
     [21,22,23,24,25],
     [26,27,28,29,30]
    ]
]

console.log(img[0][0][0]);

 let contador = 0;
 let recontador = 0;
 let cuanticontador = 0;
 
while (cuanticontador <= 1){
    while (contador <= 2){
        while(recontador <= 4){
            console.log("anidado while:", img[cuanticontador][contador][recontador]);
            recontador ++;
    }
    recontador = 0;
    contador++;
    }
    contador = 0;
    recontador = 0;
    cuanticontador++;
}

contador =0;
recontador =0;
cuanticontador =0;

for(let index = 0; index <2; index++){
    for(let i = 0; i <3; i++){
        for(let j = 0; j < 5; j++){
            console.log("anidado for:",img[index][i][j])
        }
    }
}