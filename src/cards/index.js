import Card from './cards.js'
import batalha from './battle.js'
// Tipos de cartas: arma, arma lendária, magia, relicario, magia especial 
const espada = new Card("espada", 7, "arma", null);
const arco = new Card("arco", 9, "arma", null);

console.log(batalha(espada, arco));
for(let i = 0; i < 25; i++)
    console.log(Math.random() * 28);