import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
import { closeDialog } from '../../actions/activity.action';

require('./join-activity-dialog.less');

@connect((store) => {
    return {
        open: store.activity.openJoin
    }
})
class JoinActivityDialog extends Component {
    handleClose = () => {
        this.props.dispatch(closeDialog({ openJoin: false }));
    }

    render() {
        return (
            <Dialog modal={false} open={this.props.open} onRequestClose={this.handleClose}>

            </Dialog>
        );
    }
}

export default JoinActivityDialog;