// .           0 .     1 .      2 .           3 .      4 .       5 .      6
let frutas = ["kiwi", "manzana", "aguacate", "melón", "zapote", "limón", "coco"];

//Longitud de un arreglo
console.log(frutas.length); // 6
let limite = frutas.length; 

// for(let i=0; i<frutas.length; i++){
for(let i=0; i<limite; i++){
    console.log(frutas[i] + " " +i);
}
console.log("-");

/* Reversa*/
for(let i=frutas.length-1; i>=0; i--){
    console.log(frutas[i] + " " +i);
}

console.log("-Excluir 0"); 
/* Empezar desde el 1 pero tomando el indice 0*/
for(let i=1; i<=limite; i++){
    console.log(frutas[i-1] + " " +(i-1));
}

//Empezar desde la posicion 2
for(let i=2; i<limite; i++){
    console.log(frutas[i] + " " +i);
}