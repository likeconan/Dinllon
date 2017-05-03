import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { Translate } from 'utilities';
import store from 'store';
import { cyan500, pink500, amber500, green500 } from 'material-ui/styles/colors';
import { toggleJoinDialog, toggleCancelApplyDialog } from 'actions/join-activity.action';

class ProfileActivityChildrenActions extends Component {

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
                break;
            default:
                break;
        }
    }

    render() {
        const ifactive = this.props.ifactive;
        const joined = this.props.joined ? this.props.joined : {}
        const status = joined.status ? joined.status : 0;
        const joinedId = joined.uuid;
        const margin = {
            margin: 10
        }
        var label = Translate.lang.join_in;
        var backColor = cyan500;
        switch (status) {
            case 1:
                label = Translate.lang.apply_cancel;
                backColor = pink500;
                break;
            case 2:
                label = Translate.lang.approved;
                backColor = green500;
                break;
            case 3:
                label = Translate.lang.refused;
                backColor = amber500;
                break;
            default:
                break;
        }

        return (
            <div>
                {
                    this.props.isOwn ?
                        <div className='aitc-icon-con center-flex'>
                            <IconButton><EditIcon color={ifactive ? '#fafafa' : '#9e9e9e'} /></IconButton>
                            <IconButton><DeleteIcon color={ifactive ? '#fafafa' : '#9e9e9e'} /></IconButton>
                        </div>
                        :
                        <div className='aitc-icon-con center-flex'>
                            {
                                ifactive ?
                                    <FlatButton label={label}
                                        style={margin}
                                        labelStyle={{ color: 'white' }}
                                        onTouchTap={() => this._activityAction(status, joinedId)} />
                                    :
                                    <RaisedButton
                                        label={label}
                                        backgroundColor={backColor}
                                        labelColor='#ffffff'
                                        style={margin}
                                        onTouchTap={() => this._activityAction(status, joinedId)} />
                            }

                        </div>
                }
            </div>
        );
    }
}

export default ProfileActivityChildrenActions;