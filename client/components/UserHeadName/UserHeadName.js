import React, { Component } from 'react';
import { UserModel } from '../../models';
import LinkProfileName from '../LinkProfileName/LinkProfileName';
import store from '../../store';
import { toggleDrawer } from '../../actions/profile.action';

require('./user-head-name.less');

class UserHeadName extends Component {

    openDrawer = (userId) => store.dispatch(toggleDrawer({ toggle: true, userId: userId }))

    render() {
        var user = new UserModel(this.props.user).user;
        return (
            <user-head-name>
                <img src={user.headPic} className='user-head-img' />
                <p className='mont-font cursor-pointer' onClick={() => this.openDrawer(user.uuid)}>{user.nickName}</p>
            </user-head-name>
        );
    }
}

export default UserHeadName;