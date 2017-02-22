import React, { Component } from 'react';
import UserBrief from '../UserBrief/UserBrief';
import FlexImages from '../FlexImages/FlexImages';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Moment from 'react-moment';
import { TimeFormat } from '../../utilities';
import { connect } from 'react-redux';
import { openCreateDialog, openJoinDialog, searchActivity } from '../../actions/activity.action';
import ActivityTypeTag from '../ActivityTypeTag/ActivityTypeTag'
import { UserModel } from '../../models';

require('./quick-activity.less');

@connect((store) => {
    return {
        openCreate: store.activity.openCreate,
        openJoin: store.activity.openJoin,
        activity: store.activity.activity,

    }
})
class QuickActivity extends Component {
    componentWillMount() {
        this.props.dispatch(searchActivity());
    }

    _openActivityDialog(flag) {
        flag ? this.props.dispatch(openCreateDialog()) : this.props.dispatch(openJoinDialog())
    }

    render() {
        const user = new UserModel(this.props.activity ? this.props.activity.user : null);
        return (
            <quick-activity class='white'>
                <div className='space-between center-flex'>
                    <p className='qa-title'>What recent activities</p>
                    <IconButton iconClassName="material-icons mirror-transform" iconStyle={{ color: '#bdbdbd' }} tooltip="Next activity">
                        reply
                    </IconButton>
                </div>
                {/*<div>
                    <RaisedButton className='width-100p' label='Create my activity' onClick={() => { this._openActivityDialog(true) }} secondary={true} />
                </div>*/}
                {
                    this.props.activity ?
                        (
                            <div>
                                <div className='activity-detail-con'>
                                    <div className='qa-user-con space-between'>
                                        <UserBrief className='qa-user-brief' user={this.props.activity.user} />
                                        <small className='grey-text text-darken-1'>
                                            <Moment toNow ago>{this.props.activity.createdTime}</Moment>
                                        </small>
                                    </div>
                                    <div className='activity-con amber lighten-4'>
                                        <p className='grey-text text-darken-3'>{this.props.activity.textContent}</p>
                                        <div className='cost-con'>
                                            <ActivityTypeTag type={this.props.activity.type} cost={this.props.activity.cost} />
                                        </div>
                                        <FlexImages imgContent={this.props.activity.imgContent} />
                                        <div className='time-con all-center-flex amber accent-1 grey-text text-darken-2'>
                                            <i className='material-icons'>access_time</i>
                                            <span>{TimeFormat.formatDateTime(this.props.activity.startDate, this.props.activity.startTime)}</span>
                                        </div>
                                        <RaisedButton className='width-100p' label='Join in' onClick={() => { this._openActivityDialog(false) }} primary={true} />
                                    </div>
                                </div>
                                <div className='mb-activity-detail-con margin-bottom'>
                                    <div className='qa-user-con space-between'>
                                        <img className='circle margin-right' src={user.headPic} />
                                        <div>
                                            <p className='roboto-font'>{this.props.activity.textContent}</p>
                                            <small className='grey-text text-darken-1 sans-font'>by {user.nickName}</small>
                                        </div>
                                    </div>
                                    <div className='cost-time-con center-flex'>
                                        <div className='time-con all-center-flex grey-text text-darken-2'>
                                            <i className='material-icons'>access_time</i>
                                            <span>{TimeFormat.formatDateTime(this.props.activity.startDate, this.props.activity.startTime)}</span>
                                        </div>
                                        <ActivityTypeTag type={this.props.activity.type} cost={this.props.activity.cost} />
                                    </div>
                                    <FlexImages imgContent={this.props.activity.imgContent} className='mobile-normal margin-bottom' />
                                    <RaisedButton className='width-100p' label='Join in' onClick={() => { this._openActivityDialog(false) }} primary={true} />
                                </div>
                            </div>

                        ) :
                        (
                            <div className='no-activities grey-text text-darken-3'>
                                <p>No related activities are created so far.<br />Maybe you can create one. </p>
                            </div>
                        )
                }

            </quick-activity>
        );
    }
}

export default QuickActivity;