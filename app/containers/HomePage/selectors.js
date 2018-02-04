import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = (state) => state.get('homePage');
/**
 * Default selector used by HomePage
 */
const makeSelectHomePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.toJS()
);
/**
 * Selector used to get the searchValue property
 * @return {[type]} [description]
 */
const makeSearchValue = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('searchValue')
);
/**
 * Selector used to get the detailState property
 * @return {[type]} [description]
 */
const makeDetailState = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('detailState')
);
/**
 * Selector used to get the currentDetailContact property
 * @return {[type]} [description]
 */
const makeCurrentDetailContactState = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('currentDetailContact') && substate.get('currentDetailContact').toJS ? substate.get('currentDetailContact').toJS() : substate.get('currentDetailContact'),
);
/**
 * Selector used to get the currentPage property
 * @return {[type]} [description]
 */
const makeCurrentPage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('currentPage'),
);
/**
 * Selector used to get the items property
 * @return {[type]} [description]
 */
const makeItems = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('items') && substate.get('items').toJS ? substate.get('items').toJS() : substate.get('items'),
);
/**
 * Selector used to get the items property
 * @return {[type]} [description]
 */
const makeItemsCount = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('itemsCount') && substate.get('itemsCount').toJS ? substate.get('itemsCount').toJS() : substate.get('itemsCount'),
);
/**
 * Selector used to get the items property
 * @return {[type]} [description]
 */
const makeFirstLoad = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('firstLoad') && substate.get('firstLoad').toJS ? substate.get('firstLoad').toJS() : substate.get('firstLoad'),
);
/**
 * Selector used to get the items property
 * @return {[type]} [description]
 */
const makeLoadingMoreContacts = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('isLoadingMoreContacts') && substate.get('isLoadingMoreContacts').toJS ? substate.get('isLoadingMoreContacts').toJS() : substate.get('isLoadingMoreContacts'),
);
/**
 * Selector used to get the items property
 * @return {[type]} [description]
 */
const makeTargetBodyHeight = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('targetBodyHeight') && substate.get('targetBodyHeight').toJS ? substate.get('targetBodyHeight').toJS() : substate.get('targetBodyHeight'),
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSearchValue,
  makeDetailState,
  makeCurrentDetailContactState,
  makeCurrentPage,
  makeItems,
  makeItemsCount,
  makeFirstLoad,
  makeLoadingMoreContacts,
  makeTargetBodyHeight,
};
