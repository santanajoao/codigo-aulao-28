import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Form from './Form';
import Preview from './Preview';
import '../styles/FormAndPreview.css';

export default class FormAndPreview extends Component {
  render() {
    const { onSubmit, handleChange, state } = this.props;
    return (
      <section className="FormAndPreview">
        <Title>Cadastro Trybe Fit</Title>
        <div className="FormAndPreview__container">
          <Form
            onSubmit={ onSubmit }
            onChange={ handleChange }
            parentState={ state }
          />
          <Preview clientInfos={ state } />
        </div>
      </section>
    );
  }
}

FormAndPreview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.shape({}).isRequired,
};
