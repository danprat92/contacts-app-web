/**
*
* ContactDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogContent,
  withMobileDialog,
} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography/Typography';
import { withStyles } from 'material-ui/styles';
import CloseIcon from 'material-ui-icons/Close';
import PhoneIcon from 'material-ui-icons/Phone';
import PhoneNumberLib from 'google-libphonenumber';
import LocationIcon from 'material-ui-icons/LocationOn';
import { injectIntl } from 'react-intl';
import Avatar from 'material-ui/Avatar';
import messages from './messages';
import styles from './styles';

class ContactDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getPhoneNumber(old) {
    const phoneNumberInstance = PhoneNumberLib.PhoneNumberUtil.getInstance();
    let phone = '';
    try {
      phone = phoneNumberInstance.format(phoneNumberInstance.parse(old, 'US'), PhoneNumberLib.INTERNATIONAL);
    } catch (error) {
      phone = old;
    }

    return phone;
  }
  render() {
    const me = this;
    const {
      fullScreen,
      detailShouldBeOpened,
      triggerDetailClose,
      classes,
      contact,
      intl,
    } = me.props;
    return (
      <Dialog
        fullScreen={fullScreen}
        fullWidth
        open={detailShouldBeOpened}
        onClose={() => triggerDetailClose()}
        aria-labelledby="responsive-dialog-title"
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => triggerDetailClose()} className={classes.close} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <AppBar position="static" color="default" className={classes.contactBar}>
          <Toolbar>
            <Avatar className={classes.avatar}>{contact.name.substr(0, 2).toUpperCase()}</Avatar>
            <Typography type="title">{contact.name}</Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <Typography className={classes.contactInfoLab} type="body2">{intl.formatMessage(messages.contactInformation)}</Typography>
          <Typography type="body1" className={classes.displayFields}>
            <PhoneIcon className={classes.detailIcon}></PhoneIcon>
            {me.getPhoneNumber(contact.phone)}
          </Typography>
          <div className={classes.displayFields}>
            <LocationIcon className={classes.detailIcon}></LocationIcon>
            <Typography className={classes.address} type="body1">
              {`${contact.line1} ${contact.line2 ? contact.line2 : ''}`}<br />
              {`${contact.city}, ${contact.state}`}<br />
              {contact.zip}
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

ContactDetail.propTypes = {
  detailShouldBeOpened: PropTypes.bool.isRequired,
  triggerDetailClose: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};

export default withStyles(styles)(withMobileDialog()(injectIntl(ContactDetail)));
