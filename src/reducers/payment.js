const initialState = {
  currency: 'RUR'
}
export default function Payment(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload }
    case 'SAVE_FORM':
      return { ...state, visa: action.payload }
    default:
      return state;
  }
}