// Где PropTypes? 

import React from 'react';

export default class Panel extends React.Component {
  // Зачем здесь конструктор с учетом нижестоящего коментария?
  constructor(props) {
    super(props);
    // Кто научил задавать стейт в конструкторе? ComponentWillMount отменили?
    this.state = {
      isOpen: this.props.open
    }
  }

  togglePanel() {
    // val по ходу исполнения функции никогда не переопределяется. Почему не const?
    var val = !this.state.isOpen;

    this.setState({
      isOpen: val
    });
  }
  getHeadLine() {
    if (this.props.type === 'info') {
      return (
          // Если определить togglePanel через arrow function, можно каждый раз не биндить контекст, улучшив производительность
          <div className="panel__headline" onClick={ this.togglePanel.bind(this) }>
            <div className="panel__headline-icon">
              <div className="icon icon__help-circled"></div>
            </div>
            <div className="panel__headline-title">{ this.props.title }</div>
            <div className="panel__headline-caret">
              <div className="icon icon__angle-down"></div>
            </div>
          </div>
      )
    } else {
      return (
          <div className="panel__headline" onClick={ this.togglePanel.bind(this) }>
            <div className="panel__headline-title">{ this.props.title }</div>
            <div className="panel__headline-caret">
              <div className="icon icon__down-dir"></div>
            </div>
          </div>
      )
    }
  }
  render() {
    return (
        // Почему не вынести склейку классов в функцию? Неочевидно
        <div className={'panel ' + (this.state.isOpen ? 'panel--open' : '') + (this.props.type === 'info' ? ' panel--info' : '')}>
          { this.getHeadLine() }

          <div className='panel__body'>
            { this.props.children }
          </div>
        </div>
    )
  }
}
