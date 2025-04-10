class Card{

    constructor(name, power, type, counter){
        this.name = name;
        this.power = power;
        this.type = type;
        this.counter = counter;
    }
}
const deckOfCards = [
    new Card("Adaga",          0, "Arma", "Escudo"),
    new Card("Espada",         1, "Arma", "Escudo"),
    new Card("Katana",         2, "Arma", "Escudo"),
    new Card("Marreta",        3, "Arma", "Escudo"),
    new Card("Leviatã",        4, "Arma", "Escudo"),
    new Card("Elucidator",     5, "Arma", "Escudo"),
    new Card("Foice",          6, "Arma", "Escudo"),
    new Card("Guarda-chuva",   7, "Arma", "Escudo"),
    new Card("Arco",           8, "Arma", "Escudo"),
    new Card("Besta",          9, "Arma", "Escudo"),
    new Card("Espada Tripla",  500, "Lendaria", "Quebra-Espadas"),
    new Card("Excalibur",      200, "Lendaria", "Caldeirão"),
    new Card("Shuriken",       300, "Lendaria", "Guizo de Buda"),
    new Card("Revólver",       999, "Lendaria", "Adaga"),
    new Card("Água",           10, "Magia", "Natureza"),
    new Card("Natureza",       10, "Magia", "Fogo"),
    new Card("Fogo",           10, "Magia", "Água"),
    new Card("Eletricidade",   11, "Magia", "Escudo Mágico"),
    new Card("Plasma",         12, "Magia", "Escudo Mágico"),
    new Card("Arcana",         13, "Magia", "Escudo Mágico"),
    new Card("Trevas",         14, "Magia", "Escudo Mágico"),
    new Card("Luz",            15, "Magia", "Escudo Mágico"),
    new Card("Quebra-Espadas", 0.5, "Relicário", ""),
    new Card("Caldeirão",      0.5, "Relicário", ""),
    new Card("Guizo de Buda",  0.5, "Relicário", ""),
    new Card("Escudo Mágico",  0.5, "Relicário", ""),
    new Card("Escudo",         0.5, "Relicário", ""),
    new Card("Vara de pesca",  0.5, "Relicário", "")
]

/*
function adcMagiasEspeciais(){
    deckOfCards.push(new Card("Inversão",  0, "Magia Especial", ""));
    deckOfCards.push(new Card("Level Up!", 0, "Magia Especial", ""));
}
*/

function buscarCounter(cardName)
{
    const carta = deckOfCards.find(e => e.counter === cardName);
    if(!carta)
        console.log("Carta counter não encontrada: " + cardName);
    return carta;
}

function buscarCarta(cardName)
{
    const carta = deckOfCards.find(e => e.name === cardName);
    if(!carta)
        console.log("Carta não encontrada.");
    return carta;
}

function embaralharCartas(arr)
{
    const tempArr = [];
    while (arr.length > 0){
        let rand = Math.floor(Math.random() * arr.length);
        tempArr.push(arr.splice(rand, 1)[0]);
    }
    arr.push(...tempArr);
}

function distribuirCartas(src, deck1, deck2)
{
    for(let i = 0; i < 14; i++){
        if(i % 2)
            deck1.push(src.shift());
        else
            deck2.push(src.shift());
    }
}

function instanciaDeck()
{
    return deckOfCards.slice();
}

function pescaCarta(src)
{
    return src.shift();
}

function isVara(card){
    return card.name === "Vara de pesca"
}

function printDeck(arr)
{
    arr.forEach(e => {
        console.log(e.name);
    });
}

module.exports = {buscarCarta, buscarCounter, embaralharCartas, distribuirCartas, instanciaDeck, pescaCarta, isVara, printDeck};