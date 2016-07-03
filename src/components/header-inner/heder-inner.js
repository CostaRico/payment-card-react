import React from 'react';
import { Link } from 'react-router';

export default class HeaderInner extends React.Component {
  render() {
    return (
        <div className="header-inner">
          <div className="header-inner__back">
            <Link to="/">Back</Link>
          </div>
          <div className="header-inner__title">
            {this.props.title}
          </div>
          <div className="header-inner__close">
            <Link to="/">Back</Link>
          </div>
        </div>
    )
  }
}
