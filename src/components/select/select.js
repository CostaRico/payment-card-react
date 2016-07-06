import React from 'react';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someText: 'blablabla'
    }
  }
  render() {
    return (
        <div className="field-select">
          <div className="field-select__btn"></div>
          { this.props.children }
        </div>
    )
  }
}
