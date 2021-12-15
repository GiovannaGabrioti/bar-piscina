import React, { Component } from 'react';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import './login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  
  render() {

    return (
      <div className="content-login">
          <div className="content-inputs">
            <Input inputType="text" inputLabel="Nome" inputPlaceholder="Name"/>
            <Input inputType="text" inputLabel="Telefone" inputPlaceholder="Telefone"/>
            <Input inputType="number" inputLabel="Apartamento" inputPlaceholder="Apartamento"/>
            <Input inputType="text" inputLabel="Bloco" inputPlaceholder="Bloco"/>
            <div className="button-login">
              <Button buttonText="Acessar"/>
            </div>
          </div>
      </div>
    );
  
  }
}
