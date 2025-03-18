import React from "react";
import { BackgroundTable }from './styled'
import Deck from "../deck";
import MidTable from "../midTable";

export default function Table(){

    return(
        <BackgroundTable>
            <Deck/>
            <MidTable/>
            <Deck/>
        </BackgroundTable>
    )
};

