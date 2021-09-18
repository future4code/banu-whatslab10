import React from "react";
import styled from "styled-components";

const ContainerMensagem = styled.div `
width: 50vw;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
border: 1px solid black; 
margin-left: 25vw;
margin-top: 20px;
`
export class Mensagens extends React.Component {
    render() {
        return (
            <ContainerMensagem>
            </ContainerMensagem>
        )
    }
}
