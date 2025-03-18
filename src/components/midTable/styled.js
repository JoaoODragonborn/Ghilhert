import styled from "styled-components";
import { CardTemplate } from "../card/styled";

export const MainCard = styled(CardTemplate)`
    background-color: #f0f00f;
    &:hover{
            background-color:rgb(196, 199, 0);
            margin: 10px;
    }
`;


export const Mount = styled(MainCard)`
    background-color: #ff0000;
        &:hover{
        background-color:rgb(163, 0, 0);
    }
`;

export const FlexDiv = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    align-items: center;
`

export const DoubleCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
`