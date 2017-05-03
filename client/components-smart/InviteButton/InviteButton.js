import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Translate, Authorize } from 'utilities';
import store from 'store';
import { toggleInviteDialog, getAvailableActivities } from 'actions/join-activity.action';

class InviteButton extends Component {

    _openInvite = () => {
        store.dispatch(toggleInviteDialog({ open: true }));
        store.dispatch(getAvailableActivities(Authorize.getLoggedUserId()));
    }
    render() {
        return (
            <invite-button className={this.props.className}>
                <RaisedButton
                    label={Translate.lang.invite_to}
                    primary={true}
                    onTouchTap={this._openInvite} />
            </invite-button>
        );
    }
}

export default InviteButton;