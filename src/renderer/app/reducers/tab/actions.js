import { SET_TAB_SELECTED } from './actionTypes';

export function setTabSelected(tabIndex) {
  return {
    type: SET_TAB_SELECTED,
    tabIndex,
  };
}
