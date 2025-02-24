const {buscarCounter} = require("../cards/cards.js");

function busca(cardOne, cardTwo){
    let linha = 1, coluna = 1, op;
    var matr = [["matriz", "Arma", "Lendaria", "Magia", "Relicário"],
                ["Arma",   'poder', 'poder',   'poder', 'poder'    ],
                ["Lendaria",'poder','poder',   'poder', 'counter'  ],
                ["Magia"   ,'poder','poder',   'Magia', 'poder'    ],
                ["Relicário",'poder','counter','poder', 'Relicário']]

    for(let i = 1; i < 5; i++){
        
        //console.log(`${matr[i][0]} ===  ${cardOne.type} : ${matr[i][0] === cardOne.type}`);
        //console.log(`${matr[0][i]} ===  ${cardTwo.type} : ${matr[0][i] === cardTwo.type}`);
        if(cardOne.type === matr[0][i])
            coluna = i;     
        if(cardTwo.type === matr[i][0])
            linha = i;
    }
    op = matr[linha][coluna];
    //console.log(op);
    return op;
}

function powerBattle(cardOne, cardTwo)
{
    if(cardOne.name == "Escudo Mágico" && cardTwo.type == "Magia")
        return true;
    else if(cardTwo.name == "Escudo Mágico" && cardOne.type == "Magia")
        return false;

    if(cardOne.name == "Escudo" && cardTwo.type == "Arma")
        return true;
    else if(cardTwo.name == "Escudo" && cardOne.type == "Arma")
        return false;

    if(cardOne.power > cardTwo.power)
        //winner = cardOne;
        return true;
    //else //if(cardOne.power < cardTwo.power)
        //winner = cardTwo;
        return false;
}
function relicaryBattle(cardOne, cardTwo)
{
    return batalha(buscarCounter(cardOne.name), buscarCounter(cardTwo.name));
}
function counterBattle(cardOne, cardTwo)
{
    if(cardOne.name == cardTwo.counter)
        //winner = cardOne;
        return true;
    else if(cardOne.counter == cardTwo.name)
        //winner = cardTwo;
        return false;
    return powerBattle(cardOne, cardTwo);
}
function magicBattle(cardOne, cardTwo)
{   if(cardOne.power == cardTwo.power){
        //TODO: Colocar aqui a função de counter
        return counterBattle(cardOne, cardTwo);
    }
    //else 
        //TODO: Colocar aqui a função de poder
        return powerBattle(cardOne, cardTwo);
}
function isCounter(cardOne, cardTwo)
{
    if(cardOne.name == cardTwo.counter || cardOne.counter == cardTwo.name)
        return true;
    return false;
}
function batalha(cardOne, cardTwo)
{
    //console.log(cardOne, cardTwo);
    if(isCounter(cardOne, cardTwo)){
        console.log("COUNTER!!!");
        return counterBattle(cardOne, cardTwo);
    }

    let op = busca(cardOne, cardTwo);    
    
    switch(op){
        case 'poder':
            return powerBattle(cardOne, cardTwo);
        case 'Relicário':
            return relicaryBattle(cardOne, cardTwo);
        case 'Magia':
            return magicBattle(cardOne, cardTwo);
        case 'counter':
            return counterBattle(cardOne, cardTwo);
        default:
            console.log("Deu errado");
    }
}

//export default batalha;
module.exports = batalha;