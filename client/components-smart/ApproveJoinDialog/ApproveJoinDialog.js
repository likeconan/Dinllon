import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { toggleApproveJoinDialog, approveJoin } from 'actions/join-activity.action';
import { Translate } from 'utilities';

@connect((store) => {
    return {
        open: store.joinactivity.openApprove,
        approveActivity: store.joinactivity.approveActivity
    }
})
class ApproveJoinDialog extends Component {

    _handleClose = () => {
        this.props.dispatch(toggleApproveJoinDialog({ open: false }));
    }
    _handleApprove = () => {
        this.props.dispatch(approveJoin(this.props.approveActivity));
    }

    render() {
        const actions = [
            <FlatButton
                label={Translate.lang.cancel}
                primary={true}
                onTouchTap={this._handleClose}
            />,
            <FlatButton
                label={Translate.lang.submit}
                primary={true}
                keyboardFocused={true}
                onTouchTap={this._handleApprove}
            />,
        ];
        return (
            <Dialog
                title={Translate.lang.approve_title}
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this._handleClose}>
                {Translate.lang.approve_sure}
            </Dialog>
        );
    }
}

export default ApproveJoinDialog;