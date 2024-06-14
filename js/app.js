"use strict";
const afirmacion = 'Si';
const negacion = 'No';
let Respuestacorrecta = 0;
let Respuestaincorrecta = 0;
let numeroAciertos= 0;

function compararRespuesta(textoPreguntas){
  const preguntas = prompt(textoPreguntas);
  if (afirmacion.toLowerCase() === preguntas.toLowerCase()){
    alert('Genial! respuesta correcta! ✅');
    numeroAciertos ++; 
    console.log(numeroAciertos);
    Respuestacorrecta +=1;
  }else{
    alert('Respuesta Incorrecta 🙁');
    console.log('Respuesta Incorrecta 🙁');
    Respuestaincorrecta +=1;
  }
}
const usuario = prompt('Hola ¿Cuál es tu nombre? ');
function preguntaNombre(){

  confirm('Mucho gusto ' + usuario + ' soy Nancy y te doy la bienvenida a mi página web! 🙌 ');

}

const preguntas = ['Tengo 3 nombres?','Vivo en Perú?','Tengo perros?','Trabajo como Developer?','Mi comida favorita es el arroz a la chiclayana?'];
preguntaNombre();
for (let i=0; i<preguntas.length; i++){
  compararRespuesta(preguntas[i]);
}

alert('Adivine el número de mi cumpleaños!!🎉🎉');
const numeroMaxIntentos = 4;
const numeroAAdivinar = 10;
console.log(numeroAAdivinar);
let contadorDeIntentos = 1;

while (contadorDeIntentos <= numeroMaxIntentos) {

  const numeroPorUsuario = Number(prompt("Ingrese un número, recuerda que tienes 4 intentos!! 👀"));

  const numeroPorUsuario = Number(prompt('Ingrese un número, recuerda que tienes 4 intentos!!'));


  if (numeroPorUsuario === numeroAAdivinar) {
    console.log('Felicidades!!! adivinaste el número " + numeroAAdivinar');
    alert('Felicidades!!! adivinaste el número. 🥳 ');
    Respuestacorrecta += 1;
    
    break;
  }else{
    contadorDeIntentos++;
    if (contadorDeIntentos === numeroMaxIntentos + 1){
      console.log('Llegaste al número max de intentos 😟 mi cumpleaños es el 10 de Diciembre. 🎂 ' );
      alert('Llegaste al número máximo de intentos 😟  mi cumpleaños es el 10 de Diciembre. 🎂 ');
      Respuestaincorrecta += 1;
    } else{
      if (numeroPorUsuario > numeroAAdivinar){
        console.log('El numero es muy alto,intenta con un numero menor. ➖ ');
        alert('El numero es muy alto, intenta con un numero menor. ➖ ');
       
      } else {
        if(numeroPorUsuario < numeroAAdivinar){
          console.log('El numero es muy bajo,intenta con un numero mayor.  ➕ ');
          alert('El numero es muy bajo, intenta con un numero mayor.  ➕ ');
       
        }
      }
    }
  }  
}

alert("Adivine mis colores favoritos!! 🌈 ")
const colores = ["rojo", "negro"];
let intentos = 6;
let contadorintentos = 1;


alert("¡Recuerde que tiene 6 intentos!! 👀");

while (contadorintentos <= intentos) {
    let adivinanza = prompt("Introduce un color:").toLowerCase();
    let esCorrecto = false;

    for (let i = 0; i < colores.length; i++) {
        if (adivinanza === colores[i]) {
            esCorrecto = true;
            break;
        }
    }

    if (esCorrecto) {
        alert("¡Correcto! Adivinaste el color!! ✔️");
        Respuestacorrecta += 1;
        break;
    } else if (contadorintentos === intentos) {
        alert("Lo siento, se te acabaron los intentos. 😟 Los colores correctos eran " + colores.join(", ") + ". 🌈");
        Respuestaincorrecta += 1;
    } else {
        alert("Incorrecto! ❌ Intenta de nuevo. Te quedan " + (intentos - contadorintentos) + " intentos. 👀");
    }

    contadorintentos++;

alert("¡Recuerde que tiene 6 intentos!! 👀");
while (contadorintentos <= intentos) {
  let adivinanza = prompt("Introduce un color:").toLowerCase();
  let esCorrecto = false;
  for (let i = 0; i < colores.length; i++) {
    if (adivinanza === colores[i]) {
      esCorrecto = true;
      break;
    }
  }
  if (esCorrecto) {
    alert("¡Correcto! Adivinaste el color!! ✔️");
    Respuestacorrecta += 1;
    break;
  } else if (contadorintentos === intentos) {
    alert("Lo siento, se te acabaron los intentos. 😟 Los colores correctos eran " + colores.join(", ") + ". 🌈");
    Respuestaincorrecta += 1;
  } else {
    alert("Incorrecto! ❌ Intenta de nuevo. Te quedan " + (intentos - contadorintentos) + " intentos. 👀");
  }
  contadorintentos++;

}
   


alert("Tu puntuación de respuestas es: ☑️");
alert("Adivinaste " + Respuestacorrecta + " preguntas correctas. ✅ ");
alert("Tienes "+ Respuestaincorrecta + " preguntas incorrectas. ❌ ");



alert("Fue divertido jugar contigo " + nombre +  " hasta la próxima! 👋 ");


alert("Fue divertido jugar contigo " + usuario +  " hasta la próxima! 👋 ");

