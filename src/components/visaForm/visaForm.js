import React, {PropTypes} from 'react'
import Select from '../../components/select/select'
import {reduxForm} from 'redux-form'

const FIELDS = ['currency', 'amount', 'cardNumber', 'firstName', 'lastName', 'month', 'year', 'cvv', 'code']
const MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const YEARS = [2016, 2017, 2018, 2019, 2020, 2021, 2022];

const Conditions = {
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

const validate = values => {
  const errors = {}

  if (!values.currency) {
    errors.currency = 'Это поле бязателно'
  }

  if (!values.amount) {
    errors.amount = 'Это поле бязателно'
  } else if (parseInt(values.amount) > Conditions[values.currency].max) {
    errors.amount = 'Значение больше допустимого'
  } else if (parseInt(values.amount) < Conditions[values.currency].min) {
    errors.amount = 'Значение меньше допустимого'
  }

  if (!values.cardNumber) {
    errors.cardNumber = 'Это поле бязателно'
  }

  if (!values.firstName) {
    errors.firstName = 'Это поле бязателно'
  }

  if (!values.lastName) {
    errors.lastName = 'Это поле бязателно'
  }

  if (!values.month) {
    errors.month = 'Это поле бязателно'
  }

  if (!values.year) {
    errors.year = 'Это поле бязателно'
  }

  if (!values.cvv) {
    errors.cvv = 'Это поле бязателно'
  }

  return errors
}

class VisaForm extends React.Component {
  render() {
    const {
        fields: {currency, amount, cardNumber, firstName, lastName, month, year, cvv, code},
        handleSubmit,
        onCurrencyChange,
        } = this.props

    return (
        <form className='form' onSubmit={handleSubmit}>
          <div className='form__row'>
            <div className='form__item'>
              <div className='field-item'>
                <label className='field-item__label'>Валюта:</label>
                <Select>
                  <select {...currency}  onChange={event => {
                    currency.onChange(event)
                    onCurrencyChange(event.target.value)
                    }}>
                    <option></option>
                    <option>RUR</option>
                    <option>USD</option>
                  </select>
                </Select>
                {currency.touched && currency.error && <div className="field-item__error">{currency.error}</div>}
              </div>
            </div>
            <div className='form__item'>
              <div className='field-item'>
                <label className='field-item__label'>Сумма</label>
                <input type='text' className='field-input' {...amount}/>
                {amount.touched && amount.error && <div className="field-item__error">{amount.error}</div>}
              </div>
            </div>
          </div>
          <div className='form__row'>
            <div className='form__item'>
              <div className='field-item'>
                <label className='field-item__label'>Номер карты (без пробелов)</label>
                <input type='text' className='field-input' maxLength={16} {...cardNumber}/>
                {cardNumber.touched && cardNumber.error && <div className="field-item__error">{cardNumber.error}</div>}
              </div>
            </div>
          </div>
          <div className='form__row'>
            <div className='form__item form__item--half'>
              <div className='field-item'>
                <label className='field-item__label'>Имя (как на карте)</label>
                <input type='text' className='field-input' {...firstName}/>
                {firstName.touched && firstName.error && <div className="field-item__error">{firstName.error}</div>}
              </div>
            </div>
            <div className='form__item form__item--half'>
              <div className='field-item'>
                <label className='field-item__label'>Фамилия (как на карте)</label>
                <input type='text' className='field-input' {...lastName}/>
                {lastName.touched && lastName.error && <div className="field-item__error">{lastName.error}</div>}
              </div>
            </div>
          </div>
          <div className='form__row'>
            <div className='form__item form__item--half'>
              <div className='field-item'>
                <label className='field-item__label'>Дата окончания</label>
                <Select>
                  <select {...month}>
                    <option></option>
                    {MONTHS.map((month, key) => <option key={key}>{month}</option>)}
                  </select>
                </Select>
                {month.touched && month.error && <div className="field-item__error">{month.error}</div>}
              </div>
            </div>
            <div className='form__item form__item--half'>
              <div className='field-item'>
                <Select>
                  <select {...year}>
                    <option></option>
                    {YEARS.map((year, key) => <option key={key}>{year}</option>)}
                  </select>
                </Select>
                {year.touched && year.error && <div className="field-item__error">{year.error}</div>}
              </div>
            </div>
          </div>
          <div className='form__row'>
            <div className='form__item form__item--half'>
              <div className='field-item'>
                <label className='field-item__label'>CVV2 / Защитный код:</label>
                <input type='text' className='field-input' maxLength={3} {...cvv}/>
                {cvv.touched && cvv.error && <div className="field-item__error">{cvv.error}</div>}
              </div>
            </div>
            <div className='form__item form__item--half'>
              <div className='field-item'>
                <label className='field-item__label'>Бонусный код:</label>
                <input type='text' className='field-input' maxLength={8} {...code}/>
              </div>
            </div>
          </div>
          <div className='form__row'>
            <div className='hint hint--list'>
              Ваш CVV2 - номер это три последнии цифры на обороте вашей карты.
            </div>
          </div>
          <div className='form__row'>
            <div className='form__item'>
              {currency.value && <div className='resume'><span>Сумма депозита ({currency.value}):</span> <span>{amount.value}</span></div>}
            </div>
          </div>
          <div className='form__actions'>
            <button onClick={handleSubmit.bind(this)} className='btn btn--submit'>
              Подтвердить
            </button>
          </div>
        </form>
    )
  }
}

VisaForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'visa',
  fields: FIELDS,
  validate
})(VisaForm)
