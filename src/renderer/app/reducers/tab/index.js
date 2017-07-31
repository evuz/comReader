import { SET_TAB_SELECTED } from './actionTypes';

export * from './actions';

const initialState = {
  tabs: [],
  tabSelected: 0,
};

function tab(state = initialState, action) {
  switch (action.type) {
    case SET_TAB_SELECTED:
      return Object.assign({}, state, { tabSelected: action.tabIndex });
    default:
      return state;
  }
}

export default tab;
