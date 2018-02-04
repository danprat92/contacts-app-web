/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  SEARCH_VALUE_CHANGED,
  DETAIL_STATE_CHANGED,
  CURRENT_DETAIL_CONTACT_CHANGED,
  ITEMS_CHANGED,
  ITEMS_RELOAD,
  FIRST_LOAD_ACTIVE,
  LOAD_TRIGGERED,
  ITEMS_COUNT_CHANGED,
  PAGE_CHANGED,
  LOADING_CONTACTS,
  TARGET_BODY_HEIGHT,
} from './constants';

/**
 * Default action
 * @return {Object} Object to pass to redux
 */
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
/**
 * Action triggered to change the searchValue
 * @param  {String} newValue New search value
 * @return {Object}          Object to pass to redux
 */
export function searchValueChanged(newValue) {
  return {
    type: SEARCH_VALUE_CHANGED,
    payload: newValue,
  };
}
/**
 * Action triggered to change the detailState
 * @param  {String} newValue New state value
 * @return {Object}          Object to pass to redux
 */
export function detailStateChanged(newValue) {
  return {
    type: DETAIL_STATE_CHANGED,
    payload: newValue,
  };
}
/**
 * Action triggered to change the currentDetailContact
 * @param  {String} newValue New state value
 * @return {Object}          Object to pass to redux
 */
export function currentDetailContactStateChanged(newValue) {
  return {
    type: CURRENT_DETAIL_CONTACT_CHANGED,
    payload: newValue,
  };
}
/**
 * Action triggered to change the itemsChanged
 * @param  {String} newValue New state value
 * @return {Object}          Object to pass to redux
 */
export function itemsChanged(newValue) {
  return {
    type: ITEMS_CHANGED,
    payload: newValue,
  };
}
/**
 * Action triggered to change the itemsReload
 * @param  {String} newValue New state value
 * @return {Object}          Object to pass to redux
 */
export function itemsReload(newValue) {
  return {
    type: ITEMS_RELOAD,
    payload: newValue,
  };
}
/**
 * Action triggered to change the firstLoad
 * @param  {String} newValue New state value
 * @return {Object}          Object to pass to redux
 */
export function firstLoadActiveChanged(newValue) {
  return {
    type: FIRST_LOAD_ACTIVE,
    payload: newValue,
  };
}
/**
 * Action triggered to change the itemsCounts
 * @param  {String} newValue New state value
 * @return {Object}          Object to pass to redux
 */
export function itemsCountChanged(newValue) {
  return {
    type: ITEMS_COUNT_CHANGED,
    payload: newValue,
  };
}
/**
 * Action triggered to change the itemsCounts
 * @param  {String} newValue New state value
 * @return {Object}          Object to pass to redux
 */
export function pageChanged(newValue) {
  return {
    type: PAGE_CHANGED,
    payload: newValue,
  };
}
/**
 * Action triggered to change the loadingContacts
 * @param  {String} newValue New state value
 * @return {Object}          Object to pass to redux
 */
export function loadingContactsChanged(newValue) {
  return {
    type: LOADING_CONTACTS,
    payload: newValue,
  };
}
/**
 * Action triggered to change the targetBodyHeightChanged
 * @param  {String} newValue New state value
 * @return {Object}          Object to pass to redux
 */
export function targetBodyHeightChanged(newValue) {
  return {
    type: TARGET_BODY_HEIGHT,
    payload: newValue,
  };
}
/**
 * Action triggered to change the loadTriggered
 * @param  {String} page page to find
 * @param  {String} filters filters applied to the search
 * @return {Object}          Object to pass to redux
 */
export function loadTriggered(page, filters, reload) {
  return {
    type: LOAD_TRIGGERED,
    payload: {
      page,
      filters,
      reload,
    },
  };
}
