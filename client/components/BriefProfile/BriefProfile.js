import React, { Component } from 'react';
import { UserModel } from '../../models';

require('./brief-profile.less');

class BriefProfile extends Component {
    render() {
        var user = new UserModel(this.props.user);
        return (
            <brief-profile>
                <div className='profile-back img-content-container blue darken-1'>
                </div>
                <div className='center-flex profile-con'>
                    <img src={user.headPic} className='profile-user-head' />
                    <div className='profile-text-con'>
                        <p className='profile-nickname cursor-pointer'>{user.nickName}</p>
                        <p className='cyan-text text-darken-1'>{user.goingOn}</p>
                    </div>
                </div>
                <div className='profile-data-con center-flex'>
                    <div className='pdc-con cursor-pointer'>
                        <p className='grey-text text-darken-2 roboto-font'>Dinllones</p>
                        <strong className='blue-text text-accent-2'>123</strong>
                    </div>
                    <div className='pdc-con cursor-pointer'>
                        <p className='grey-text text-darken-2 roboto-font'>Friends</p>
                        <strong className='blue-text text-accent-2'>23</strong>
                    </div>
                    <div className='pdc-con cursor-pointer'>
                        <p className='grey-text text-darken-2 roboto-font'>Dates</p>
                        <strong className='blue-text text-accent-2'>10</strong>
                    </div>
                </div>
            </brief-profile>
        );
    }
}

export default BriefProfile;