import React, { Component } from 'react';
import Title from './Title';
import Preview from './Preview';
import '../styles/ClientList.css';

export default class ClientList extends Component {
  render() {
    const { clients } = this.props;
    return (
      <div className="ClientList">
        <Title>Clientes Cadastrados</Title>
        { clients.length === 0 ? (
          <h2>Você ainda não cadastrou nenhum cliente</h2>
        ) : (
          <ul className="ClientList__list">
            { clients.map((client) => (
              <li>
                <Preview {...client} />
              </li>
            )) }
          </ul>
        ) }
      </div>
    );
  }
}
