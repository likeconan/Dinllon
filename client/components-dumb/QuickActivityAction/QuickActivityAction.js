import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Translate, Authorize, Navigate } from 'utilities';
import { connect } from 'react-redux';
import { toggleJoinDialog, toggleCancelApplyDialog } from 'actions/join-activity.action';
import { cyan500, pink500, amber500, green500 } from 'material-ui/styles/colors';
import store from 'store';


class QuickActivityAction extends Component {

    _activityAction = (status, joinedId) => {
        switch (status) {
            case 0:
                store.dispatch(toggleJoinDialog({
                    activityId: this.props.activityId,
                    open: true
                }));
                break;
            case 1:
                store.dispatch(toggleCancelApplyDialog({
                    data: {
                        joinedId: joinedId,
                        activityId: this.props.activityId,
                    },
                    open: true
                }));
            default:
                break;
        }
    }

    render() {
        const ifOwn = this.props.userId === Authorize.getLoggedUserId();
        const status = this.props.joined ? this.props.joined.status : 0;
        const joinedId = this.props.joined ? this.props.joined.uuid : null;
        const ifDisable = ifOwn;
        var label = Translate.lang.join_in;
        var backColor = cyan500;
        if (ifOwn) {
            label = Translate.lang.join_in_own
        } else if (status === 3) {
            label = Translate.lang.refused;
            backColor = amber500;
        }
        else if (status === 2) {
            label = Translate.lang.approved;
            backColor = green500;
        } else if (status === 1) {
            label = Translate.lang.apply_cancel;
            backColor = pink500;
        }
        return (
            <RaisedButton
                className='width-100p'
                disabled={ifDisable}
                label={label}
                backgroundColor={backColor}
                labelColor='#ffffff'
                onTouchTap={() => this._activityAction(status, joinedId)} />
        );
    }
}

export default QuickActivityAction;