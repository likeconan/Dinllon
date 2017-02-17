import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
import { closeDialog } from '../../actions/activity.action';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

require('./join-activity-dialog.less');

@connect((store) => {
    return {
        open: store.activity.openJoin,
        validatedJoin: store.activity.validatedJoin
    }
})
class JoinActivityDialog extends Component {
    handleClose = () => {
        this.props.dispatch(closeDialog());
    }

    render() {

        const actions = [
            <RaisedButton label="Ok" primary={true} onTouchTap={this.handleClose} disabled={!this.props.validatedJoin} />,
        ];

        return (
            <Dialog modal={false} open={this.props.open} title='Join In' actions={actions} onRequestClose={this.handleClose}>
                <div>
                    <TextField floatingLabelText="Email" />
                </div>
                <div className='caution-msg-con mont-font pink accent-2 margin-top'>
                    <strong className='margin-right'>Caution:</strong>
                    <p>Please confirm that you are truly free to join this activity and once you are accepted we will inform your friend of your schedule for your safety consideration</p>
                </div>
            </Dialog>
        );
    }
}

export default JoinActivityDialog;