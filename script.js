const h1 = document.querySelector('h1');
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


h1.innerHTML = 'A la grande le puse cuca <br> by homero'; // se pueden agergar etiquetas html también.

/* console.log(h1.getAttribute('pantalla'));

h1.setAttribute('class', 'rojo'); */

/* h1.classList.add('green');
h1.classList.remove('verde'); */

/* input.value= '45678910'; */ //cambio el valor de Value del input.


//crear elemetno en el dom


const imagen = document.createElement('img');

imagen.setAttribute('src','https://1.img-dpreview.com/files/p/TC3840x2560S3840x2560~sample_galleries/3220969392/5842928524.jpg');

pid.append(imagen);


