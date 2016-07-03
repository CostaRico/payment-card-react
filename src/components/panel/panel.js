import React from 'react';

export default class Panel extends React.Component {
  render() {
    return (
        <div className="panel">
          <div className="panel__headline">
            <div className="panel__headline-title">{this.props.title}</div>
            <div className="panel__headline-caret"></div>
          </div>
          <div className="panel__body">
            { this.props.children }
          </div>
        </div>
    )
  }
}
