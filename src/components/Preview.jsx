import React, { Component } from 'react'
import '../styles/Preview.css';

export default class Preview extends Component {
  render() {
    const { name, photo, personal, plan } = this.props;
    const acompanhamento = personal ? 'Sim' : 'Não';
    return (
      <div className="Preview">
        <img src={photo} alt="Imagem do cliente" />
        <p>{ `Nome: ${name}` }</p>
        <p>{ `Acompanhamento de personal: ${acompanhamento}` }</p>
        <p>{ `Plano: ${plan}` }</p>
      </div>
    );
  }
}
