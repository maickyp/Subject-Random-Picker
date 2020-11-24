"use strict";
// List of topics
const subjects = ["Conjuntos Numéricos", "Recta Numérica", "Multiplos y Divisores",    "Criterios de Divisibilidad", "mcm y MCD", "Descomposición Factorial", "Potencias", "Jerarquía de operaciones", "Notación Desarrollada y Científica", "Fracciones", "Regla de 3 Directa", "Regla de 3 Inversa", "Portentajes", "Uso de datos de Regla 3", "Leyes de exponentes", "Operaciones Algebráicas", "Factorización", "Operador Matemático", "Ecuaciones 1 variable", "Criterios de Ecuaciones", "Inecuaciones", "Ecuaciones cuadráticas", "Divisón Polinómica y Sintética", "Funciones", "Pendiente","Representación gráfica de inecuaciones", "Ángulos", "Ángulos entre paralelas", "Ángulos en figuras", "Triángulos", "Áreas", "Area Sombreada", "Perímetros", "Crecimiento ropocional", "Plano cartesiano", "Valor Absoluto", "Raíz cuadrada", "Combinatoria", "Probabilidad", "Conjuntos", "Estadística", "Series"];

// History of picks
let history = [];

// Lenght of list of topics
const subjectsLength = subjects.length;

// how many topics do you want to track
const historyLength = 10;

// control variable for be sure selected topic is not previously taken.
let control = false;

// Load initial content
document.addEventListener("DOMContentLoaded", function(){
    
    const list = document.querySelector("#list-of-subjects");
    const history = document.querySelector("#history");

    subjects.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element;
        list.appendChild(li);
    });

    for(let i = 0; i< historyLength; i++){
        let li = document.createElement("li");
        li.id=`li${i}`;
        history.appendChild(li);
    }

})

// Pick one topic
document.querySelector(".btn").addEventListener("click", function(){
    
    let selectedSubject;
    do{
        selectedSubject = selectSubject();
        control = validateSubject(selectedSubject);
    }
    while(control==false);

    historyPull(historyLength);

    render(selectedSubject, history);

})

// Random number between 0 and list lengt -1
function getRandom() {
    return Math.random() * subjectsLength;
}

// Pick one topic with random
function selectSubject(){
    const random = Math.floor(getRandom());
    return subjects[random];
}

// Checl if not selected previously
function validateSubject(subject){
    const selectedSubject = subject;
    if (!history.includes(selectedSubject)){
        history.push(selectedSubject);
        return true;
    }
    else{
        return false;
    }
}
// Pull item on FIFO list when full.
function historyPull(n){
    if (history.length>n){
        history.shift();
    }
}

// Render history list.
function render(selectedSubject, array) {
    document.querySelector("#selected-subject").innerHTML = selectedSubject;
    const list = document.querySelector("#history");

    for(let i = 0; i<historyLength; i++){
        let li=list.querySelector(`#li${i}`);
        if(array[i]){
         li.innerHTML= array[i];
        }
    }
    
}

