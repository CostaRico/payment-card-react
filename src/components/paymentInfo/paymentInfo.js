// Где конкретно здесь добавлен redux? Где импорт action-creator'ов и работа со store?
// Зачем здесь нужен класс, если достаточно stateless component
// Кажется, чел не умеет работать с редакс
import React from 'react';
// Вынести в файл с константами
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
