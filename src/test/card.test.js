const { buscarCarta, pescaCarta } = require("../cards/cards");

test("PescaDeCartas", function(){

    let escudoMagico = buscarCarta("Escudo Mágico");
    let escudo = buscarCarta("Escudo");
    let temp = buscarCarta("Espada");
    const arr = [escudo, escudoMagico];

    temp = pescaCarta(arr);

    expect(temp.name).toBe("Escudo");
})