//Crear un programa que nos muestre los numeros que son multiplos de 5
const numero = 10
console.log(`Los multiplos de 5 hasta el numero ${numero} son: `)

for(let i = 1; i <= numero; i++){
    if(i % 5 == 0)
        console.log(i)
}

//Impresion en pantalla de los numeros impares del 1 al 30
console.log("Los numero impares del 1 al 30 son: ")

let suma = 0;

for(let i = 1; i<=30; i++){
    if( i % 2 !== 0){
        console.log(i)
        suma += i;
    }
}

console.log("La sumatoria de los numeros impares es: ", suma)