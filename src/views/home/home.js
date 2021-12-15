import React, { Component } from 'react';
import Header from '../../components/Header/header';
import './home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);



  }

  render() {
    return (
      <div className="content">
        <Header classNameProps="menu"/>
        <div>Teste</div>
      </div>
      
    );
  }
}