import React, { Component } from 'react';
import FlexImages from 'components-dumb/FlexImages/FlexImages';
import Classnames from 'classnames';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import { Translate, TimeFormat } from 'utilities';
import { JoinUsersModel } from 'models';
import ProfileActivityUserList from 'components-dumb/ProfileActivityUserList/ProfileActivityUserList';
import ActivityTypeTag from 'components-dumb/ActivityTypeTag/ActivityTypeTag';
import ProfileActivityChildrenActions from 'components-dumb/ProfileActivityChildrenActions/ProfileActivityChildrenActions';

require('./profile-activity-children.less');

class ProfileActivityChildren extends Component {
    render() {
        const ifactive = this.props.data.Images.length > 0;
        const joinedUsers = new JoinUsersModel(this.props.data.JoinActivities);

        return (
            <profile-activity-children >
                <div className={Classnames('activity-img-text-con', { 'with-image': ifactive })}>
                    <div className='aitc-text'>
                        <ProfileActivityChildrenActions
                            isOwn={this.props.isOwn}
                            ifactive={ifactive}
                            activityId={this.props.data.uuid} />
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
                    className='join-user-con inital-uc'
                    title={Translate.lang.approved_user}
                    noresult={Translate.lang.no_approved_user}
                    titleClass='applied-text'
                    users={joinedUsers.approved}
                />
                <ProfileActivityUserList
                    className='join-user-con'
                    title={Translate.lang.applied_user}
                    noresult={Translate.lang.no_applied_user}
                    titleClass='applied-text'
                    users={joinedUsers.applied}
                    isApprove={this.props.isOwn}
                />


            </profile-activity-children >
        );
    }
}

export default ProfileActivityChildren;