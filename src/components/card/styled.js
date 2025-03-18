import styled from 'styled-components';

export const CardTemplate = styled.div`
    width: 200px;
    height: 200px;
    background-color: #00ff00;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover{
        width: 210px;
        height: 210px;
        margin: 5px 10px;
        background-color:rgb(0, 211, 0);
    }
`;