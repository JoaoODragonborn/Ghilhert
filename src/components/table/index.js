import React from "react";
import {Card, DeckTable, Mount, MainCard, FlexDiv, BackgroundTable, DoubleCards} from './styled'

export default function Table(){

    return(
        <BackgroundTable>
            <Deck/>
            <MidTable/>
            <Deck/>
        </BackgroundTable>
    )
};

function Deck(){
    return(
        <DeckTable>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </DeckTable>
    );
};

function MidTable(){

    return(
        <FlexDiv>
            <DoubleCards>
                <Mount/>
                <Mount/>
            </DoubleCards>
            <DoubleCards>
                <MainCard/>
                <MainCard/>
            </DoubleCards>
            <Mount/>
        </FlexDiv>
    );
};