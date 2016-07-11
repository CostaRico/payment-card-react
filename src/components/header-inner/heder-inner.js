import React from 'react';
import { browserHistory } from 'react-router'

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
