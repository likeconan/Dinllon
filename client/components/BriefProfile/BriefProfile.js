import React, { Component } from 'react';
import Classnames from 'classnames';
import { UserModel } from '../../models';
import UserDataCon from '../UserDataCon/UserDataCon';

require('./brief-profile.less');

class BriefProfile extends Component {
    render() {
        var user = new UserModel(this.props.user);
        return (
            <brief-profile class={Classnames(this.props.className)}>
                <div className='profile-back img-content-container blue darken-1'>
                </div>
                <div className='center-flex profile-con'>
                    <img src={user.headPic} className='profile-user-head' />
                    <div className='profile-text-con'>
                        <p className='profile-nickname cursor-pointer'>{user.nickName}</p>
                        <p className='cyan-text text-darken-1'>{user.goingOn}</p>
                    </div>
                </div>
                <UserDataCon />
            </brief-profile>
        );
    }
}

export default BriefProfile;