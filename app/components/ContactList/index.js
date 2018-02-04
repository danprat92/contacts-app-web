/**
*
* ContactList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import { injectIntl } from 'react-intl';
import { withStyles } from 'material-ui/styles';
import Infinite from 'react-infinite';
import ContactItem from '../ContactItem/Loadable';
import styles from './styles';
import messages from './messages';

class ContactList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getLoadingSpinner(currentPage, listLimit, itemsCount, classes) {
    if ((currentPage + 1) * listLimit < itemsCount) {
      return (
        <div key={0} className={classes.progressContainer}>
          <CircularProgress className={classes.progress} />
        </div>
      );
    }
    return null;
  }
  generateItem(item) {
    const me = this;
    return (
      <ContactItem
        key={item.phone}
        contact={item}
        contactExpand={me.props.contactExpand}
      ></ContactItem>
    );
  }
  render() {
    const me = this;
    const {
      loadMoreContacts,
      isLoadingMore,
      currentPage,
      itemsCount,
      listLimit,
      items,
      intl,
      classes,
      firstLoad,
      expectedHeight,
    } = me.props;
    if (firstLoad) {
      return (
        <div className={classes.progressContainer}>
          <CircularProgress className={classes.progress} />
        </div>
      );
    }
    if (itemsCount === 0) {
      return (
        <div className={classes.nothing}>
          <Typography type="body2" align="center">{intl.formatMessage(messages.noContacts)}</Typography>
        </div>
      );
    }
    return (
      <Infinite
        elementHeight={84}
        containerHeight={expectedHeight}
        infiniteLoadBeginEdgeOffset={200}
        onInfiniteLoad={() => (currentPage + 1) * listLimit < itemsCount ? loadMoreContacts() : null}
        loadingSpinnerDelegate={me.getLoadingSpinner(currentPage, listLimit, itemsCount, classes)}
        isInfiniteLoading={isLoadingMore}
      >
        {items.map((item) => me.generateItem(item))}
      </Infinite>
    );
  }
}

ContactList.propTypes = {
  loadMoreContacts: PropTypes.func,
  currentPage: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  listLimit: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  contactExpand: PropTypes.func.isRequired,
  firstLoad: PropTypes.bool.isRequired,
};

export default withStyles(styles)(injectIntl(ContactList));
