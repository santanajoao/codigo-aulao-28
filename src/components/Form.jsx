import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelAndInput from './LabelAndInput';
import '../styles/Form.css';

export default class Form extends Component {
  makeValidations = () => {
    const { parentState } = this.props;
    const { name, age, photo, phone, notes } = parentState;
    const MIN_AGE = 11;
    const MAX_AGE = 125;
    const PHONE_LENGTH = 9;

    const validName = /\w{2,} \w{2,}/.test(name);
    const validAge = (age <= MAX_AGE && age >= MIN_AGE);
    const validPhoto = photo !== '';
    const validPhone = phone.length === PHONE_LENGTH;
    const validNotes = notes !== '';

    return !(validName && validAge && validPhoto && validPhone && validNotes);
  };

  render() {
    const { parentState, onChange, onSubmit } = this.props;
    return (
      <form onSubmit={ onSubmit } className="Form">
        <LabelAndInput
          value={ parentState.name }
          type="text"
          onChange={ onChange }
          labelText="Nome:"
          identifier="name"
        />

        <LabelAndInput
          value={ parentState.photo }
          type="text"
          onChange={ onChange }
          labelText="Foto:"
          identifier="photo"
        />

        <div className="row">
          <LabelAndInput
            value={ parentState.age }
            type="number"
            onChange={ onChange }
            labelText="Idade:"
            identifier="age"
          />

          <LabelAndInput
            value={ parentState.phone }
            type="tel"
            onChange={ onChange }
            labelText="Telefone:"
            identifier="phone"
          />

          <label htmlFor="plan-input" className="input-label">
            Plano:
            <select
              value={ parentState.plan }
              onChange={ onChange }
              name="plan"
              id="plan-input"
            >
              <option value="2x na semana">2x na semana</option>
              <option value="3x na semana">3x na semana</option>
              <option value="5x na semana">5x na semana</option>
            </select>
          </label>
        </div>

        <label htmlFor="notes-input" className="input-label">
          Observações:
          <textarea
            value={ parentState.notes }
            onChange={ onChange }
            name="notes"
            id="notes-input"
          />
        </label>

        <div className="row">
          <label htmlFor="personal-input" className="personal-input-label">
            <input
              type="checkbox"
              onChange={ onChange }
              name="personal"
              id="personal-input"
              checked={ parentState.personal }
            />
            Acompanhamento de Personal
          </label>
          <button
            type="submit"
            disabled={ this.makeValidations() }
            className="register-btn"
          >
            Cadastrar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  parentState: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    personal: PropTypes.bool.isRequired,
    notes: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
