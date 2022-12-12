let nombre = prompt("Ingrese su Nombre");
let mensaje1 = `Hola ${nombre}`;
let apellido = prompt("Ingrese su Apellido");
let mensaje2 = ` ${apellido}`;
alert(mensaje1 + mensaje2);

let edad = parseInt(prompt("Ingrese su edad"));

if(edad >= 18){
   alert("Puedes invertir en esta plataforma");
}else if(edad < 18){
   alert("No puedes intertir en nuestra plataforma");
}

let num1 = parseInt(prompt("Ingrese el capital a invertir"));
let ingreso = num1;

const suma = (a, b) => a + b;
const interes = (x) => x * 0.0625;

let valorPlazoFijo = suma(ingreso, interes(ingreso));
let periodo = parseInt(prompt("Ingrese cantidad de meses a invertir del 1 al 12"))

if ( periodo === 1 ) {
   total = valorPlazoFijo
 } else if ( periodo === 2 ) {
   total = valorPlazoFijo * 2
 } else if ( periodo === 3 ) {
   total = valorPlazoFijo * 3
 } else if ( periodo === 4 ) {
   total = valorPlazoFijo * 4
 } else if ( periodo === 5 ) {
   total = valorPlazoFijo * 5
 } else if ( periodo === 6 ) {
   total = valorPlazoFijo * 6
 } else if ( periodo === 7 ) {
   total = valorPlazoFijo * 7
 } else if ( periodo === 8 ) {
   total = valorPlazoFijo * 8
 } else if ( periodo === 9 ) {
   total = valorPlazoFijo * 9
 } else if ( periodo === 10 ) {
   total = valorPlazoFijo * 10
 } else if ( periodo === 11 ) {
   total = valorPlazoFijo * 11
 } else if ( periodo === 12 ) {
   total = valorPlazoFijo * 12
 } else {
   alert('No seleccionaste ningún tipo de periodo de pagos')
 }

switch ( periodo ) {
   case '1':
      total = valorPlazoFijo
     break
   case '2':
      total = valorPlazoFijo * 2
     break
   case '3':
      total = valorPlazoFijo * 3
     break
   case '4':
      total = valorPlazoFijo * 4
     break
   case '5':
      total = valorPlazoFijo * 5
     break
   case '6':
      total = valorPlazoFijo * 6
     break
   case '7':
      total = valorPlazoFijo * 7
     break
   case '8':
      total = valorPlazoFijo * 8
     break
   case '9':
      total = valorPlazoFijo * 9
     break
    case '10':
      total = valorPlazoFijo * 10
     break
   case '11':
      total = valorPlazoFijo * 11
     break
   case '12':
      total = valorPlazoFijo * 12
     break
   default:
     alert('No seleccionaste ningún periodo de pagos')
     break;
}

let mensaje3 = `se acreditara en su cuenta: ${valorPlazoFijo}`;
alert(mensaje3);

let mensaje4 = `En su cuenta se acreditara el siguiente valor por los meses invertidos: ${periodo}`;
alert(mensaje4);

let salida = prompt("Desea salir de la aplicacion");

while(salida != "ESC" ){
   switch (salida) {
       case "si":
            alert("Muchas gracias por utilizar nuestra plataforma");
            break;
        case "no":
            alert("En que podemos ayudarlo");
            break;
       default:
           alert("Por favor elija entre si o no")
           
   }
}

console.log("finalizamos");
