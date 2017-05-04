import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { toggleDeleteActivity, deleteActivity } from 'actions/profile.action';
import { Translate } from 'utilities';

@connect((store) => {
    return {
        deleteActivity: store.profile.deleteActivity,
    }
})
class DeleteActivityDialog extends Component {

    _handleClose = () => {
        this.props.dispatch(toggleDeleteActivity({ open: false }));
    }
    _handleDelete = () => {
        this.props.dispatch(deleteActivity(this.props.deleteActivity.id));
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
                onTouchTap={this._handleDelete}
            />,
        ];
        return (
            <Dialog
                title={Translate.lang.activity_delete_title}
                actions={actions}
                modal={false}
                open={this.props.deleteActivity.open}
                onRequestClose={this.handleClose}>
                {Translate.lang.activity_delete_sure}
            </Dialog>
        );
    }
}

export default DeleteActivityDialog;