import React, { Component } from 'react';
import UserBrief from '../UserBrief/UserBrief';
import FlexImages from '../FlexImages/FlexImages';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import { openCreateDialog, openJoinDialog } from '../../actions/activity.action';

require('./quick-activity.less');

@connect((store) => {
    return {
        openCreate: store.activity.openCreate,
        openJoin: store.activity.openJoin,
    }
})
class QuickActivity extends Component {
    _openActivityDialog(flag) {
        flag ? this.props.dispatch(openCreateDialog()) : this.props.dispatch(openJoinDialog())
    }

    render() {
        var imgContent = 'https://testfor.blob.core.chinacloudapi.cn/images/c54f9c75-7bee-4d50-a174-9abda5ddbf6d.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/5959fc21-f68c-4dd2-8a77-074678033799.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/bcae52c5-904c-4e25-8763-bb56342a8329.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/5959fc21-f68c-4dd2-8a77-074678033799.jpeg;';
        return (
            <quick-activity>
                <div className='space-between center-flex'>
                    <p className='qa-title'>What recent activities</p>
                    <IconButton iconClassName="material-icons mirror-transform" iconStyle={{ color: '#bdbdbd' }} tooltip="Next activity">
                        reply
                    </IconButton>
                </div>
                <div>
                    <RaisedButton className='width-100p' label='Create my activity' onClick={() => { this._openActivityDialog(true) }} secondary={true} />
                </div>
                <div className='qa-user-con space-between'>
                    <UserBrief className='qa-user-brief' />
                    <small className='grey-text text-darken-1'>3 mins</small>
                </div>
                <div className='activity-con amber lighten-4'>
                    <p className='grey-text text-darken-3'>I am going to have a jog around in central park.Anyone who wants to share the workout?</p>
                    <FlexImages imgContent={imgContent} />
                    <div className='time-con all-center-flex amber accent-1 grey-text text-darken-2'>
                        <i className='material-icons'>access_time</i>
                        <span>2017-04-01 13:30</span>
                    </div>
                    <RaisedButton className='width-100p' label='Join in' onClick={() => { this._openActivityDialog(false) }} primary={true} />
                </div>
            </quick-activity>
        );
    }
}

export default QuickActivity;