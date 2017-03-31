import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDialog, editInformEmail, applyActivity } from '../../actions/activity.action';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ResponsiveDialog from '../ResponsiveDialog/ResponsiveDialog';
import FormTextField from '../FormTextField/FormTextField';
import { Translate, Authorize } from '../../utilities';


require('./join-activity-dialog.less');

@connect((store) => {
    console.log('apply-activyt')
    return {
        open: store.activity.openJoin,
        validatedJoin: store.activity.validatedJoin,
        applyActivity: store.activity.applyActivity,
    }
})
class JoinActivityDialog extends Component {
    handleClose = () => {
        this
            .props
            .dispatch(closeDialog());
    }

    _joinActivity = () => {
        var data = {
            ...this.props.applyActivity,
            userId: Authorize.getLoggedUserId()
        };
        this.props.dispatch(applyActivity(data));
    }

    editInformEmail = (e) => {
        this
            .props
            .dispatch(editInformEmail(e.target.value));
    }


    render() {
        console.log('apply-activyt-render')
        const actions = [< RaisedButton label="Ok" primary={
            true
        }
            onTouchTap={
                this._joinActivity
            }
            disabled={
                !this.props.validatedJoin
            } />];

        return (
            <ResponsiveDialog
                modal={false}
                open={this.props.open}
                title={Translate.lang.apply_activity}
                actions={actions}
                onRequestClose={this.handleClose}
                contentClassName='jic-content'>
                <div className='margin-bottom'>
                    <FormTextField
                        floatingLabelText={Translate.lang.friend_email}
                        validated={this.props.validatedJoin}
                        onChange={this.editInformEmail}
                        value={this.props.applyActivity.informEmail}
                        errorText={Translate.lang.error_email} />
                </div>
                <div className='caution-msg-con mont-font pink accent-2 margin-top'>
                    <strong className='margin-right'>{Translate.lang.warmth_tip}</strong>
                    <p>{Translate.lang.tip_when_accepted}</p>
                </div>

            </ResponsiveDialog>
        );
    }
}

export default JoinActivityDialog;