import React from 'react';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.open
    }
  }

  togglePanel() {
    var val = !this.state.isOpen;

    this.setState({
      isOpen: val
    });
  }
  getHeadLine() {
    if (this.props.type === 'info') {
      return (
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
        <div className={'panel ' + (this.state.isOpen ? 'panel--open' : '') + (this.props.type === 'info' ? ' panel--info' : '')}>
          { this.getHeadLine() }

          <div className='panel__body'>
            { this.props.children }
          </div>
        </div>
    )
  }
}
