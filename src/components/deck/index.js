import React from "react";
import { DeckTable } from "./styled";
import Card from "../card/index";

export default function Deck(){
    return(
        <DeckTable>
            <Card name={"huahuahua"} power={1112}/>
            <Card name={"huahuahua"} power={1112}/>
            <Card name={"huahuahua"} power={1112}/>
            <Card name={"huahuahua"} power={1112}/>
            <Card name={"huahuahua"} power={1112}/>
            <Card name={"huahuahua"} power={1112}/>
            <Card name={"huahuahua"} power={1112}/>
        </DeckTable>
    );
};