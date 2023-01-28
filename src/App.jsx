import React, { Component } from 'react';
import FormAndPreview from './components/FormAndPreview';
import ClientList from './components/ClientList';
import './styles/App.css';

export default class App extends Component {
  state = {
    name: '',
    photo: '',
    personal: false,
    plan: '2x na semana',
    clients: [],
    isBtnDisabled: true,
  };

  validateFields = () => {
    this.setState((state) => {
      const { name, photo } = state;
      const isNameValid = /\w \w/.test(name);
      const isPhotoValid = photo.length !== 0;

      return {
        isBtnDisabled: !(isNameValid && isPhotoValid),
      };
    });
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? target.checked : target.value,
    }, this.validateFields);
  };

  handleClick = () => {
    this.setState((state) => {
      const { name, photo, personal, plan, clients } = state;
      const client = { name, photo, personal, plan };
      return { clients: [...clients, client] };
    });
  };

  render() {
    const { clients } = this.state;
    return (
      <div className="App">
        <FormAndPreview
          appState={ this.state }
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <ClientList clients={clients} />
      </div>
    );
  }
}
