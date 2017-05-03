import React, { Component } from 'react';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import { TimeFormat } from 'utilities';
import Classnames from 'classnames';


require('./activity-start-time.less');

class ActivityStartTime extends Component {
    render() {
        return (
            <div className={Classnames('time-con all-center-flex amber accent-1 grey-text text-darken-2', this.props.className)}>
                <TimeIcon color='#616161' />
                <span>{TimeFormat.formatDateTime(this.props.time)}</span>
            </div>
        );
    }
}

export default ActivityStartTime;