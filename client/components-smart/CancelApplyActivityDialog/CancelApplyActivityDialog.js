import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { toggleCancelApplyDialog, cancelApply } from 'actions/join-activity.action';
import { Translate } from 'utilities';

@connect((store) => {
    return {
        open: store.joinactivity.openCancelApply,
        cancelApplyJoin: store.joinactivity.cancelApplyJoin
    }
})
class CancelApplyActivityDialog extends Component {

    _handleClose = () => {
        this.props.dispatch(toggleCancelApplyDialog({ open: false }));
    }
    _handleCancelApply = () => {
        this.props.dispatch(cancelApply(this.props.cancelApplyJoin));
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
                onTouchTap={this._handleCancelApply}
            />,
        ];
        return (
            <Dialog
                title={Translate.lang.apply_cancel}
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.handleClose}>
                {Translate.lang.cancel_apply_sure}
            </Dialog>
        );
    }
}

export default CancelApplyActivityDialog;