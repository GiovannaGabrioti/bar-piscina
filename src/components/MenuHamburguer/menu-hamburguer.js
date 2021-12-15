import React, { Component } from 'react';
import './menu-hamburguer.scss';

export default class MenuHamburguer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        menuList: [
            {
                "text": 'Faça seu pedido',
                "link": "/login"
            },
            {
                "text": 'Cardápio',
                "link": "/login-1"
            }]
    }

  }

  render() {

    let {
        menuList,
    } = this.state

    console.log(menuList)

    return (
        <div className="hambuguer-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
                    <span></span>
                </label>
            <ul className="menu__box">
                { menuList.map(index => {
                    return <li className="menu__item"><a className="menu__item1" href={index.link}>{index.text}</a></li>
                })
                }
            </ul>
        </div>
    );
  }
}