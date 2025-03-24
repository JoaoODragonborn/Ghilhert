import React, { useEffect } from "react";
import { BackgroundTable }from './styled'
import Deck from "../../components/deck";
import MidTable from "../../components/midTable";

import { distribuirCartas, embaralharCartas, instanciaDeck } from "../../cards/cards";

export default function Tabuleiro(){

    useEffect(()=>
        {
            // Organizar as cartas
            const cards = instanciaDeck();
            embaralharCartas(cards);

            // Entregar as cartas
            const playerCards = [];
            const cpuCards = [];
            distribuirCartas(cards, playerCards, cpuCards);

            // Decide quem começa
            let actualPlayer = Math.floor(Math.random() * 2);
            if(actualPlayer)
                alert('Você começa');
            else
                alert('O CPU começa');

        }, [])
    return(
        <BackgroundTable>
            <Deck cards={cpuCards} handleClick={funcaoClique}/>
            <MidTable/>
            <Deck cards={playerCards} handleClick={funcaoClique}/>
        </BackgroundTable>
    )
};

function funcaoClique(){
    console.log('Clicou!');
}