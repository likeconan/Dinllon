import React, { Component } from 'react';
import store from 'store2';
import Classnames from 'classnames';
import { connect } from 'react-redux';
import { getProfile } from '../actions/profile.action';
import ProfileBackPic from '../components/ProfileBackPic/ProfileBackPic'
import ProfileDetail from '../components/ProfileDetail/ProfileDetail'
import ProfileUserData from '../components/ProfileUserData/ProfileUserData'

@connect((store) => {
    return {
        isAuthorize: store.user.isAuthorize
    }
})
class Profile extends Component {
    componentWillMount() {
        const userid = store.session('ss.profile.user.id');
        this.props.dispatch(getProfile(userid));
    }

    render() {
        return (
            <profile-page class={Classnames({ 'logged-page': this.props.isAuthorize })}>
                <ProfileBackPic />
                <ProfileUserData />
                <div className='profile-center-con'>
                    <ProfileDetail />
                </div>
            </profile-page>
        );
    }
}

export default Profile;