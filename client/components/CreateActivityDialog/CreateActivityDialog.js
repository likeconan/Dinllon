import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
import { closeDialog } from '../../actions/images-dialog.action';

require('create-activity-dialog.less');

@connect((store) => {
    return {
        open: store.activity.openCreate
    }
})
class CreateActivityDialog extends Component {

    handleClose = () => {
        this.props.dispatch(closeDialog({ openCreate: false }));
    }

    render() {
        return (
            <Dialog modal={false} open={this.props.open} onRequestClose={this.handleClose}>
                create
            </Dialog>
        );
    }
}

export default CreateActivityDialog;