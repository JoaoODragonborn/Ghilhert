//console.log("Hello World!!!");

const batalha = require("./battle.js");
const {embaralharCartas, distribuirCartas, instanciaDeck, printDeck, pescaCarta, isVara} = require("./cards.js");

const deck = instanciaDeck();
const playerDeck = [];
const cpuDeck = [];

embaralharCartas(deck);
distribuirCartas(deck, playerDeck, cpuDeck);

console.log("\nDeck do jogador: ");
printDeck(playerDeck);

console.log("\nDeck do cpu: ");
printDeck(cpuDeck);

console.log("\nDeck: ");
printDeck(deck);

let player = 0;
let cpu = 0;

for(let i = 0; i < 7; i++){

    let playerCard = playerDeck.shift();
    let cpuCard = cpuDeck.shift();
    
    if(isVara(playerCard))
        playerCard = pescaCarta(deck);
    else if(isVara(cpuCard))
        cpuCard = pescaCarta(deck);

    if(batalha(playerCard, cpuCard)){
        console.log("Player ganhou!!!");
        player++;
    } else {
        console.log("CPU ganhou!!!");
        cpu++;
    }
}

console.log(`Player ${player} VS ${cpu} CPU`);


