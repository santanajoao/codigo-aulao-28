import React, { Component } from 'react';
import '../styles/LabelAndInput.css';

export default class LabelAndInput extends Component {
  render() {
    const {
      labelText, identifier, type, value, onChange, checked,
    } = this.props;
    return (
      <label htmlFor={`${identifier}-input`}>
        {labelText}
        <input
          checked={checked}
          value={value}
          type={type}
          id={`${identifier}-input`}
          onChange={onChange}
          name={identifier}
        />
      </label>
    );
  }
}
