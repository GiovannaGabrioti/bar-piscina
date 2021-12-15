import React, { Component } from 'react';
import MenuHamburguer from '../MenuHamburguer/menu-hamburguer'
import './header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);



  }

  render() {

    let {
        classNameProps,
    } = this.props

    return (
        <header className={classNameProps}>
            <MenuHamburguer/>
        </header>
    );
  }
}