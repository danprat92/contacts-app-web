/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage, {
  makeSearchValue, makeDetailState, makeCurrentDetailContactState, makeCurrentPage, makeItems, makeItemsCount, makeFirstLoad, makeLoadingMoreContacts, makeTargetBodyHeight,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import SearchBar from '../../components/SearchBar';
import {
  searchValueChanged,
  detailStateChanged,
  currentDetailContactStateChanged,
  loadTriggered,
  pageChanged,
  loadingContactsChanged,
  targetBodyHeightChanged,
} from './actions';
import styles from './styles';
import ContactList from '../../components/ContactList/Loadable';
import ContactDetail from '../../components/ContactDetail/Loadable';
import { EMPTY_CONTACT, REQUEST_LIST_LIMIT } from './constants';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const me = this;
    const dispatch = me.props.dispatch;
    dispatch(targetBodyHeightChanged(me.heightRef.clientHeight));
    window.addEventListener('resize', () => {
      dispatch(targetBodyHeightChanged(me.heightRef.clientHeight));
    });
    dispatch(loadTriggered(me.props.currentPage));
  }
  searchValueChanged(newValue) {
    const me = this;
    const dispatch = me.props.dispatch;
    dispatch(pageChanged(0));
    dispatch(searchValueChanged(newValue));
    me.loadMoreContacts(true, newValue || '');
  }
  loadMoreContacts(reload = false, searchValue = this.props.searchValue) {
    const me = this;
    const dispatch = me.props.dispatch;
    dispatch(loadingContactsChanged(true));
    if (!reload) {
      dispatch(pageChanged(me.props.currentPage + 1));
      dispatch(loadTriggered(me.props.currentPage + 1, searchValue, reload));
    } else {
      dispatch(loadTriggered(0, searchValue, reload));
    }
  }
  changeDetailState(newState, contact) {
    const dispatch = this.props.dispatch;

    if (!newState) {
      dispatch(currentDetailContactStateChanged(EMPTY_CONTACT));
    } else {
      dispatch(currentDetailContactStateChanged(contact));
    }
    dispatch(detailStateChanged(newState));
  }
  render() {
    const me = this;
    const {
      searchValue,
      intl,
      detailState,
      classes,
      currentDetailContact,
      currentPage,
      items,
      itemsCount,
      firstLoad,
      isLoadingMoreContacts,
      targetBodyHeight,
    } = me.props;
    return (
      <div className={classes.fullHeight}>
        <Helmet>
          <title>{intl.formatMessage(messages.header)}</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <div className={classes.fullHeight}>
          <div>
            <SearchBar
              searchValue={searchValue}
              searchValueChanged={(val) => me.searchValueChanged(val)}
            ></SearchBar>
          </div>
          <div className={classes.bodyHeight} ref={(elem) => (me.heightRef = elem)}>
            <ContactList
              loadMoreContacts={(page) => me.loadMoreContacts(page)}
              currentPage={currentPage}
              firstLoad={firstLoad}
              itemsCount={itemsCount}
              listLimit={REQUEST_LIST_LIMIT}
              contactExpand={(contact) => me.changeDetailState(true, contact)}
              items={items}
              expectedHeight={targetBodyHeight}
              isLoadingMore={isLoadingMoreContacts}
            ></ContactList>
          </div>
          <ContactDetail
            detailShouldBeOpened={detailState}
            triggerDetailClose={() => me.changeDetailState(false)}
            contact={currentDetailContact}
          />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
  searchValue: makeSearchValue(),
  detailState: makeDetailState(),
  currentDetailContact: makeCurrentDetailContactState(),
  currentPage: makeCurrentPage(),
  items: makeItems(),
  itemsCount: makeItemsCount(),
  firstLoad: makeFirstLoad(),
  isLoadingMoreContacts: makeLoadingMoreContacts(),
  targetBodyHeight: makeTargetBodyHeight(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
  withStyles(styles),
)(HomePage);
