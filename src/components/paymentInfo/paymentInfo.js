import React from 'react';

const INFO = {
  RUR: {
    min: 50,
    max: 100000,
    commission: 'отсутствует',
    time: 'моментально'
  },
  USD: {
    min: 10,
    max: 10000,
    commission: 'отсутствует',
    time: 'моментально'
  }
};

export default class PaymentInfo extends React.Component {
  render() {
    const {currency} = this.props;
    return (
        <div className='table-info'>
          <div className='table-info__row'>
            <div className='table-info__th'>Минимальная сумма ({currency})</div>
            <div className='table-info__td'>{INFO[currency].min}</div>
          </div>
          <div className='table-info__row'>
            <div className='table-info__th'>Максимальная сумма ({currency})</div>
            <div className='table-info__td'>{INFO[currency].max}</div>
          </div>
          <div className='table-info__row'>
            <div className='table-info__th'>Комиссия за платеж</div>
            <div className='table-info__td'>{INFO[currency].commission}</div>
          </div>
          <div className='table-info__row'>
            <div className='table-info__th'>Вермя зачисления</div>
            <div className='table-info__td'>{INFO[currency].time}</div>
          </div>
        </div>
    )
  }
}
