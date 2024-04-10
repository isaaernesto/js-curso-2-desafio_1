let titulo = document.querySelector('h');
titulo.innerHTML = "Hora do desafio!";

function verificarConsole(){
    console.log ("O botão foi clicado");
}

function verificarAlert() {
    alert ("Eu amo JS");
}

function verificarPrompt(){
    let cidade; 
    cidade = prompt("informe o nome de uma cidade do Brasil");
    alert (`estive em ${cidade} e me lembrei de você`);
}

function verificarSoma() {
    let numero1 = parseInt(prompt("Digite um numero"));
    let numero2 = parseInt(prompt ("Digite outro numero"));
    let soma = numero1+numero2;
    alert (`A soma é ${soma}`);
}
