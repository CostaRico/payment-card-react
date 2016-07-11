import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import Payment from './payment';
import normalizerNumber from '../normalizers/normalizerNumber';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  payment: Payment,
  routing: routerReducer,
  form: formReducer.normalize({
    visa: {
      firstName: value => value && value.toUpperCase(),
      lastName: value => value && value.toUpperCase(),
      amount: normalizerNumber,
      cardNumber: normalizerNumber,
      cvv: normalizerNumber
    }
  })
})