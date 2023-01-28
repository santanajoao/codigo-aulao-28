import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/LabelAndInput.css';

export default class LabelAndInput extends Component {
  render() {
    const { identifier, labelText, onChange, type, value } = this.props;
    return (
      <label htmlFor={ `${identifier}-input` } className="LabelAndInput__label">
        {labelText}
        <input
          value={ value }
          type={ type }
          onChange={ onChange }
          name={ identifier }
          id={ `${identifier}-input` }
          className="LabelAndInput__input"
        />
      </label>
    );
  }
}

LabelAndInput.propTypes = {
  identifier: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
