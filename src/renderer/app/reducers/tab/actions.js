import { NEW_TAB, REMOVE_TAB, SET_TAB_SELECTED } from './actionTypes';

export function newTab(tab) {
  return {
    type: NEW_TAB,
    newTab: tab,
  };
}

export function removeTab(tabIndex) {
  return {
    type: REMOVE_TAB,
    tabIndex,
  };
}

export function setTabSelected(tabIndex) {
  return {
    type: SET_TAB_SELECTED,
    tabIndex,
  };
}
