import React from 'react';
import { CardTemplate } from './styled'

export default function Card({name, power}){
    return(
        <CardTemplate>
            <h1>{name}</h1>
            <p>{power}</p>
        </CardTemplate>
    );
};