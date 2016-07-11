import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as paymentActions from '../../actions/paymentActions';

import HeaderInner from '../../components/header-inner/heder-inner';
import Panel from '../../components/panel/panel';
import VisaForm from '../../components/visaForm/visaForm';
import PaymentInfo from '../../components/paymentInfo/paymentInfo';

const TITLE = 'Пополнение';
const TITLE_1 = 'VISA';
const TITLE_2 = 'Условия пополнения';

class PageVisa extends React.Component {
  onFormSubmit(form) {
    this.props.paymentActions.saveForm(form)
    browserHistory.push('/summary')
  }

  render() {
    const { payment } = this.props;
    const { setCurrency } = this.props.paymentActions;

    return (
      <div>
        <HeaderInner title={TITLE} />
        <Panel title={TITLE_1}>
          <VisaForm onSubmit={this.onFormSubmit.bind(this)} onCurrencyChange={setCurrency}/>
        </Panel>
        <Panel type='info' title={TITLE_2}>
          <PaymentInfo currency={payment.currency} />
        </Panel>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    payment: state.payment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    paymentActions: bindActionCreators(paymentActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageVisa)
