import { NEW_TAB, REMOVE_TAB, SET_TAB_SELECTED, CHANGE_TAB } from './actionTypes';

const tabDefault = { title: 'Blank' };

export function newTab(tab = tabDefault) {
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

export function changeTab(tab, tabSelected) {
  return {
    type: CHANGE_TAB,
    tab,
    tabSelected,
  };
}

export function setTabSelected(tabIndex) {
  return {
    type: SET_TAB_SELECTED,
    tabIndex,
  };
}
