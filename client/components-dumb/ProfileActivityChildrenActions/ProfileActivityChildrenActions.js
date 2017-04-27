import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { Translate } from 'utilities';
import store from 'store';
import { toggleJoinDialog } from 'actions/join-activity.action';

class ProfileActivityChildrenActions extends Component {

    _openJoin = () => {
        store.dispatch(toggleJoinDialog({
            activityId: this.props.activityId,
            open: true
        }));
    }

    render() {
        const ifactive = this.props.ifactive;
        const margin = {
            margin: 10
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
                                    <FlatButton label={Translate.lang.join_in}
                                        style={margin}
                                        labelStyle={{ color: 'white' }}
                                        onTouchTap={this._openJoin} />
                                    :
                                    <RaisedButton label={Translate.lang.join_in}
                                        primary={true}
                                        style={margin}
                                        onTouchTap={this._openJoin} />
                            }

                        </div>
                }
            </div>
        );
    }
}

export default ProfileActivityChildrenActions;