let largura = parseInt (prompt("informe a largura da sala"));
let altura = parseFloat (prompt("informe a altura da sala"));
let perimetro;
let area;

function perimetroSala (parLargura, parAltura){
    perimetro = (parLargura*parAltura);

    area = (parLargura*parAltura);
}

perimetroSala(largura,altura);
alert (`o perimetro da sala é de ${perimetro.toFixed(2)}`);
alert (`a area da sala é de ${area.toFixed(2)}`);
