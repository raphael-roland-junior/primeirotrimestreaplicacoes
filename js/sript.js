function Deus() {
let pedido2 = document.getElementById('pedido').value;
let comida2 = document.getElementById('comida').value;
let valorp;
let valorc;
let c;

    if (pedido2 === "nenhuma") {
        valorp = "R$0.00";
    } else if (pedido2 === "cafe") {
        valorp = "R$7.00";
    } else if (pedido2 === "cafelate") {
        valorp = "R$9.00";
    } else if (pedido2 === "cafeexpresso") {
        valorp = "R$10.00";
    } else if (pedido2 === "cafemocha" ) {
        valorp = "R$11.50";
    } else if (pedido2 === "cappuccino") {
        valorp = "12.99";
    } else if (pedido2 === "frappuccino") {
        valorp = "14.99";
    }

    if (comida2 === "nada") {
        valorc = "R$0.00";
    } else if (comida2 === "joelho") {
        valorc = "R$5.50";
    } else if (comida2 === "pastel") {
        valorc = "R$6.50";
    } else if (comida2 === "coxinha") {
        valorc = "R$5.00";
    } else if (comida2 === "croissant") {
        valorc = "R$6.00";
    }

    let valor = valorp + valorc;
    c++
    // Atualiza o elemento com o valor calculado
    saida.innerHTML = `Seus pedidos tem os valores de ${valorc} e ${valorp}`;


}
