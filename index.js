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
let mensaje3 = `El proximo mes se acreditara en su cuenta: ${valorPlazoFijo}`;
alert(mensaje3);

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
           break;
   }
}

console.log("finalizamos");
