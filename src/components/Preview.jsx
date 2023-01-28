import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Preview.css';

export default class Preview extends Component {
  render() {
    const { clientInfos } = this.props;
    return (
      <div className="Preview">
        <img
          src={ clientInfos.photo }
          className="Preview__img"
          alt="Foto do cliente"
        />
        <dl className="infos-list">
          <dt>Nome:</dt>
          <dd>{clientInfos.name}</dd>

          <dt>Idade:</dt>
          <dd>{clientInfos.age}</dd>

          <dt>Telefone:</dt>
          <dd>{clientInfos.phone}</dd>

          <dt>Observações:</dt>
          <dd>{clientInfos.notes}</dd>

          <dt>Plano:</dt>
          <dd>{clientInfos.plan}</dd>

          <dt>Acompanhamento de personal:</dt>
          <dd>{clientInfos.personal ? 'Sim' : 'Não'}</dd>
        </dl>
      </div>
    );
  }
}

Preview.propTypes = {
  clientInfos: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    personal: PropTypes.bool.isRequired,
  }).isRequired,
};
