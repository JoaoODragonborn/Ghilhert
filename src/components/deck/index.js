import React from "react";
import { DeckTable } from "./styled";
import Card from "../card/index";

export default function Deck({cards, handleClick}){
    return(
        <DeckTable>
            <Card name={cards[0].name} power={cards[0].power} handleClick={handleClick}/>
            <Card name={cards[1].name} power={cards[1].power} handleClick={handleClick}/>
            <Card name={cards[2].name} power={cards[2].power} handleClick={handleClick}/>
            <Card name={cards[3].name} power={cards[3].power} handleClick={handleClick}/>
            <Card name={cards[4].name} power={cards[4].power} handleClick={handleClick}/>
            <Card name={cards[5].name} power={cards[5].power} handleClick={handleClick}/>
            <Card name={cards[6].name} power={cards[6].power} handleClick={handleClick}/>
        </DeckTable>
    );
};