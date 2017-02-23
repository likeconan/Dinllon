import React, { Component } from 'react';
import UserDataCon from '../UserDataCon/UserDataCon';

require('./profile-user-data.less');

class ProfileUserData extends Component {
    render() {
        return (
            <profile-user-data>
                <div className='pud-con'>
                    <UserDataCon className='profile-udc' />
                </div>
            </profile-user-data>
        );
    }
}

export default ProfileUserData;