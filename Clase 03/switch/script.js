var color = "morado";
/*
if(color == "amarillo"){
   // es amarillo
}else if(color == "verde"){
    // es verde
}else {
    // es otra cosa
}
*/
// x > 6 && x <10 

switch(color){
    case "amarillo":{
        document.write("<h1 style='color:yellow'>El semaforo esta en amarillo</h1>")
        break;
    }
    case "verde":{
        document.write("<h1 style='color:lime'>El semaforo esta en verde</h1>")
        break;
    }
    case "rojo":{
        document.write("<h1 style='color:red'>El semaforo esta en rojo</h1>")
        break;
    }
    default: {
        console.log("Este color no existe");
    }
}

let edad = 5, otraEdad = 6;

switch(edad){
    case 5:{
        if(otraEdad > edad){
            console.log("5 es mayor 6");
        }
        console.log("Es cinco");
        break;
    }
    case 10:{
        console.log("Es 10");
        break;
    }
    default:{
        console.log("Es Otro");
        break;
    }
}

let usuario = "Administrador";

switch(usuario){
    case "Administrador":{
        // Darle permisos de superusuario
        break;
    }
    default:{
        //Dar permisos de usuario
    }
}