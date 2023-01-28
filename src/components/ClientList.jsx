import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Title from './Title';
import '../styles/ClientList.css';

export default class ClientList extends Component {
  render() {
    const { clientList } = this.props;
    return (
      <section className="ClientList">
        <Title>Clientes Cadastrados</Title>
        { clientList.length === 0 ? (
          <h2>Você ainda não cadastrou nenhum cliente</h2>
        ) : (
          <ul className="ClientList__list">
            { clientList.map((clientInfos, index) => (
              <Preview key={ index } clientInfos={ clientInfos } />
            )) }
          </ul>
        ) }
      </section>
    );
  }
}

ClientList.propTypes = {
  clientList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
