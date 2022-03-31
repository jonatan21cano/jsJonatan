const botonSumar= document.querySelector('#btnSumar');
const botonRestar= document.querySelector('#btnRestar');
const botonDividir= document.querySelector('#btnDividir');
const botonMultiplicar= document.querySelector('#btnMultiplicar');

const numeroUno= document.getElementById('numero1').value;
const numeroDos=document.querySelector('#numero2').value;

console.log(numeroUno, numeroDos)

botonSumar.addEventListener('click', function() {
    const numeroUno= document.getElementById('numero1').value;
    const numeroDos=document.querySelector('#numero2').value;
    const mostrar=document.querySelector('#mostrar');
    const resultado= parseInt(numeroUno)+parseInt(numeroDos);
    mostrar.textContent=resultado;
    console.log(resultado);
});

botonRestar.addEventListener('click', function() {
    const numeroUno= document.getElementById('numero1').value;
    const numeroDos=document.querySelector('#numero2').value;
    const mostrar=document.querySelector('#mostrar');
    const resultado= parseInt(numeroUno)-parseInt(numeroDos);
    mostrar.textContent=resultado;
    console.log(resultado);   
});

botonDividir.addEventListener('click', function() {
    const numeroUno= document.getElementById('numero1').value;
    const numeroDos=document.querySelector('#numero2').value;
    const mostrar=document.querySelector('#mostrar');
    const resultado= parseInt(numeroUno)/parseInt(numeroDos);
    mostrar.textContent=resultado;
    console.log(resultado);

    if(numeroDos==0){
        mostrar.textContent=("No se puede realizar la division");
    }else{
        mostrar.textContent(resultado);
    }
    
});

botonMultiplicar.addEventListener('click', function() {
    const numeroUno= document.getElementById('numero1').value;
    const numeroDos=document.querySelector('#numero2').value;
    const mostrar=document.querySelector('#mostrar');
    const resultado= parseInt(numeroUno)*parseInt(numeroDos);
    mostrar.textContent=resultado;
    console.log(resultado);
});




