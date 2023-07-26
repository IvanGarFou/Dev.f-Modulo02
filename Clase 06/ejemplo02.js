const titulo = document.getElementById("titulo")

titulo.addEventListener("click", function(){
    const randomColor = "#" + Math.floor(Math.random()*1677715).toString(16);
    console.log(randomColor)

    titulo.style.color = randomColor;
})