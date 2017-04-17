import React, { Component } from 'react';
import Classnames from 'classnames';
import ProfileBackPic from '../ProfileBackPic/ProfileBackPic';
import ProfileDetail from '../ProfileEditDetail/ProfileEditDetail';
import ProfileUserData from '../ProfileUserData/ProfileUserData';
import ProfileTabs from '../ProfileTabs/ProfileTabs';
import ProfileOverlay from '../ProfileOverlay/ProfileOverlay';
import storage from 'store2';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        user: store.profile.user
    }
})
class Profile extends Component {
    render() {
        const userId = this.props.userId || storage.session('ss.profile.user.id');
        return (
            <profile className={this.props.className} >
                <ProfileBackPic />
                <div className='pos-relative'>
                    <ProfileUserData userId={userId} />
                    <div className='all-center-flex life-container'>
                        <div className='life-left-con'>
                            <ProfileDetail />
                        </div>
                        <div className='life-center-con'>
                            <ProfileTabs userId={userId} />
                        </div>
                        <div className='life-right-con'>
                        </div>
                    </div>
                    <ProfileOverlay />
                </div>
            </profile>
        )
    }
}

export default Profile;