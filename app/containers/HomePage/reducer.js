/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import _ from 'lodash';
import {
  DEFAULT_ACTION,
  SEARCH_VALUE_CHANGED,
  DETAIL_STATE_CHANGED,
  CURRENT_DETAIL_CONTACT_CHANGED,
  PAGE_CHANGED,
  ITEMS_CHANGED,
  ITEMS_RELOAD,
  FIRST_LOAD_ACTIVE,
  ITEMS_COUNT_CHANGED,
  LOADING_CONTACTS,
  TARGET_BODY_HEIGHT,
} from './constants';

const initialState = fromJS({
  searchValue: '',
  detailState: false,
  currentDetailContact: {
    name: '-',
    phone: '-',
    line1: '-',
    line2: '-',
    city: '-',
    state: '-',
    zip: '-',
  },
  currentPage: 0,
  items: [],
  firstLoad: true,
  itemsCount: 0,
  isLoadingMoreContacts: false,
  targetBodyHeight: 0,
});
/**
 * Home page reducer for redux
 * @param  {Object} [state=initialState] Previous state
 * @param  {Object} action               Action to perform with type and payload
 * @return {Object}                      New state
 */
function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SEARCH_VALUE_CHANGED:
      return state.set('searchValue', action.payload);
    case DETAIL_STATE_CHANGED:
      return state.set('detailState', action.payload);
    case CURRENT_DETAIL_CONTACT_CHANGED:
      return state.set('currentDetailContact', action.payload);
    case PAGE_CHANGED:
      return state.set('currentPage', action.payload);
    case LOADING_CONTACTS:
      return state.set('isLoadingMoreContacts', action.payload);
    case TARGET_BODY_HEIGHT:
      return state.set('targetBodyHeight', action.payload);
    case ITEMS_CHANGED: {
      let newArray = [];
      if (state.get('items').toJS) {
        newArray = _.union(state.get('items').toJS(), action.payload.rows);
      } else {
        newArray = _.union(state.get('items'), action.payload.rows);
      }
      return state.set('items', newArray);
    }
    case ITEMS_RELOAD: {
      return state.set('items', action.payload.rows);
    }
    case ITEMS_COUNT_CHANGED:
      return state.set('itemsCount', action.payload.count);
    case FIRST_LOAD_ACTIVE:
      return state.set('firstLoad', action.payload);
    default:
      return state;
  }
}

export default homePageReducer;
