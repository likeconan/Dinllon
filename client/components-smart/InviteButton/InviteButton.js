import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {Translate} from 'utilities';
import store from 'store';
import {openInviteDialog} from 'actions/activity.action';

class InviteButton extends Component {

    _openInvite = () => {
        store.dispatch(openInviteDialog());
    }
    render() {
        return (
            <invite-button className={this.props.className}>
                <RaisedButton
                    label={Translate.lang.invite_to}
                    primary={true}
                    onTouchTap={this._openInvite}/>
            </invite-button>
        );
    }
}

export default InviteButton;