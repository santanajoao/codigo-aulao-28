import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Title.css';

export default class Title extends Component {
  render() {
    const { children } = this.props;
    return (
      <h1 className="Title">{ children }</h1>
    );
  }
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
