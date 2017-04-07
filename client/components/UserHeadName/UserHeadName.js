import React, { Component } from 'react';
import { UserModel } from '../../models';
import LinkProfileName from '../LinkProfileName/LinkProfileName';

require('./user-head-name.less');

class UserHeadName extends Component {
    render() {
        var user = new UserModel(this.props.user).user;
        return (
            <user-head-name>
                <img src={user.headPic} className='user-head-img' />
                <p className='mont-font cursor-pointer'>{user.nickName}</p>
            </user-head-name>
        );
    }
}

export default UserHeadName;