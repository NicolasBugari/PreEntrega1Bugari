let nombreIngresado = prompt("Ingrese su Nombre");
let mensaje1 = `Hola ${nombreIngresado}`;
let apellidoIngresado = prompt("Ingrese su Apellido");
let mensaje2 = ` ${apellidoIngresado}`;
alert(mensaje1 + mensaje2);

let edad = parseInt(prompt("Ingrese su edad"));

if(edad >= 18){
   alert("Puedes invertir en esta plataforma");
}else if(edad < 18){
   alert("No puedes intertir en nuestra plataforma");
   edad = parseInt(prompt("Ingrese su edad"));
}
class Usuario{
   constructor(nombreIngresado, apellidoIngresado, edad){
     this.nombre = nombreIngresado;
     this.apellido = apellidoIngresado;
     this.edad = edad;
   }
   Saludo(){
      return `Bienvenido ${this.nombre + this.apellido}`
   }
}
let num1 = parseInt(prompt("Ingrese el capital a invertir"));
let ingreso = num1;
let num2 = parseInt(prompt("Ingrese cantidad de meses a invertir del 1 al 12"));
let periodo = num2;

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const interes = (x) => x * 0.0625;

let valorPlazoFijo = periodo*(suma(ingreso, interes(ingreso)));
let valorInteres = resta(valorPlazoFijo, ingreso)


//$('#calcular').click(function () {
//   var ingreso = $('#ingreso').val();
//   var periodo = $('#periodo').val();
//   var tna = ((75 / 12)/100)
//  
//   if(ingreso!='' && tna!='' && periodo>='30'){
//   var valorPlazoFijo = ingreso * (tna * (periodo / 365));
//   var interes =  valorPlazoFijo - ingreso;
//   }
// });


//class Operacion {
//   constructor(nombreIngresado, apellidoIngresado) {
//     this.nombre = nombreIngresado.toUpperCase();
//     this.apellido = apellidoIngresado.toUpperCase();
//   }
//   calcularPlazoFijo(Ingreso, periodo) {
//     this.ingreso = ingreso;
//     this.periodo = periodo;
//     if (document.getElementById("radio1").checked == true) {
//     this.resultado = (((this.ingreso * 0.415) / 12) * this.periodo).//  toFixed(2);
//     } else {
//     this.resultado = (((this.ingreso * 0.05) / 12) * this.periodo).toFixed//(2);
//     }
//   }
// }


//const Operacion = new Operacion(nombreIngresado, apellidoIngresado)
//Operacion.calcularPlazoFijo(ingreso, periodo)

let mensaje3 = `La cantidad de mes/meses seleccionado para su plazo fijo es de : ${periodo} mes/meses`;
alert(mensaje3);

let mensaje4 = `El Plazo fijo se acreditara dentro de ${periodo} mes/meses por un valor total de: $${valorPlazoFijo}`;
alert(mensaje4);

let mensaje5 = `El interes generado en el periodo seleccionado es de $${valorInteres}`
alert(mensaje5);

let salida = prompt("Desea salir de la aplicacion");
let Final = alert("Muchas gracias por elegirnos");

while(salida != "ESC" ){
   switch (salida) {
       case "si":
            alert("Muchas gracias por utilizar nuestra plataforma");
            break;
        case "no":
            alert("En que mas podemos ayudarlo");
            break;
       default:
           alert("Por favor elija entre si o no");          
   }
   Final = alert("Muchas gracias por elegirnos");
}

console.log("finalizamos");
