import { NEW_TAB, REMOVE_TAB, SET_TAB_SELECTED, CHANGE_TAB } from './actionTypes';

export * from './actions';

const initialState = {
  tabs: [],
  tabSelected: 0,
};

function tab(state = initialState, action) {
  switch (action.type) {
    case SET_TAB_SELECTED:
      return Object.assign({}, state, { tabSelected: action.tabIndex });
    case NEW_TAB:
      return Object.assign({}, state, { tabs: state.tabs.concat([action.newTab]) });
    case REMOVE_TAB:
      return Object.assign({}, state, { tabs: state.tabs.filter((e, i) => i !== action.tabIndex) });
    case CHANGE_TAB:
      return Object.assign({}, state, {
        tabs: state.tabs.map((e, i) => {
          if (i === action.tabSelected) {
            return action.tab;
          }
          return e;
        }),
      });
    default:
      return state;
  }
}

export default tab;
