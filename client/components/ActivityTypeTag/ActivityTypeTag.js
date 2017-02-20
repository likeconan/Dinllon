import React, { Component } from 'react';
import Classnames from 'classnames';
import { EnumModel } from '../../models';

require('./activity-type-tag.less')

class ActivityTypeTag extends Component {
    render() {
        return (
            <activity-type-tag class=''>
                <a className={Classnames('tag', { [`type-${this.props.type}`]: true })}>
                    {EnumModel.getActivityType(this.props.type)}
                    {this.props.type == 1 ? this.props.cost : ''}
                </a>
            </activity-type-tag>
        );
    }
}

export default ActivityTypeTag;