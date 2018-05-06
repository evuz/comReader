import { SET_THEME_PROP, SET_DEFAULT_THEME } from './actionTypes';

const initialState = {
  primaryColor: '#1e1e1e',
  controlNavColor: '#dd403a',
  lateralNavColor: '#333333',
};

function theme(state = initialState, { type, payload }) {
  switch (type) {
    case SET_DEFAULT_THEME:
      return initialState;
    case SET_THEME_PROP:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}

export default theme;
