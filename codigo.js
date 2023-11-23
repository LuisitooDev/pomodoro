//CONEXION CON FRONTEND
let linkCronometro = document.getElementById('lblCronometro')
let botonEmpezar = document.getElementById('btnStart')
let botonPausa = document.getElementById('btnPause')
let botonParar = document.getElementById('btnStop')
let botonAutomatico =document.getElementById('switchAutomatico')

//SONIDOS
let alarma = new Audio('./assets/audios/alarma.mp3')

//VARIABLES DE FUNCIONES
let activarCronometro;
let activarPomodoro;
let activarDescansoCorto;
let activarDescansoLargo;
let activarCiclo;

//modo
let modo = 1

//VARIABLES DE TIEMPO
let segundos = 00;
let minutos = 25;

//FUNCIONES
//modos
function modoPomodoro(){
    modo = 1;
    segundos = 00;
    minutos = 25;
    linkCronometro.innerHTML = "25:00";
    clearInterval(activarDescansoCorto);
    clearInterval(activarDescansoLargo);
    clearInterval(activarCronometro);
    botonEmpezar.className = "btn btn-outline-light btnRedondo";
}

function modoDescansoCorto(){
    modo = 2;
    segundos = 00;
    minutos = 05;
    linkCronometro.innerHTML = "05:00";
    clearInterval(activarPomodoro);
    clearInterval(activarDescansoLargo);
    clearInterval(activarCronometro);
    botonEmpezar.className = "btn btn-outline-light btnRedondo";
}

function modoDescansoLargo(){
    modo = 3;
    segundos = 00;
    minutos = 10;
    linkCronometro.innerHTML = "10:00";
    clearInterval(activarPomodoro);
    clearInterval(activarDescansoCorto);
    clearInterval(activarCronometro);
    botonEmpezar.className = "btn btn-outline-light btnRedondo";
}

function modoCronometro(){
    modo = 4;
    segundos = 00;
    minutos = 00;
    linkCronometro.innerHTML = "00:00";
    clearInterval(activarPomodoro);
    clearInterval(activarDescansoCorto);
    clearInterval(activarDescansoLargo);
    botonEmpezar.className = "btn btn-outline-light btnRedondo";
}

//funcionamiento
function cronometro(){
    segundos++;
    vistaSegundos = segundos.toString().padStart(2, "0");
    vistaMinutos = minutos.toString().padStart(2, "0");
    if (segundos==59) {
        segundos = 00;
        minutos++
    }
    linkCronometro.innerHTML = vistaMinutos + ":" + vistaSegundos;
}

function pomodoro(){
    if (minutos == 0 & segundos == 0) {
        if (botonAutomatico.checked){
            clearInterval(activarPomodoro);
            modoDescansoCorto();
            activarDescansoCorto = setInterval(descansoCorto, 1000);
        }else{
            stopp();
            alarma.play();
        }
    }

    if (segundos==0) {
        segundos = 60;
        minutos--
    }
    segundos--
    vistaSegundos = segundos.toString().padStart(2, "0");
    vistaMinutos = minutos.toString().padStart(2, "0");
    linkCronometro.innerHTML = vistaMinutos + ":" + vistaSegundos;
}

function descansoCorto(){
    if (minutos == 0 & segundos == 0) {
        if (botonAutomatico.checked){
            clearInterval(activarDescansoCorto);
            modoDescansoLargo();
            activarDescansoLargo = setInterval(descansoLargo, 1000);
        }else{
            stopp();
            alarma.play();
        }
    }

    if (segundos==0) {
        segundos = 60;
        minutos--
    }
    segundos--
    vistaSegundos = segundos.toString().padStart(2, "0");
    vistaMinutos = minutos.toString().padStart(2, "0");
    linkCronometro.innerHTML = vistaMinutos + ":" + vistaSegundos;
}

function descansoLargo(){
    if (minutos == 0 & segundos == 0) {
        if (botonAutomatico.checked){
            clearInterval(activarDescansoLargo);
            modoPomodoro();
            activarPomodoro = setInterval(pomodoro, 1);
        }else{
            stopp();
            alarma.play();
        }
    }

    if (segundos==0) {
        segundos = 60;
        minutos--
    }
    segundos--
    vistaSegundos = segundos.toString().padStart(2, "0");
    vistaMinutos = minutos.toString().padStart(2, "0");
    linkCronometro.innerHTML = vistaMinutos + ":" + vistaSegundos;
}



//botones
function start(){
    switch (modo) {
        case 1:
            activarPomodoro = setInterval(pomodoro,1000);
            botonEmpezar.className = "btn btn-outline-light disabled btnRedondo";
            break;

        case 2:
            activarDescansoCorto = setInterval(descansoCorto, 1000);
            botonEmpezar.className = "btn btn-outline-light disabled btnRedondo"
            break;
        
        case 3:
            activarDescansoLargo = setInterval(descansoLargo, 1000);
            botonEmpezar.className = "btn btn-outline-light disabled btnRedondo"
            break;

        case 4:
            activarCronometro = setInterval(cronometro,1000);
            botonEmpezar.className = "btn btn-outline-light disabled btnRedondo";
            break;
    }
}


function pause(){
    switch (modo) {
        case 1:
            clearInterval(activarPomodoro);
            botonEmpezar.className = "btn btn-outline-light btnRedondo";
            break;
        
        case 2:
            clearInterval(activarDescansoCorto);
            botonEmpezar.className = "btn btn-outline-light btnRedondo";
            break;
        
        case 3:
            clearInterval(activarDescansoLargo);
            botonEmpezar.className = "btn btn-outline-light btnRedondo";
            break;

        case 4:
            clearInterval(activarCronometro);
            botonEmpezar.className = "btn btn-outline-light btnRedondo";
            break;
    }
}

function stopp(){
    switch (modo) {
        case 1:
            clearInterval(activarPomodoro);
            segundos = 01
            minutos = 25
            linkCronometro.innerHTML = "25:00";
            botonEmpezar.className = "btn btn-outline-light btnRedondo";
            break;
        
        case 2:
            clearInterval(activarDescansoCorto);
            segundos = 01
            minutos = 05
            linkCronometro.innerHTML = "05:00";
            botonEmpezar.className = "btn btn-outline-light btnRedondo";
            break;
        
        case 3:
            clearInterval(activarDescansoLargo);
            segundos = 01
            minutos = 10
            linkCronometro.innerHTML = "10:00";
            botonEmpezar.className = "btn btn-outline-light btnRedondo";
            break;

        case 4:
            clearInterval(activarCronometro);
            segundos = 00
            minutos = 00
            linkCronometro.innerHTML = "00:00";
            botonEmpezar.className = "btn btn-outline-light btnRedondo";
            break;
    }
}
