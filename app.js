let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//let titulo = document.querySelector('h1'); 
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML =  'Indica un número del 1 @ 10';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            //El usuario no acerto.
            if(numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p','el número secreto es menor');
            } else {
                asignarTextoElemento('p','(el número secreto es mayor');
            }
            intentos++
            limpiarCaja();
        }
    return;
}
function limpiarCaja() {
   // let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    //Otra forma, abreviada, de hacerlo.
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si el ya sorteamos todos los numeros
       if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros psibles');
    } else{

        //Si el número generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();

} else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

}


}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 @ ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de número
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();    
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales(); 