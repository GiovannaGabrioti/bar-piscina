import React, { Component } from 'react';
import './input.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
    }

  }

  render() {

    let {
        inputType,
        inputPlaceholder,
        inputLabel
    } = this.props;

    return (
      <div className="form__group field">
        <input className="form__field" type={inputType} placeholder={inputPlaceholder}></input>
        <label for="name" className="form__label">{inputLabel}</label>
      </div>
    );
  }
}