<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 553746b80743bf67fd7291e40cdc0369434bb5ef
// import React from "react";
// import styled from 'styled-components';

// const InputContainer = styled.div `
// width: 100vw;
// `

// const dadosMensagem = [
//     {
//     usuario: "",
//     mensagem: ""
//     }
//   ]

// export class Inputs extends React.Component {
//     state = {
//         dadosMensagem: dadosMensagem
//     }

//     addMensagem = (NMensagem) => {
//         const novaMensagem = [...this.state.dadosMensagem, NMensagem]

//         this.setState({dadosMensagem: novaMensagem})
//     }

//     onChangeMensagem = (event) => {
//         this.setState({
//             usuario: event.target.value,
//             mensagem: event.target.value
//         })
//     }



// render() {
//     return (
//         <InputContainer>
//         <input
//         placeholder={"Usuário"}
//         value={this.state.usuario}
//         onChange={this.onChangeMensagem}
//         />

//         <input
//           placeholder={"Mensagem"}
//           value={this.state.mensagem}
//           onChange={this.onChangeMensagem}
//         />

//         <button onClick={this.addMensagem}>Enviar</button>
//         </InputContainer>
//         )
//     }
// }

<<<<<<< HEAD
// export default Inputs;
=======
import React from "react";
import styled from 'styled-components';



const ContainerInput = styled.div `
display: flex;
justify-content: left;
align-items: flex-end;
height: 20px;
padding: 10px;
margin: 20px;
gap: 8px;
`

const Input = styled.input`
height: 20px;

`

const Button = styled.button`
height: 28px;   
width: 100px;
background-color: #006400;
color: white;
border-radius: 4px;
&:hover {
background-color: #005000;
cursor: pointer;
}
`

export class Inputs extends React.Component {
    state = {
        nome:  "",
        mensagem: ""
    }

alterarNome = (event) => {
    this.setState({nome: event.target.value});
}

novaMensagem = (event) => {
    this.setState({mensagem: event.target.value});
}

onClickEnviar = () => {
    this.setState({
        nome: "",
        mensagem: ""
    })
}

render () {
    return (
        <ContainerInput>
        <Input 
        placeholder="Usuário"
        value={this.state.nome} 
        onChange={this.alterarNome} 
        />
        <Input 
        placeholder="Digite sua mensagem"
        value={this.state.mensagem}
        onChange={this.novaMensagem} 
        />
        <Button onClick={this.onClickEnviar}> Enviar </Button>
        </ContainerInput>
        )
    }
}


export default Inputs;
>>>>>>> master
=======
// export default Inputs;
>>>>>>> 553746b80743bf67fd7291e40cdc0369434bb5ef
