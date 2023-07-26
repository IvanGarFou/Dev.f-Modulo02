const button = document.getElementById("myButton")
const div = document.getElementById("myDiv")

button.addEventListener("click", function() {
    div.innerHTML = "<p>Ahora este texto ha cambiado. Saludos desde JavaScript!!</p>"
});