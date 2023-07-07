var edad = prompt("Cual es tu edad?");
var pais = prompt("País");

/*if(edad>=18 || pais == "Rusia" || pais == "China" || pais == "Japón"  ){ //Por si quisieramos mas paises */
//if(edad>=18 && (pais == "Rusia" || pais=="Mexico")){ // Si es de MX o Rusia y mayor de edad
if(edad>=18 || (pais == "Rusia")){ // Si es de Rusia o mayor de edad
//Si
    if(edad>=18)
        alert("<h1>Pasale, porque eres mayor de edad</h1>")

    if(pais == "Rusia")
        alert("<h1>Pasale, porque eres ruso</h1>")

}else{
//No
    document.write("<h1>No puedes pasar</h1>")
}