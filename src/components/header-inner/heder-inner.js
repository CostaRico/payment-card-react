import React from 'react';
import { Link } from 'react-router';

export default class HeaderInner extends React.Component {
  render() {
    return (
        <div className="header-inner">
          <div className="header-inner__back">
            <Link to="/">
              <div className="icon icon__left-open"></div>
            </Link>
          </div>
          <div className="header-inner__title">
            {this.props.title}
          </div>
          <div className="header-inner__close">
            <Link to="/">
              <div className="icon icon__cancel"></div>
            </Link>
          </div>
        </div>
    )
  }
}
