import React, { Component } from 'react';
import Classnames from 'classnames';
import { UserModel } from '../../models';
import UserDataCon from '../UserDataCon/UserDataCon';
import LinkProfileName from '../LinkProfileName/LinkProfileName';
import DivBackImage from '../DivBackImage/DivBackImage';

require('./brief-profile.less');

class BriefProfile extends Component {
    render() {
        var user = new UserModel(this.props.user).user;
        return (
            <brief-profile class={Classnames(this.props.className)}>
                <DivBackImage className='profile-back blue darken-1' imgSrc={user.backPic} />
                <div className='center-flex profile-con'>
                    <img src={user.headPic} className='profile-user-head' />
                    <div className='profile-text-con'>
                        <LinkProfileName>
                            <p className='profile-nickname cursor-pointer'>{user.nickName}</p>
                        </LinkProfileName>
                        <p className='cyan-text text-darken-1'>{user.goingOn}</p>
                    </div>
                </div>
                <UserDataCon invisible={true} />
            </brief-profile>
        );
    }
}

export default BriefProfile;