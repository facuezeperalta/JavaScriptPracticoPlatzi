/* const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');



console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = 'A la grande le puse cuca <br> by homero'; */ // se pueden agergar etiquetas html también.

/* console.log(h1.getAttribute('pantalla'));

h1.setAttribute('class', 'rojo'); */

/* h1.classList.add('green');
h1.classList.remove('verde'); */

/* input.value= '45678910'; */ //cambio el valor de Value del input.


//crear elemetno en el dom

/* 
const imagen = document.createElement('img');

imagen.setAttribute('src','https://1.img-dpreview.com/files/p/TC3840x2560S3840x2560~sample_galleries/3220969392/5842928524.jpg');

pid.append(imagen);
 */

const h1 = document.querySelector('h1');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const boton = document.querySelector('#calcularSuma');
const addResult = document.querySelector('#addResult');
const form = document.querySelector('#form');

form.addEventListener('submit',btnClick);


function btnClick(event){ 
    event.preventDefault();
    const resultAddition = parseInt(calculo1.value,10)  + parseInt(calculo2.value,10);
    addResult.innerText = 'Resultado: '+ resultAddition;
}



