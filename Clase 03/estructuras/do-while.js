let frutas = ["kiwi", "manzana", "aguacate", "melón", "zapote", "limón", "coco"]; //7
let i=90;

do{
  console.log("Ahi te va una fruta pero con do while!");
  console.log(frutas[i]);
  i++;
}while(i<frutas.length);


for(let i=90; i<frutas.length; i++){
    console.log("Ahi te va una fruta pero con for!");
    console.log(frutas[i]);
}