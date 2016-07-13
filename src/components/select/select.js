// Безсмысленный компонент
// Если нужен селект, почему обработчик опций не использовать?
// Если не знает, как написать, почему не использовал готовый?
// Где PropTypes? 
// Почему не stateless component

import React from 'react';

export default class Select extends React.Component {
  render() {
    return (
        <div className="field-select">
          <div className="field-select__btn"></div>
          { this.props.children }
        </div>
    )
  }
}
