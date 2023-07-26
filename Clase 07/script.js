let boton = document.querySelector(".btn");
boton.addEventListener("click", ejecutar)

function ejecutar(){
    let nombre = document.getElementById("input-nombre");
    let apellido = document.getElementById("input-apellido");

    let h1 = document.querySelector(".titulo");

    h1.innerHTML = nombre.value + " " +apellido.value;
}