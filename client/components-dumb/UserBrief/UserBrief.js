import React, { Component } from 'react';
import { UserModel } from 'models';
import Classnames from 'classnames';
import LinkProfileName from '../LinkProfileName/LinkProfileName';

require('./user-brief.less');

class UserBrief extends Component {

    render() {
        var user = new UserModel(this.props.user).user;
        return (
            <user-circle-brief class={Classnames('center-flex', this.props.className)}>
                <img src={user.headPic} className='user-head-img' />
                <div className='center-flex brief-con column-center'>
                    <LinkProfileName to={user.uuid}>
                        <p className='white-text mont-font cursor-pointer'>{user.nickName}</p>
                    </LinkProfileName>
                    <small className='cyan-text text-darken-1'>{user.goingOn}</small>
                </div>
            </user-circle-brief>
        );
    }
}

export default UserBrief;