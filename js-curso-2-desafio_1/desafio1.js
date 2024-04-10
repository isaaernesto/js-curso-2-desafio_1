let peso = parseFloat(prompt("informe seu peso:"));
let altura = parseFloat (prompt ("informe sua altura"));
let imc;

function calculoIMC(parPeso, parAltura) {
    return parPeso/(parAltura*parAltura);
}

imc= calculoIMC(peso, altura);
alert (`o valor do IMC é ${imc}`);