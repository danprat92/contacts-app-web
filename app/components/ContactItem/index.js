import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import styles from './styles';
/**
 * @description Class that shows a contact item.
 * @class ContactItem
 */
class ContactItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const me = this;
    const {
      contact,
      contactExpand,
      classes,
    } = me.props;
    return (
      <ListItem key={contact.phone} button onClick={() => contactExpand(contact)}>
        <ListItemIcon>
          <Avatar className={classes.avatar}>{contact.name.substr(0, 2).toUpperCase()}</Avatar>
        </ListItemIcon>
        <ListItemText primary={contact.name} />
      </ListItem>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  contactExpand: PropTypes.func.isRequired,
};

export default withStyles(styles)(ContactItem);
