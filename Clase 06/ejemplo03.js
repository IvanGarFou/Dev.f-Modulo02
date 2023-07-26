const formulario = document.getElementById("miFormulario")

formulario.addEventListener("submit", function(event){
    event.preventDefault(); //Evitando que el formulario se envie de forma predeterminada

    //Obtenemos los valores
    const name = document.getElementById("nombre").value; //Trae unicamente el valor
    const edad = document.getElementById("edad").value;
    const genero = document.getElementById("genero").value;

    console.log("Nombre: " + name)
    console.log("Edad: " + edad)
    console.log("Genero: " + genero)
})