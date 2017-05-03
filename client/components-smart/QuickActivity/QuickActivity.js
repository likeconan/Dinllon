import React, { Component } from 'react';
import UserBrief from 'components-dumb/UserBrief/UserBrief';
import FlexImages from 'components-dumb/FlexImages/FlexImages';
import QuickActivityAction from 'components-dumb/QuickActivityAction/QuickActivityAction';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ReplyIcon from 'material-ui/svg-icons/content/reply';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import Moment from 'react-moment';
import { Translate } from 'utilities';
import { connect } from 'react-redux';
import { searchActivity } from 'actions/activity.action';
import { toggleJoinDialog } from 'actions/join-activity.action';
import ActivityTypeTag from 'components-dumb/ActivityTypeTag/ActivityTypeTag'
import ActivityStartTime from 'components-dumb/ActivityStartTime/ActivityStartTime'
import { UserModel } from 'models';
import Classnames from 'classnames';

require('./quick-activity.less');

@connect((store) => {
    return {
        offset: store.activity.offset,
        activity: store.activity.activity
    }
})
class QuickActivity extends Component {
    componentWillMount() {
        this
            .props
            .dispatch(searchActivity());
    }

    _nextActivity = () => {
        this.props.dispatch(searchActivity(this.props.offset))
    }
    _refreshActivity = () => {
        this.props.dispatch(searchActivity(0))
    }

    render() {
        const user = new UserModel({ ...this.props.activity }.User).user;
        const iconStyle = {
            color: '#bdbdbd',
            transform: 'scaleX(-1)'
        };
        return (
            <quick-activity class='white'>
                <div className='qa-title-con space-between center-flex'>
                    <p className='qa-title'>{Translate.lang.recent_activities}</p>
                    {
                        this.props.activity ?
                            <IconButton
                                onClick={this._nextActivity}
                                iconStyle={iconStyle}
                                tooltip={Translate.lang.next}>
                                <ReplyIcon />
                            </IconButton>
                            :
                            <IconButton
                                onClick={this._refreshActivity}
                                iconStyle={iconStyle}
                                tooltip={Translate.lang.refresh}>
                                <RefreshIcon />
                            </IconButton>
                    }

                </div>
                {this.props.activity
                    ? (
                        <div>
                            <div className='activity-detail-con'>
                                <div className='qa-user-con space-between'>
                                    <UserBrief className='qa-user-brief' user={user} />
                                    <small className='grey-text text-darken-1'>
                                        <Moment toNow ago>{this.props.activity.createdAt}</Moment>
                                    </small>
                                </div>
                                <div className='activity-con'>
                                    <p className='grey-text roboto-font text-darken-3'>{this.props.activity.textContent}</p>
                                    <div className='cost-con'>
                                        <ActivityTypeTag
                                            type={this.props.activity.type}
                                            cost={this.props.activity.cost} />
                                    </div>
                                    <div className={Classnames({ 'qa-flex-img-con': this.props.activity.Images.length })}>
                                        <FlexImages imgContent={this.props.activity.Images} />
                                    </div>
                                    <ActivityStartTime time={this.props.activity.startedAt} />
                                    <QuickActivityAction
                                        activityId={this.props.activity.uuid}
                                        userId={user.uuid}
                                        joined={this.props.activity.JoinActivities[0]} />
                                </div>
                            </div>

                            {/* mobile */}
                            <div className='mb-activity-detail-con margin-bottom'>
                                <div className='qa-user-con'>
                                    <img className='circle margin-right' src={user.headPic} />
                                    <div>
                                        <p className='roboto-font margin-bottom'>{this.props.activity.textContent}</p>
                                        <small className='grey-text text-darken-1 sans-font'>by {user.nickName}</small>
                                    </div>
                                </div>
                                <div className='cost-time-con margin-top center-flex'>
                                    <ActivityStartTime time={this.props.activity.startedAt} />
                                    <ActivityTypeTag
                                        type={this.props.activity.type}
                                        cost={this.props.activity.cost} />
                                </div>

                                <div className={Classnames('mb-qa-flex-img-con margin-bottom', { 'no-image': !this.props.activity.Images.length })}>
                                    <FlexImages
                                        imgContent={this.props.activity.Images}
                                        className='mobile-normal' />
                                </div>
                                <QuickActivityAction
                                    userId={user.uuid}
                                    activityId={this.props.activity.uuid}
                                    joined={this.props.activity.JoinActivities[0]} />

                            </div>
                        </div>

                    )
                    : (
                        <div className='no-activities grey-text text-darken-3'>
                            <p>{Translate.lang.no_activities}</p>
                        </div>
                    )
                }

            </quick-activity>
        );
    }
}

export default QuickActivity;