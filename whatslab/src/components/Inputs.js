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

// export default Inputs;