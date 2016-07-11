import React from 'react';
import { connect } from 'react-redux'
import HeaderInner from '../../components/header-inner/heder-inner';

const TITLE = 'VISA'

class PageSummary extends React.Component {
  render() {
    const { visa } = this.props.payment

    return (
        <div>
          <HeaderInner title={TITLE} />
          <div className='table-info'>
            <div className='table-info__row'>
              <div className='table-info__th'>Валюта:</div>
              <div className='table-info__td'>{visa.currency}</div>
            </div>
            <div className='table-info__row'>
              <div className='table-info__th'>Сумма:</div>
              <div className='table-info__td'>{visa.amount}</div>
            </div>
            <div className='table-info__row'>
              <div className='table-info__th'>Номер карты:</div>
              <div className='table-info__td'>{visa.cardNumber}</div>
            </div>
            <div className='table-info__row'>
              <div className='table-info__th'>Имя:</div>
              <div className='table-info__td'>{visa.firstName}</div>
            </div>
            <div className='table-info__row'>
              <div className='table-info__th'>Фамилия:</div>
              <div className='table-info__td'>{visa.lastName}</div>
            </div>
            <div className='table-info__row'>
              <div className='table-info__th'>Дата окончания:</div>
              <div className='table-info__td'>{visa.month} {visa.year}</div>
            </div>
            <div className='table-info__row'>
              <div className='table-info__th'>CVV2:</div>
              <div className='table-info__td'>{visa.cvv}</div>
            </div>
            <div className='table-info__row'>
              <div className='table-info__th'>Бонусный код:</div>
              <div className='table-info__td'>{visa.code}</div>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    payment: state.payment
  }
}

export default connect(mapStateToProps)(PageSummary)
