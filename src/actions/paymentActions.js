export function setCurrency(currency) {
  return {
    type: 'SET_CURRENCY',
    payload: currency
  }
}

export function saveForm(form) {
  return {
    type: 'SAVE_FORM',
    payload: form
  }
}