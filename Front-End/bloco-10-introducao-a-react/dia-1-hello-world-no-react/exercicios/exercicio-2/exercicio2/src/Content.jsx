import React, {Component} from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
 render() {
   return (
    ulFeita
   )
 }
}
const ulFeita = conteudos.map((elem, index) => {
  return <ul key ={index}>
  <li>O conteúdo é: {elem.conteudo}</li>
  <li>Status: {elem.status}</li> 
  <li>Bloco: {elem.bloco}</li> 
  </ul>
   })

export default Content;