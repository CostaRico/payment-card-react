// Аккуратность – 1 претензия
// React-stack - 1 претензия
// Зачем создавать класс, если можно использовать `stateless component`? Пример ниже
/**
 * Пример
 export default function HeaderInner(props) {
   function goBack() {
    browserHistory.goBack();
  }
  
   return (
        <div className="header-inner">
          <div className="header-inner__back">
            <div onClick={goBack}>
              <div className="icon icon__left-open"></div>
            </div>
          </div>
          <div className="header-inner__title">
            {props.title}
          </div>
          <div className="header-inner__close">
            <div onClick={goBack}>
              <div className="icon icon__cancel"></div>
            </div>
          </div>
        </div>
    );
 }
*/

import React from 'react';
import { browserHistory } from 'react-router'

// Почему компонент HeaderInner находтся в дирректории `header-inner`? Кто учил так называть папки 
export default class HeaderInner extends React.Component {
  goBack() {
    browserHistory.goBack();
  }
  render() {
    return (
        <div className="header-inner">
          <div className="header-inner__back">
            <div onClick={this.goBack}>
              <div className="icon icon__left-open"></div>
            </div>
          </div>
          <div className="header-inner__title">
            // Где определение типа данных для поля `title`? Почему не используются `PropTypes`
            {this.props.title}
          </div>
          <div className="header-inner__close">
            <div onClick={this.goBack}>
              <div className="icon icon__cancel"></div>
            </div>
          </div>
        </div>
    )
  }
}
