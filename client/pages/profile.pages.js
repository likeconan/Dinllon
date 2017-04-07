import React, { Component } from 'react';
import Classnames from 'classnames';
import ProfileBackPic from '../components/ProfileBackPic/ProfileBackPic';
import ProfileDetail from '../components/ProfileDetail/ProfileDetail';
import ProfileUserData from '../components/ProfileUserData/ProfileUserData';
import ProfileTabs from '../components/ProfileTabs/ProfileTabs';
import ProfileOverlay from '../components/ProfileOverlay/ProfileOverlay';




class Profile extends Component {
    render() {
        return (
            <profile-page class={this.props.className}>
                <ProfileBackPic />
                <div className='pos-relative'>
                    <ProfileUserData />
                    <div className='all-center-flex life-container'>
                        <div className='life-left-con'>
                            <ProfileDetail />
                        </div>
                        <div className='life-center-con'>
                            <ProfileTabs />
                        </div>
                        <div className='life-right-con'>
                        </div>
                    </div>
                    <ProfileOverlay />
                </div>
            </profile-page>
        );
    }
}

export default Profile;