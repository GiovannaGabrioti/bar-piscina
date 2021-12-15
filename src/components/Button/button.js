import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);



  }

  render() {

    let {
      buttonText,
    } = this.props

    return (
      <button className="button-style"><span className="text-button">{buttonText}</span></button>
    );
  }
}