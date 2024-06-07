"use strict";
//Pregunta 1 Tengo 3 nombres?
const respuesta1 = "No";
//Pregunta 2 Vivo en Perú?
const respuesta2 = "No";
//Pregunta 3 Tengo perros?
const respuesta3 = "Si";
//Pregunta 4 Trabajo como Developer?
const respuesta4 = "No";
//Pregunta 5 Mi color favorito es el negro?
const respuesta5  = "Si";

let Respuestacorrecta = 0;
let Respuestaincorrecta = 0;

alert("Bienvenid@! Empezemos a jugar!")
let nombre = prompt("Hola ¿Cuál es tu nombre? ");
alert("Mucho gusto " + nombre + " soy Nancy y te doy la bienvenida a mi página web! ");
const Pregunta1 = prompt("Tengo 3 nombres?");
if(respuesta1.toLocaleLowerCase()===Pregunta1.toLocaleLowerCase()){
    console.log("Genial! respuesta correcta! ✅")
    alert("Genial! respuesta correcta! 🙁")
    Respuestacorrecta += 1;
}
else{
    console.log("Respuesta Incorrecta");
    alert("Respuesta Incorrecta");
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
const Pregunta5 = prompt("Mi color favorito es el negro?");
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

alert("Fue divertido jugar contigo, hasta la próxima!")

