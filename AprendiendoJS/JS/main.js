// let numero = prompt("Ingrese un numero del 1 al 10");

// switch (numero) {
//     case "1":
//         alert("One")
//         break;
//     case "2":
//         alert("Two")
//         break;
//     case "3":
//         alert("Three")
//         break;
//     case "4":
//         alert("Four")
//         break;
//     case "5":
//         alert("Five")
//         break;
//     case "6":
//         alert("Fix")
//         break;
//     case "7":
//         alert("Seven")
//         break;
//     case "8":
//         alert("Eight")
//         break;
//     case "9":
//         alert("Nine")
//         break;
//     case "10":
//         alert("Ten")
//         break;
//     default:
//         alert("No ingresaste un numero del 1 al 10");
//         break;
// }



/*

Tipos de variables: let, const , "var". (Recordar que var esta prohibido)

Una variable se puede declarar, asignar valor o inicializar (que corresponde a las dos anteriores al mismo tiempo).

diferencia entre let y const? En el caso de const, no podemos modificar su valor ya que es constante. Tambien nos encontramos con que const no se puede declarar. Se tiene que inicializar si o si.

Tipos de datos: numericos, booleanos (true o false), string (cadena de texto, van entre comillas simples o dobles)


*/

// 2. Control de flujos


/*

Condicionales:

-if / if else ---> En En este caso, utilizamos los operadores de comparacion para ver si algo se cumple o no. Internamente resuelve esa comparacion y nos devuelve true o false. En caso true entra al if, en caso false entra el else (si es que hay else).

-switch --->Tambien validamos pero nuestro comparador siempre es igualdad. Es decir que no podemos hacer rangos (mayor, menor, mayo o igual, etc.)

Operadores de comparacion (===, !==, <, <=, >=)
Operadores logicos (&&, ||, !)

Operadores AND: Solo es true si todo es true. Que quiere decir? Que con un solo false, ya sabemos que todo es false.

Operadores ||:Solo es false si todo es false. Que quiere decir esto? Que con un solo true, ya todo es true.

Operadores NOT (!): Negacion, si es true, lo convierte en false y viceversa.



*/
/*
function resevaTurno(turno){
    alert("Hola que turno de futbol estabas buscando /n 1-Cancha de 5 cancha cerrada /n 2-Cancha de 6 al aire libre");

}x
*/
// function saludarALaTia(nombreDeLaTia){
//     const mensaje = "Hola tia " + nombreDeLaTia;
//     alert(mensaje);
// };


// let tiasSaludadas = 0;
// const cantidadDeTias = 4
// while (tiasSaludadas < cantidadDeTias) {
//     // juana, Maria, Ana, Lucia
//     const tia = prompt("A que tia vas a saludar?").toLocaleLowerCase();
//     if(tia === "juana" || tia === "maria" || tia === "ana" || tia === "lucia"){
//         saludarALaTia(tia);
//         tiasSaludadas++;
    
//     if (tiasSaludadas === 1){
//         alert ("Vas saludando " + tiasSaludadas + " tia");
//         alert ("Te faltan " + (cantidadDeTias - tiasSaludadas) + " tias por saludar");
//     }else {
//         alert ("Vas saludando " + tiasSaludadas + " tias");
//         if (tiasSaludadas === 3){
//             alert ("Te falta " + (cantidadDeTias - tiasSaludadas) + " tia por saludar");
//         }else{
//             alert("Te faltan " + (cantidadDeTias - tiasSaludadas) + " tias por saludar");
//         }
        
//     }
//     } else {
//         alert("No esta la tia " + tia)
//     }
// }

function reservarUnTurnoFinde() {

    const numero = prompt ("Para el horario a reservar elegir el numero que esta al lado izquierdo del horario que quieras hacer tu reserva \n 1- 12:00hs \n 2- 13:00hs \n 3- 14:00hs \n 4- 15:00hs \n 5- 16:00hs \n 6- 17:00hs \n 7- 18:00hs ");
switch (numero) {
    case "1":
        alert("Perfecto tu turno queda reservado a las 12:00hs")
        break;
    case "2":
        alert("Perfecto tu turno queda reservado a las 13:00hs")
        break;
    case "3":
        alert("Perfecto tu turno queda reservado a las 14:00hs")
        break;
    case "4":
        alert("Perfecto tu turno queda reservado a las 15:00hs")
        break;
    case "5":
        alert("Perfecto tu turno queda reservado a las 16:00hs")
        break;
    case "6":
        alert("Perfecto tu turno queda reservado a las 17:00hs")
        break;
    case "7":
        alert("Perfecto tu turno queda reservado a las 18:00hs")
        break;
    default:
        alert("No ingresaste un horario disponible");
        reservarUnTurnoFinde();
        break;
    }

}; 
function reservarUnTurnoDiaSemana() {

    const numero = prompt ("Para el horario a reservar elegir el numero que esta al lado izquierdo del horario que quieras hacer tu reserva \n 1- 15:00hs \n 2- 16:00hs \n 3- 17:00hs \n 4- 18:00hs \n 5- 19:00hs \n 6- 20:00hs \n 7- 21:00hs \n 8- 22:00hs \n 9- 23:00hs");
switch (numero) {
    case "1":
        alert("Perfecto tu turno queda reservado a las 15:00hs")
        break;
    case "2":
        alert("Perfecto tu turno queda reservado a las 16:00hs")
        break;
    case "3":
        alert("Perfecto tu turno queda reservado a las 17:00hs")
        break;
    case "4":
        alert("Perfecto tu turno queda reservado a las 18:00hs")
        break;
    case "5":
        alert("Perfecto tu turno queda reservado a las 19:00hs")
        break;
    case "6":
        alert("Perfecto tu turno queda reservado a las 20:00hs")
        break;
    case "7":
        alert("Perfecto tu turno queda reservado a las 21:00hs")
        break;
    case "8":
        alert("Perfecto tu turno queda reservado a las 22:00hs")
        break;
    case "9":
        alert("Perfecto tu turno queda reservado a las 23:00hs")
        break;
    default:
        alert("No ingresaste un horario disponible");
        reservarUnTurnoDiaSemana();
        break;
    }

}; 

let sacarTurno = 0;
const cantidadDeTurnos = 1;

while (sacarTurno < cantidadDeTurnos){
    const turno = prompt ("Buenas que dia de la semana queres reservar un turno (lunes, martes, miercoles, jueves, viernes, sabado o domingo)").toLocaleLowerCase();

    if (turno === "lunes" || turno === "martes" || turno === "miercoles" || turno === "jueves" || turno === "viernes" ) {
        reservarUnTurnoDiaSemana();
        sacarTurno++;
    }
    else if (turno === "sabado" || turno === "domingo") {
            
            reservarUnTurnoFinde();
            sacarTurno++;
        
        }
        else{
        alert(turno + " no es un dia valido");
    
    }
}




