/**
*
* SearchBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Input from 'material-ui/Input';
import InputAdornment from 'material-ui/Input/InputAdornment';
import SearchIcon from 'material-ui-icons/Search';
import { injectIntl } from 'react-intl';

import messages from './messages';
import styles from './styles';

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const me = this;
    const {
      classes,
      searchValue,
      searchValueChanged,
      intl,
    } = me.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Input
            disableUnderline
            className={classes.input}
            id="search-field"
            value={searchValue}
            onChange={(val) => searchValueChanged(val.target.value)}
            placeholder={intl.formatMessage(messages.textFieldPlaceholder)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Toolbar>
      </AppBar>
    );
  }
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchValueChanged: PropTypes.func.isRequired,
};

export default withStyles(styles)(injectIntl(SearchBar));
