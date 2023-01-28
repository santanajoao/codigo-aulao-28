import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
import Preview from './Preview';
import '../styles/FormAndPreview.css';

export default class FormAndPreview extends Component {
  render() {
    const { onChange, appState, onClick } = this.props;
    return (
      <div className="FormAndPreview">
        <Title>Cadastro Trybe Fit</Title>
        <div className="FormAndPreview__container">
          <Form onChange={onChange} {...appState} onClick={onClick}/>
          <Preview {...appState} />
        </div>
      </div>
    );
  }
}
