const batalha = require("../cards/battle.js");
const {buscarCarta} = require("../cards/cards.js");

let agua, natureza, fogo, eletricidade, plasma, arcana, trevas, luz;
let adaga, besta, espadaTripla, excalibur, shuriken, revolver;
let quebraEspadas, caldeirao, guizoDeBuda;
let escudoMagico, escudo;

beforeAll(() => 
{
    agua = buscarCarta("Água");
    natureza = buscarCarta("Natureza");
    fogo = buscarCarta("Fogo");
    eletricidade = buscarCarta("Eletricidade");
    plasma = buscarCarta("Plasma");
    arcana = buscarCarta("Arcana");
    trevas = buscarCarta("Trevas");
    luz = buscarCarta("Luz");
    adaga = buscarCarta("Adaga");
    besta = buscarCarta("Besta");
    espadaTripla = buscarCarta("Espada Tripla");
    excalibur = buscarCarta("Excalibur");
    shuriken = buscarCarta("Shuriken");
    revolver = buscarCarta("Revólver");
    quebraEspadas = buscarCarta("Quebra-Espadas");
    caldeirao = buscarCarta("Caldeirão");
    guizoDeBuda = buscarCarta("Guizo de Buda");
    escudoMagico = buscarCarta("Escudo Mágico");
    escudo = buscarCarta("Escudo");
});

test("Triangulo de magias", function()
{   
    expect(batalha(agua, fogo)).toBe(true);
    expect(batalha(fogo, agua)).toBe(false);
    expect(batalha(agua, natureza)).toBe(false);
    expect(batalha(natureza, agua)).toBe(true);
    expect(batalha(fogo, natureza)).toBe(true);
    expect(batalha(natureza, fogo)).toBe(false);
});

test("MagiasVSMagias", function()
{
    expect(batalha(trevas, agua)).toBe(true);
    expect(batalha(agua, trevas)).toBe(false);

    expect(batalha(luz, trevas)).toBe(true);
    expect(batalha(trevas, luz)).toBe(false);

});

test("MagiasVSEscudoMagico", function()
{
    expect(batalha(agua, escudoMagico)).toBe(false);
    expect(batalha(escudoMagico, agua)).toBe(true);
    expect(batalha(luz, escudoMagico )).toBe(false);
    expect(batalha(escudoMagico, luz )).toBe(true);
});

test("MagiasVSRelicarios", function()
{
    expect(batalha(agua, guizoDeBuda)).toBe(true);
    expect(batalha(guizoDeBuda, agua)).toBe(false);
});

test("MagiasVSLendarias", function()
{
    expect(batalha(agua, excalibur)).toBe(false);
    expect(batalha(excalibur, agua)).toBe(true);
});

test("MagiasVSArmas", function()
{
    expect(batalha(agua, besta)).toBe(true);
    expect(batalha(besta, agua)).toBe(false);
});

test("ArmasVSArmas", function()
{
    expect(batalha(besta, adaga)).toBe(true);
    expect(batalha(adaga, besta)).toBe(false);
});

test("ArmasVSLendarias", function()
{
    expect(batalha(espadaTripla, adaga)).toBe(true);
    expect(batalha(adaga, espadaTripla)).toBe(false);
});

test("ArmasVSRelicarios", function()
{
    expect(batalha(caldeirao, adaga)).toBe(true);
    expect(batalha(adaga, caldeirao)).toBe(false);

    expect(batalha(caldeirao, besta)).toBe(false);
    expect(batalha(besta, caldeirao)).toBe(true);
});

test("ArmasVSEscudo", function()
{
    expect(batalha(escudo, besta)).toBe(true);
    expect(batalha(besta, escudo)).toBe(false);
});

test("CounterLendariaRelicarios", function()
{
    expect(batalha(excalibur, caldeirao)).toBe(false);
    expect(batalha(caldeirao, excalibur)).toBe(true );

    expect(batalha(shuriken, guizoDeBuda)).toBe(false);
    expect(batalha(guizoDeBuda, shuriken)).toBe(true );

    expect(batalha(espadaTripla, quebraEspadas)).toBe(false);
    expect(batalha(quebraEspadas, espadaTripla)).toBe(true );

    expect(batalha(revolver, adaga)).toBe(false);
    expect(batalha(adaga, revolver)).toBe(true);

    expect(batalha(excalibur, guizoDeBuda)).toBe(true);
    expect(batalha(guizoDeBuda, excalibur)).toBe(false);
});

test("RelicarioVsRelicario", function()
{
    expect(batalha(quebraEspadas, caldeirao)).toBe(true);
    expect(batalha(caldeirao, quebraEspadas)).toBe(false);
});
