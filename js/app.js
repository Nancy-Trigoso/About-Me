"use strict";
//Pregunta 1 Tengo 3 nombres?
const respuesta1 = "No";
//Pregunta 2 Vivo en Perú?
const respuesta2 = "No";
//Pregunta 3 Tengo perros?
const respuesta3 = "Si";
//Pregunta 4 Trabajo como Developer?
const respuesta4 = "No";
//Pregunta 5 Mi comida favorita es el arroz a la chiclayana?
const respuesta5  = "Si";
//Pregunta 6 Mi Adivina el número de mi cumpleaños?
const respuesta6 = "10";

let Respuestacorrecta = 0;
let Respuestaincorrecta = 0;

alert("Bienvenid@!👋 Empezemos a jugar! 🎮 ")
let nombre = prompt("Hola ¿Cuál es tu nombre? ");
alert("Mucho gusto " + nombre + " soy Nancy y te doy la bienvenida a mi página web! 🙌 ");
const Pregunta1 = prompt("Tengo 3 nombres?");
if(respuesta1.toLocaleLowerCase()===Pregunta1.toLocaleLowerCase()){
    console.log("Genial! respuesta correcta!")
    alert("Genial! respuesta correcta! ✅")
    Respuestacorrecta += 1;
}
else{
    console.log("Respuesta Incorrecta");
    alert("Respuesta Incorrecta 🙁");
    Respuestaincorrecta += 1;

}

const Pregunta2 = prompt("Vivo en Perú?");
if(respuesta2.toLocaleLowerCase()===Pregunta2.toLocaleLowerCase()){
    console.log("Genial! respuesta correcta!")
    alert("Genial! respuesta correcta! ✅")
    Respuestacorrecta += 1;
}
else{
    console.log("Respuesta Incorrecta");
    alert("Respuesta Incorrecta 🙁");
    Respuestaincorrecta += 1;

}
const Pregunta3 = prompt("Tengo perros?");
if(respuesta3.toLocaleLowerCase()===Pregunta3.toLocaleLowerCase()){
    console.log("Genial! respuesta correcta!")
    alert("Genial! respuesta correcta! ✅")
    Respuestacorrecta += 1;
}
else{
    console.log("Respuesta Incorrecta");
    alert("Respuesta Incorrecta 🙁");
    Respuestaincorrecta += 1;

}
const Pregunta4 = prompt("Trabajo como Developer?");
if(respuesta4.toLocaleLowerCase()===Pregunta4.toLocaleLowerCase()){
    console.log("Genial! respuesta correcta!")
    alert("Genial! respuesta correcta! ✅")
    Respuestacorrecta += 1;
}
else{
    console.log("Respuesta Incorrecta");
    alert("Respuesta Incorrecta 🙁");
    Respuestaincorrecta += 1;

}
const Pregunta5 = prompt("Mi comida favorita es el arroz a la chiclayana?");
if(respuesta5.toLocaleLowerCase()===Pregunta5.toLocaleLowerCase()){
    console.log("Genial! respuesta correcta!")
    alert("Genial! respuesta correcta! ✅")
    Respuestacorrecta += 1;
}
else{
    console.log("Respuesta Incorrecta");
    alert("Respuesta Incorrecta 🙁");
    Respuestaincorrecta += 1;

}



alert("Adivine el número de mi cumpleaños!!🎉🎉")
const numeroMaxIntentos = 4;
const numeroAAdivinar = 10;
console.log(numeroAAdivinar);
let contadorDeIntentos = 1;

while (contadorDeIntentos <= numeroMaxIntentos) {
  const numeroPorUsuario = Number(prompt("Ingrese un número, recuerda que tienes 4 intentos!!"));

  if (numeroPorUsuario === numeroAAdivinar) {
    console.log("Felicidades!!! adivinaste el número " + numeroAAdivinar);
    alert("Felicidades!!! adivinaste el número. 🥳 ")
    Respuestacorrecta += 1;
    
    break;
  }else{
    contadorDeIntentos++;
    if (contadorDeIntentos === numeroMaxIntentos + 1){
      console.log("Llegaste al número max de intentos 😟 mi cumpleaños es el 10 de Diciembre. 🎂 " );
      alert("Llegaste al número máximo de intentos 😟  mi cumpleaños es el 10 de Diciembre. 🎂 ")
      Respuestaincorrecta += 1;
    } else{
    if (numeroPorUsuario > numeroAAdivinar){
        console.log("El numero es muy alto,intenta con un numero menor. ➖ ");
        alert("El numero es muy alto, intenta con un numero menor. ➖ ")
       
    } else {
    if(numeroPorUsuario < numeroAAdivinar){
        console.log("El numero es muy bajo,intenta con un numero mayor.  ➕ ");
        alert("El numero es muy bajo, intenta con un numero mayor.  ➕ ")
       
    }
}
    }
}  
}

alert("Adivine mis colores favoritos!! 🌈 ")

let colores = ["rojo", "negro"];
let intentos = 6;

let adivinanza = prompt("Introduce un color:").toLowerCase();
for (let i = 0; i < intentos; i++) {
     if (adivinanza.toLowerCase === colores[i].toLowerCase) {
        alert("¡Correcto! Adivinaste el color!! ✅" );
        Respuestacorrecta += 1;
        break;
      } else {
        adivinanza = prompt("Incorrecto! ❌ Intenta de nuevo.");
        alert("Te quedan " + (intentos - i - 1) + " intentos.");  
      }
      if (i === 5){
      alert("Lo siento, se te acabaron los intentos. Los color correcto eran " + colores + ". 🌈");
      Respuestaincorrecta += 1;
      }
}
   


alert("Tu puntuación de respuestas es:");
alert("Adivinaste " + Respuestacorrecta + " preguntas correctas. ✅ ");
alert("Tienes "+ Respuestaincorrecta + " preguntas incorrectas. ❌ ");


alert("Fue divertido jugar contigo " + nombre +  " hasta la próxima! 👋 ")

