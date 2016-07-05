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
