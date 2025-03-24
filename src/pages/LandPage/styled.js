import styled from 'styled-components'
import clicker_happy from '../../img/clicker_happy.png';

export const BackgroundImage = styled.body`
    background-image: url(${clicker_happy});
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    gap: 10%
`

export const Title = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
    -webkit-text-stroke: 2px white;
`

export const BotaoJogar = styled.div`

    width: 10vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: xx-large;
    background-color: rgba(0,0,0, 0.7);
    border: 2px solid white;
    color: white;
`