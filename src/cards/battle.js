const {buscarCounter} = require("./cards.js");

function busca(cardOne, cardTwo){
    let linha = 1, coluna = 1, op;
    var matr = [["matriz", "Arma", "Lendaria", "Magia", "Relicário"],
                ["Arma",   'poder', 'poder',   'poder', 'poder'    ],
                ["Lendaria",'poder','poder',   'poder', 'counter'  ],
                ["Magia"   ,'poder','poder',   'Magia', 'poder'    ],
                ["Relicário",'poder','counter','poder', 'Relicário']]

    for(let i = 1; i < 5; i++){
        if(cardOne.type === matr[0][i])
            coluna = i;     
        if(cardTwo.type === matr[i][0])
            linha = i;
    }
    
    op = matr[linha][coluna];
    
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
        return true;
    
    return false;
}
function relicaryBattle(cardOne, cardTwo)
{
    return batalha(buscarCounter(cardOne.name), buscarCounter(cardTwo.name));
}
function counterBattle(cardOne, cardTwo)
{
    if(cardOne.name == cardTwo.counter)
        return true;
    else if(cardOne.counter == cardTwo.name)
        return false;
    return powerBattle(cardOne, cardTwo);
}
function magicBattle(cardOne, cardTwo)
{   
    if(cardOne.power == cardTwo.power)
        return counterBattle(cardOne, cardTwo);

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

module.exports = batalha;