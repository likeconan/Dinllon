import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDialog } from '../../actions/activity.action';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ResponsiveDialog from '../ResponsiveDialog/ResponsiveDialog';


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

    editFriendEmail = () => {
        this.props.dispatch(editFriendEmail());
    }
    render() {

        const actions = [
            <RaisedButton label="Ok" primary={true} onTouchTap={this.handleClose} disabled={!this.props.validatedJoin} />,
        ];

        return (
            <ResponsiveDialog modal={false} open={this.props.open} title='Join In Activity'
                actions={actions} onRequestClose={this.handleClose} contentClassName='jic-content'>
                <div className='margin-bottom'>
                    <TextField floatingLabelText="Your friend's email"
                        onChange={this.editFriendEmail}
                        errorText={this.props.validatedJoin ? '' : 'Please fill in correct email'} />
                </div>
                <div className='caution-msg-con mont-font pink accent-2 margin-top'>
                    <strong className='margin-right'>Caution:</strong>
                    <p>Once you are accepted we will inform your friend of your schedule.</p>
                </div>

            </ResponsiveDialog>
        );
    }
}

export default JoinActivityDialog;