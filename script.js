const primer_titulo = document.querySelector('h1');
const parrafito1 = document.querySelector('#Hola');
const parrafito2 = document.querySelector('.oe');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn = document.querySelector('#btn');
const muestraP = document.querySelector('.muestra');

console.log(primer_titulo);
console.log({
    primer_titulo,
    parrafito1,
    parrafito2,
    input1,
    input2,
    btn,
    muestraP,
});


primer_titulo.classList.add('jola');
primer_titulo.classList.remove('ola');

function sumar() {
    const sumainput = parseInt(input1.value) + parseInt(input2.value);
    muestraP.innerText = 'Su resultado es: ' + sumainput;
}
