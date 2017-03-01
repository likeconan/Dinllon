import React, { Component } from 'react';
import store from 'store2';
import Classnames from 'classnames';
import { connect } from 'react-redux';
import { getProfile } from '../actions/profile.action';
import ProfileBackPic from '../components/ProfileBackPic/ProfileBackPic';
import ProfileDetail from '../components/ProfileDetail/ProfileDetail';
import ProfileUserData from '../components/ProfileUserData/ProfileUserData';
import ProfileTabs from '../components/ProfileTabs/ProfileTabs';
import ProfileOverlay from '../components/ProfileOverlay/ProfileOverlay';

@connect()

class Profile extends Component {
    componentWillMount() {
        const userid = store.session('ss.profile.user.id');
        this.props.dispatch(getProfile(userid));
    }
    render() {
        console.log('profile-page');
        return (
            <profile-page>
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