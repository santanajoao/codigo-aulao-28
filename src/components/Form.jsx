import React, { Component } from 'react';
import LabelAndInput from './LabelAndInput';
import '../styles/Form.css';

export default class Form extends Component {  
  
  render() {
    const {
      photo, name, personal, onChange, plan, onClick, isBtnDisabled,
    } = this.props;
    return (
      <form className="Form">
        <LabelAndInput
          value={name}
          type="text"
          onChange={onChange}
          labelText="Nome:"
          identifier="name"
        />

        <LabelAndInput
          value={photo}
          type="text"
          labelText="Foto:"
          onChange={onChange}
          identifier="photo"
        />

        <LabelAndInput
          checked={personal}
          type="checkbox"
          labelText="Acompanhamento de personal"
          onChange={onChange}
          identifier="personal"
        />

        <label htmlFor="plan-input">
          Plano
          <select value={plan} onChange={onChange} name="plan" id="plan-input">
            <option value="2x na semana">2x na semana</option>
            <option value="3x na semana">3x na semana</option>
            <option value="5x na semana">5x na semana</option>
          </select>
        </label>

        <button type="button" onClick={onClick} disabled={isBtnDisabled}>
          Cadastrar
        </button>
      </form>
    );
  }
}
