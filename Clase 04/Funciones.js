//Funciones
/**function suma(num1, num2){
    //Instrucciones o el bloque de codigo
    return num1 + num2
}

function resta(num1, num2) {
    return num1 - num2
}

console.log(suma(15, 64))
/**let resultado = suma(15, 64)
console.log(resultado) 

console.log(resta(78, 720)) **/

//Funcion donde sabemos si es par 
function esPar(num) {
    if (num % 2 === 0) {
        return true
    }else{
        return false
    }
}


hola()

let edad = 21
console.log(esPar(edad))

//Funcion sin parametro
function hola() {
    let nombre = 'Ivan'
    let edad = 22
    console.log('Hola, ' + nombre + ' tienes ' + edad)
}
hola()

//Funcion en la que retorne un objeto
function crearPersona(nombre, edad, ciudad) {
    let persona = {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad
    }
    return persona
}

let nameAlexis = 'Alexis'
let alexis = crearPersona(nameAlexis, 28, 'Cancun')
let nadia = crearPersona('Nadia', 30, 'Chihuahua')

console.log(alexis)
console.log(nadia)

let calculadora = {
    nombre: 'Casio',

    sumar: function(a, b) {
        return a + b
    },
    resta: function (a, b) {
        return a-b
    },
    multplicar: function(a,b){
        return a*b
    },
    dividir: function(a,b){
        if(b === 0){
            return 'Error: division por cero'
        }
        return a / b
    }
}

console.log(calculadora.sumar(10,7))
console.log(calculadora.dividir(9,0))

function obtenerMarcador() {
    let partido1 = 2
    let partido2 = 3

    function agregarGoles(nombre) {
        return nombre + " anoto " + (partido1 + partido2) + " goles"
    }

    return agregarGoles('Ivan Garcia')
}

console.log(obtenerMarcador())

function impares() {
    console.log("Los numero impares del 1 al 30 son: ")

    let suma = 0;
    
    for(let i = 1; i<=30; i++){

        if( i % 2 !== 0){
            console.log(i)
            suma += i;
        }
    }
    console.log("La sumatoria de los numeros impares es: ", suma)
}

impares()

//Spoiler de lo que se viene 
const buttonSaludar = document.getElementById('saludar')
buttonSaludar.addEventListener('click', saludo)

function saludo() {
    alert('Hola Mundo estoy vivo!!!!')
}