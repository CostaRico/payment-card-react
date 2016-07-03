import React from 'react';
import HeaderInner from '../../components/header-inner/heder-inner';
import Panel from '../../components/panel/panel';

export default class PageVisa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: 'Пополнение'
    }
  }

  render() {
    return (
        <div>
          <HeaderInner title={this.state.pageTitle} />
          <Panel title="VISA">visa</Panel>
        </div>
    )
  }
}
