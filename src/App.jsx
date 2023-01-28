import React, { Component } from 'react';
import ClientList from './components/ClientList';
import FormAndPreview from './components/FormAndPreview';
import './styles/App.css';

const INITIAL_STATE = {
  name: '',
  age: '',
  photo: '',
  phone: '',
  plan: '2x na semana',
  notes: '',
  personal: false,
};

export default class App extends Component {
  state = {
    ...INITIAL_STATE,
    clientList: [],
  };

  handleInputChange = ({ target }) => {
    const { name, type } = target;
    const newValue = (type === 'checkbox' ? target.checked : target.value);
    this.setState({
      [name]: newValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      const {
        name, age, photo, phone, plan, notes, personal, clientList,
      } = prevState;

      const newClient = { name, age, photo, phone, plan, notes, personal };

      return { clientList: [...clientList, newClient] };
    }, () => this.setState({ ...INITIAL_STATE }));
  };

  render() {
    const { clientList } = this.state;
    return (
      <div className="App">
        <FormAndPreview
          onSubmit={ this.handleSubmit }
          handleChange={ this.handleInputChange }
          state={ this.state }
        />
        <ClientList
          clientList={ clientList }
        />
      </div>
    );
  }
}
