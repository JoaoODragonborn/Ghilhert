//TODO: Implementar a regra da vara de pesca

function busca(cardOne, cardTwo){
    let linha, coluna, op;
    var matr = [["matriz", "arma", "lendaria", "magia", "relicario"],
                ["arma",   'poder', 'poder',   'poder', 'poder'    ],
                ["lendaria",'poder','poder',   'poder', 'counter'  ],
                ["magia"   ,'poder','poder',   'magia', 'poder'    ],
                ["relicario",'poder','counter','poder', 'relicario']]

    for(let i = 1; i < 5; i++){
        if(cardOne.type == matr[0][i])
            coluna = i;     
        if(cardTwo.type == matr[i][0])
            linha = i;
    }
    op = matr[linha][coluna];
    return op;
}

function isCounter(cardOne, cardTwo)
{
    if(cardOne == cardTwo.counter || cardOne.counter == cardTwo)
        return true;
    return false;
}

function powerBattle(cardOne, cardTwo)
{
    if(cardOne.name == "Escudo Magico" && cardTwo.type == "magia")
        return true;
    else if(cardTwo.name == "Escudo Magico" && cardOne.type == "magia")
        return false;

    if(cardOne.name == "Escudo" && cardTwo.type == "arma")
        return true;
    else if(cardTwo.name == "Escudo" && cardOne.type == "arma")
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
    const winner = batalha2(cardOne.counter, cardTwo.counter);
            if(winner == cardOne.counter)
                //winner = cardOne;
                return true;
            //else //(winner == cardTwo.counter)
                //winner = cardTwo;
                return false;
}
function counterBattle(cardOne, cardTwo)
{
    if(cardOne == cardTwo.counter)
        //winner = cardOne;
        return true;
    else if(cardOne.counter == cardTwo)
        //winner = cardTwo;
        return false;
    /*
    else if(cardOne.type == "lendaria")
        //winner = cardOne;
        return true;
    else 
        //winner = cardTwo;
        return false;
    */
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
function batalha(cardOne, cardTwo){
    let op = busca(cardOne, cardTwo);

    if(isCounter(cardOne, cardTwo))
        return counterBattle(cardOne, cardTwo);
    
    switch(op){
        case 'poder':
            return powerBattle(cardOne, cardTwo);
        case 'relicario':
            return relicaryBattle(cardOne, cardTwo);
        case 'magia':
            return magicBattle(cardOne, cardTwo);
        case 'counter':
            return counterBattle(cardOne, cardTwo);
        default:
            console.log("Deu errado");
    }
}

export default batalha;