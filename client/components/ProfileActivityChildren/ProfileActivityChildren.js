import React, { Component } from 'react';
import FlexImages from '../FlexImages/FlexImages';

require('./profile-activity-children.less');

class ProfileActivityChildren extends Component {
    render() {
        return (
            <profile-activity-children>
                <div className='activity-img-text-con'>
                    <div className='aitc-text'></div>
                    <FlexImages imgContent={this.props.data.Images} />
                </div>
            </profile-activity-children>
        );
    }
}

export default ProfileActivityChildren;