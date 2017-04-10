import React, { Component } from 'react';
import FlexImages from '../FlexImages/FlexImages';
import Classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import { Translate, TimeFormat } from '../../utilities';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ProfileActivityUserList from '../ProfileActivityUserList/ProfileActivityUserList';
import ActivityTypeTag from '../ActivityTypeTag/ActivityTypeTag';

require('./profile-activity-children.less');

class ProfileActivityChildren extends Component {
    render() {
        const ifactive = this.props.data.Images.length > 0;
        const margin = {
            margin: 10
        }
        return (
            <profile-activity-children >
                <div className={Classnames('activity-img-text-con', { 'with-image': ifactive })}>
                    <div className='aitc-text'>
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
                                                labelStyle={{ color: 'white' }} />
                                            :
                                            <RaisedButton label={Translate.lang.join_in}
                                                primary={true}
                                                style={margin} />
                                    }

                                </div>
                        }
                        <div className='aitct'>
                            {this.props.data.textContent}
                        </div>
                    </div>
                    <FlexImages imgContent={this.props.data.Images} />
                </div>
                <div className='type-time-con space-between'>
                    <ActivityTypeTag
                        type={this.props.data.type}
                        cost={this.props.data.cost} />
                    <div
                        className='time-con all-center-flex amber accent-1 grey-text text-darken-2'>
                        <TimeIcon color='#616161' />
                        <span>{TimeFormat.formatDateTime(this.props.data.startedAt)}</span>
                    </div>
                </div>
                <ProfileActivityUserList
                    className='apply-user-con'
                    title={Translate.lang.applied_user}
                    titleClass='applied-text' />
            </profile-activity-children >
        );
    }
}

export default ProfileActivityChildren;