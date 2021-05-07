let inputAdulto = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("horas");

let resultado = document.getElementById("resultado")



function calcular(){
    console.log("calculando...");

    let adulto = inputAdulto.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalDeCarne = quatiDeCarne(duracao) * adulto + (quatiDeCarne(duracao) / 2 * criancas);
    console.log(totalDeCarne);

    let totalDeCerveja = quatiDeCerveja(duracao) * adulto;
    console.log(totalDeCerveja)

    let totalDeRefri = quatiDeRefri(duracao) * adulto + (quatiDeRefri(duracao) / 2 * criancas);
    console.log(totalDeRefri);

    resultado.innerHTML = `<p>${totalDeCarne / 1000}KG de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalDeCerveja / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalDeRefri / 2000)} garafas de 2 litros refrigerantes `
}


function quatiDeCarne(duracao) {
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function quatiDeCerveja(duracao) {
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function quatiDeRefri(duracao) {
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}