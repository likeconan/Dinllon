import React, { Component } from 'react';
import UserBrief from '../UserBrief/UserBrief';
import FlexImages from '../FlexImages/FlexImages';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ReplyIcon from 'material-ui/svg-icons/content/reply';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import Moment from 'react-moment';
import { TimeFormat } from '../../utilities';
import { connect } from 'react-redux';
import { openJoinDialog, searchActivity } from '../../actions/activity.action';
import ActivityTypeTag from '../ActivityTypeTag/ActivityTypeTag'
import { UserModel } from '../../models';
import { Translate, Authorize } from '../../utilities';

require('./quick-activity.less');

@connect((store) => {
    return {
        openCreate: store.activity.openCreate,
        offset: store.activity.offset,
        openJoin: store.activity.openJoin,
        activity: store.activity.activity
    }
})
class QuickActivity extends Component {
    componentWillMount() {
        this
            .props
            .dispatch(searchActivity());
    }

    _openActivityDialog = () => {
        this
            .props
            .dispatch(openJoinDialog(this.props.activity.uuid))
    }

    _nextActivity = () => {
        this.props.dispatch(searchActivity(this.props.offset))
    }

    render() {
        const user = new UserModel({ ...this.props.activity }.User).user;
        const ifOwn = user.uuid === Authorize.getLoggedUserId();
        const iconStyle = {
            color: '#bdbdbd',
            transform: 'scaleX(-1)'
        };
        return (
            <quick-activity class='white'>
                <div className='qa-title-con space-between center-flex'>
                    <p className='qa-title'>{Translate.lang.recent_activities}</p>
                    {
                        this.props.activity &&
                        <IconButton
                            onClick={this._nextActivity}
                            iconStyle={iconStyle}
                            tooltip={Translate.lang.next}>
                            <ReplyIcon />
                        </IconButton>
                    }

                </div>
                {/*<div>
                    <RaisedButton className='width-100p' label='Create my activity' onClick={() => { this._openActivityDialog(true) }} secondary={true} />
                </div>*/}
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
                                    <FlexImages imgContent={this.props.activity.Images} />
                                    <div
                                        className='time-con all-center-flex amber accent-1 grey-text text-darken-2'>
                                        <TimeIcon color='#616161' />
                                        <span>{TimeFormat.formatDateTime(this.props.activity.startedAt)}</span>
                                    </div>
                                    <RaisedButton
                                        className='width-100p'
                                        disabled={ifOwn}
                                        label={ifOwn ? Translate.lang.join_in_own : Translate.lang.join_in}
                                        onClick={this._openActivityDialog}
                                        primary={true} />
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
                                <div className='cost-time-con center-flex'>
                                    <div className='time-con all-center-flex grey-text text-darken-2'>
                                        <TimeIcon color='#616161' />
                                        <span>{TimeFormat.formatDateTime(this.props.activity.startedAt)}</span>
                                    </div>
                                    <ActivityTypeTag
                                        type={this.props.activity.type}
                                        cost={this.props.activity.cost} />
                                </div>
                                <FlexImages
                                    imgContent={this.props.activity.Images}
                                    className='mobile-normal margin-bottom' />
                                <RaisedButton
                                    className='width-100p'
                                    label='Join in'
                                    onClick={this._openActivityDialog}
                                    primary={true} />
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