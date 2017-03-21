import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeDialog, editFriendEmail} from '../../actions/activity.action';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ResponsiveDialog from '../ResponsiveDialog/ResponsiveDialog';
import FormTextField from '../FormTextField/FormTextField';

require('./join-activity-dialog.less');

@connect((store) => {
    return {open: store.activity.openJoin, validatedJoin: store.activity.validatedJoin, friendEmail: store.activity.friendEmail}
})
class JoinActivityDialog extends Component {
    handleClose = () => {
        this
            .props
            .dispatch(closeDialog());
    }

    editFriendEmail = (e) => {
        this
            .props
            .dispatch(editFriendEmail(e.target.value));
    }
    render() {

        const actions = [< RaisedButton label = "Ok" primary = {
                true
            }
            onTouchTap = {
                this.handleClose
            }
            disabled = {
                !this.props.validatedJoin
            } />];

        return (
            <ResponsiveDialog
                modal={false}
                open={this.props.open}
                title='Join In Activity'
                actions={actions}
                onRequestClose={this.handleClose}
                contentClassName='jic-content'>
                <div className='margin-bottom'>
                    <FormTextField
                        floatingLabelText="Your friend's email"
                        validated={this.props.validatedJoin}
                        onChange={this.editFriendEmail}
                        value={this.props.friendEmail}
                        errorText='Please fill in correct email'/>
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