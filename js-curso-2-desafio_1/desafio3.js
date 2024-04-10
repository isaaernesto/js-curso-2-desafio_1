let dolar = parseFloat(prompt("informe quantos dolares você tem:"));
let real;

function dolarParaReais(parDolar){
    return parDolar*4.80;

}
real = dolarParaReais(dolar);
alert (`O valor é equivalente a R$ ${real.toFixed(2)}`);