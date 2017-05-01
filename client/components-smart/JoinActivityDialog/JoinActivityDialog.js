import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleJoinDialog, editInformEmail, applyActivity } from 'actions/join-activity.action';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ResponsiveDialog from 'components-dumb/ResponsiveDialog/ResponsiveDialog';
import FormTextField from 'components-dumb/FormTextField/FormTextField';
import { Translate, Authorize } from 'utilities';


require('./join-activity-dialog.less');

@connect((store) => {
    return {
        open: store.joinactivity.openJoin,
        validatedJoin: store.joinactivity.validatedJoin,
        applyActivity: store.joinactivity.applyActivity,
    }
})
class JoinActivityDialog extends Component {
    handleClose = () => {
        this
            .props
            .dispatch(toggleJoinDialog({ open: false }));
    }

    _joinActivity = () => {
        var data = {
            ...this.props.applyActivity,
            userId: Authorize.getLoggedUserId()
        };
        this.props.dispatch(applyActivity(data));
    }
    _onEnter = (e) => {
        if (e.charCode === 13 && this.props.validatedJoin) {
            this._joinActivity();
        }
    }

    editInformEmail = (e) => {
        this
            .props
            .dispatch(editInformEmail(e.target.value));
    }


    render() {
        const actions = [< RaisedButton label="Ok"
            primary={true}
            onTouchTap={this._joinActivity}
            disabled={!this.props.validatedJoin} />];

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
                        errorText={Translate.lang.error_email}
                        onKeyPress={this._onEnter} />
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